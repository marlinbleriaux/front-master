import React, { useRef, useState, useEffect, useCallback } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import SearchForm from "../partials/actions/SearchForm";
import FilterButton from "../components/DropdownFilter";
import Webcam from "react-webcam";
import { checkAttendance } from "../slices/student";
import { useDispatch, useSelector } from "react-redux";
import * as faceapi from 'face-api.js';

function Campaigns() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);
  const [faceDis, setFaceDis] = useState(null);
  const [matcheIndexes, setMatcheIndexes] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const { message: message } = useSelector((state) => state.message);
  const [faceRectangles, setFaceRectangles] = useState([]);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models'; // Assurez-vous que les modèles sont disponibles dans ce dossier public
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };
    loadModels();
  }, []);

  const detectFaces = useCallback(async () => {
    if (
      webcamRef.current &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const displaySize = {
        width: video.videoWidth,
        height: video.videoHeight,
      };

      faceapi.matchDimensions(canvasRef.current, displaySize);

      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptors()
        .withFaceExpressions();

      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      canvasRef.current
        .getContext('2d')
        .clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);

      setFaceRectangles(resizedDetections);
    }
  }, [webcamRef, canvasRef, setFaceRectangles]);

  useEffect(() => {
    const interval = setInterval(() => {
      detectFaces();
    }, 100);
    return () => clearInterval(interval);
  }, [detectFaces]);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      sendPhotoToBackend(imageSrc);
    }
  };

  const dataURLtoBlob = (dataURL) => {
    const byteString = atob(dataURL.split(",")[1]);
    const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const sendPhotoToBackend = async (imageSrc) => {
    try {
      const blob = dataURLtoBlob(imageSrc);
      const formData = new FormData();
      formData.append("photo", blob, "photo.jpg");
      const response = await dispatch(checkAttendance(formData)).unwrap();
      
      setErrorMessage(null);
      if (response.result.student) {
        setStudentInfo(response.result.student);
      }
      if (response.faceDis) {
        setFaceDis(response.faceDis);
      }
      if (response.matcheIndexes !== undefined) {
        setMatcheIndexes(response.matcheIndexes);
      }
    } catch (error) {
      setErrorMessage(message.message);
      setStudentInfo(null);
      setFaceDis(null);
      setMatcheIndexes(null);

      console.error("Error uploading photo:", message);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Check Student 👀
                </h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <SearchForm />
                {/* Filter button */}
                <FilterButton align="right" />
                {/* Create campaign button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Create Student</span>
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Camera Card */}
              <div className="bg-white shadow-lg rounded-sm border border-slate-200 p-5">
                <h2 className="text-xl font-bold mb-4">Capture Photo</h2>

                <div style={{ position: 'relative' }}>
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="mb-4"
                    videoConstraints={{
                      width: 640,
                      height: 480,
                      facingMode: "user"
                    }}
                  />
                  <canvas
                    ref={canvasRef}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </div>

                <button
                  className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                  onClick={capturePhoto}
                >
                  Capture Photo
                </button>
              </div>

              {/* Student Info Card */}
              <div className="bg-white shadow-lg rounded-sm border border-slate-200 p-5">
                <h2 className="text-xl font-bold mb-4">Student Information</h2>
                {errorMessage && (
                  <p style={{ color: "red" }}>{errorMessage}</p>
                )}
                {studentInfo ? (
                  <div>
                    <p
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "10px",
                      }}
                    >
                      <strong>Name:</strong> {studentInfo.name}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#e9ecef",
                        padding: "10px",
                      }}
                    >
                      <strong>Matricule:</strong> {studentInfo.matricule}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "10px",
                      }}
                    >
                      <strong>Email:</strong> {studentInfo.email}
                    </p>
                    <p
                      style={{
                        padding: "10px",
                        backgroundColor: "#e9ecef",
                      }}
                    >
                      <strong>Phone Number:</strong> {studentInfo.phoneNumber}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "10px",
                      }}
                    >
                      <strong>Sexe:</strong> {studentInfo.sexe}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#e9ecef",
                        padding: "10px",
                      }}
                    >
                      <strong>Filiere:</strong> {studentInfo.filiere}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "10px",
                      }}
                    >
                      <strong>Departement:</strong> {studentInfo.departement}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#e9ecef",
                        padding: "10px",
                      }}
                    >
                      <strong>Faculte:</strong> {studentInfo.faculty}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "10px",
                      }}
                    >
                      <strong>Birthdate:</strong> {studentInfo.birthdate}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#e9ecef",
                        padding: "10px",
                      }}
                    >
                      <strong>Level:</strong> {studentInfo.level}
                    </p>
                  </div>
                ) : (
                  <p>No student information available.</p>
                )}
                {faceDis !== null && (
                  <div>
                    <p
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "10px",
                      }}
                    >
                      <strong>Face Distance:</strong> {faceDis[0]}
                    </p>
                  </div>
                )}
                {matcheIndexes !== null && (
                  <div>
                    <p
                      style={{
                        backgroundColor: "#e9ecef",
                        padding: "10px",
                      }}
                    >
                      <strong>Match Index:</strong> {matcheIndexes}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Campaigns;
