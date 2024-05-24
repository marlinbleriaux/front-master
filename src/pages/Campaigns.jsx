import React, { useRef, useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import SearchForm from "../partials/actions/SearchForm";
import FilterButton from "../components/DropdownFilter";
import Webcam from "react-webcam";
import axios from "axios";
import {checkAttendance} from "../slices/student";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux";

function Campaigns() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null); // État pour stocker les informations de l'étudiant
  const [faceDis, setFaceDis] = useState(null); // État pour stocker la distance de visage
  const [matcheIndexes, setMatcheIndexes] = useState(null); // État pour stocker les index des correspondances
  const [errorMessage, setErrorMessage] = useState(null); // État pour stocker le message d'erreur
  const { message: message } = useSelector((state) => state.message);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const dispatch = useDispatch();

  // const tracking = require('tracking');


  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      sendPhotoToBackend(imageSrc);
    }
  };
  // useEffect(() => {
  //   const tracker = new tracking.ObjectTracker('face');
  //   tracker.setInitialScale(4);
  //   tracker.setStepSize(2);
  //   tracker.setEdgesDensity(0.1);
  
  //   tracking.track(webcamRef.current.video, tracker);
  
  //   tracker.on('track', (event) => {
  //     event.data.forEach((rect) => {
  //       console.log(rect.x, rect.y, rect.height, rect.width);
  //       // Faites quelque chose avec les données de détection des visages, par exemple, affichez-les sur l'image
  //       const canvas = document.createElement('canvas');
  //       const context = canvas.getContext('2d');
  //       context.strokeStyle = '#a64ceb';
  //       context.strokeRect(rect.x, rect.y, rect.width, rect.height);
  //     });
  //   });
  // }, []);

  const dataURLtoBlob = (dataURL) => {
    const byteString = atob(dataURL.split(",")[1]);
    const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    // console.log("ia");
    return new Blob([ab], { type: mimeString });
  };

  const sendPhotoToBackend = async (imageSrc) => {
    try {
      const blob = dataURLtoBlob(imageSrc);
     
      const formData = new FormData();
      formData.append("photo", blob, "photo.jpg");
      // console.log(formData)
   
      // console.log("sssssssssssssssss");
      // Appeler checkAttendance (action asynchrone)
      const response = await dispatch(checkAttendance(formData)).unwrap();
      console.log("datttttttttttt");
      // const response = await axios.post(
      //   "http://127.0.0.1:5000/api/check",
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );
      console.log(response)

      // Réinitialiser le message d'erreur
      setErrorMessage(null);

      // Mettre à jour l'état avec les informations de l'étudiant et autres détails
      if ( response.result.student) {
        setStudentInfo(response.result.student);
      }
      if (response.faceDis) {
        setFaceDis(response.faceDis);
      }
      if (response.matcheIndexes !== undefined) {
        setMatcheIndexes(response.matcheIndexes);
      }
    } catch (error) {
      // Mettre à jour le message d'erreu
      console.log("<<<<<<<s>>>>>>>")
      console.log(message)
      setErrorMessage(
      message.message
      );
      setStudentInfo(null);
      setFaceDis(null);
      setMatcheIndexes(null);

      console.error("Error uploading photo:",  message);
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
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="mb-4"
                />
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
                  <p style={{ color: "red" }}>{errorMessage}</p> // Affichage du message d'erreur en rouge
                )}
                {studentInfo ? (
                  <div>
                    <p
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "10px",
                        // borderRadius: "5px",
                      }}
                    >
                      <strong>Name:</strong> {studentInfo.name}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#e9ecef",
                        padding: "10px",
                        // borderRadius: "5px",
                      }}
                    >
                      <strong>Matricule:</strong> {studentInfo.matricule}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "10px",
                        // borderRadius: "5px",
                      }}
                    >
                      <strong>Email:</strong> {studentInfo.email}
                    </p>
                    <p
                      style={{
                        // backgroundColor: "#ced4da",
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
                        // borderRadius: "5px",
                      }}
                    >
                      <strong>Sexe:</strong> {studentInfo.sexe}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#e9ecef",
                        padding: "10px",
                        // borderRadius: "5px",
                        // color: "white",
                      }}
                    >
                      <strong>Filiere:</strong> {studentInfo.filiere}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "10px",
                        // borderRadius: "5px",
                        // color: "white",
                      }}
                    >
                      <strong>Departement:</strong> {studentInfo.departement}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#e9ecef",
                        padding: "10px",
                        // borderRadius: "5px",
                        // color: "white",
                      }}
                    >
                      <strong>Faculte:</strong> {studentInfo.faculty}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "10px",
                        // borderRadius: "5px",
                        // color: "white",
                      }}
                    >
                      <strong>Birthdate:</strong> {studentInfo.birthdate}
                    </p>
                    <p
                      style={{
                        backgroundColor: "#e9ecef",
                        padding: "10px",
                        // borderRadius: "5px",
                        // color: "white",
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
                        // borderRadius: "5px",
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
                        // borderRadius: "5px",
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
