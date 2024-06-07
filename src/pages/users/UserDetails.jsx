import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { useParams, useNavigate } from "react-router";
import AppImage01 from "../../images/amphimill/default_person_picture.png";
import { deleteUser, getUserById } from "../../slices/users";
import { getStudentById ,enrollStudent} from "../../slices/student";
import ConfirmModal from "../../components/ConfirmModal";
import formatDate from "../../utils/formatDate";
import Webcam from "react-webcam";
import { showError, showSucces } from "../../components/Toasts";

function UserDetails({ handleFormSubmit }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const [tableData, setTableData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { id } = useParams();
  const [confirm, setConfirm] = useState(false);
  const navigateTo = useNavigate();
  const [imageURL, setImageURL] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const webcamRef = useRef(null);
const userId=user?.student?.id
  useEffect(() => {
    // Fetch student details by ID
    dispatch(getStudentById(id))
      .unwrap()
      .then((data) => {
        console.log(data);
        // setPreview(data.picture?.completedUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, id]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleWebcamCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const imageBlob = dataURLtoBlob(imageSrc);
    const file = new File([imageBlob], 'webcam.jpg', { type: 'image/jpeg' });
    setFile(file);
    setPreview(imageSrc);
    setIsWebcamOpen(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // const blob = dataURLtoBlob(imageSrc);
      const formData = new FormData();
      formData.append('photo', file);
      dispatch(enrollStudent({  id: userId, photoFile: formData }))
        .unwrap()
        .then(() => {
          showSucces("Image uploaded successfully");
        })
        .catch(() => {
          showError("An error occurred during the upload");
        });
    }
  };

  const deleteR = () => {
    dispatch(deleteUser({ id }))
      .unwrap()
      .then(() => {
        showSucces("User deleted successfully");
        setConfirm(false);
        navigateTo("/user/list");
      })
      .catch(() => {
        showError("An error occurred");
        setConfirm(false);
      });
  };

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const RenderBool = ({ label, active }) => {
    return (
      <div className="">
        <label className="text-sm font-medium mr-2">{label}</label>
        <div className="block items-center">
          <div className="form-switch">
            <input
              type="checkbox"
              id="switch-2"
              className="sr-only"
              checked={active ?? false}
              onChange={() => {}}
            />
            <label className="bg-slate-400" htmlFor="switch-2">
              <span className="bg-white shadow-sm" aria-hidden="true"></span>
              <span className="sr-only">{label}</span>
            </label>
          </div>
          <div className="text-sm text-slate-400 italic ml-2">
            {active ?? false ? "Oui" : "Non"}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Page header */}
        <div className="sm:flex sm:justify-between sm:items-center mb-5">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold font-medium text-cyan-500 hover:text-cyan-600">
              Enrollement student
            </h1>
          </div>
        </div>

        <div className="mx-auto my-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="container mx-auto mt-8 p-8 bg-white shadow-lg ">
            <div className="flex items-center justify-center">
              <img
                className="object-cover object-center w-full rounded-lg cursor-pointer"
                src={preview || user?.picture?.completedUrl || AppImage01}
                style={{ height: 100, width: 120 }}
                alt="Profile"
                onClick={handleImageClick}
              />
              <input
                id="fileInput"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: 'none' }}
              />
              <button onClick={() => setIsWebcamOpen(!isWebcamOpen)}>
                {isWebcamOpen ? 'Close Webcam' : 'Open Webcam'}
              </button>
              {isWebcamOpen && (
                <div>
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={120}
                    height={100}
                  />
                  <button onClick={handleWebcamCapture}>Capture Photo</button>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit}>
              <button type="submit" className="btn bg-cyan-500 hover:bg-cyan-600 text-white mt-4">
                Upload
              </button>
            </form>

            <div className="flex items-center justify-evenly flex-wrap space-y-5 space-x-5 mt-8">
              <div className="mt-5">
                <p className="font-bold">Matricule:</p>
                <p>{user?.student?.matricule}</p>
              </div>
              <div className="">
                <p className="font-bold">Nom:</p>
                <p>{user?.student?.name}</p>
              </div>
              <div className="">
                <p className="font-bold">Telephone:</p>
                <p>{user?.student?.phoneNumber}</p>
              </div>
              <div className="">
                <p className="font-bold">Email:</p>
                <p>{user?.student?.email}</p>
              </div>
              <div className="">
                <p className="font-bold">Sexe:</p>
                <p>{user?.student?.sexe}</p>
              </div>
              <div className="">
                <p className="font-bold">Birthdate:</p>
                <p>{formatDate(user?.birthdate, "YYYY-MM-DD")}</p>
              </div>
              <div className="">
                <p className="font-bold">Universite:</p>
                <p>{user?.student?.university}</p>
              </div>
              <div className="">
                <p className="font-bold">Faculter:</p>
                <p>{user?.student?.faculty}</p>
              </div>
              <div className="">
                <p className="font-bold">Departement:</p>
                <p>{user?.student?.departement}</p>
              </div>
              <div className="">
                <p className="font-bold">Filiere:</p>
                <p>{user?.student?.filiere}</p>
              </div>
              <div className="">
                <p className="font-bold">Niveau:</p>
                <p>{user?.student?.level}</p>
              </div>
            </div>

            <div className="px-5 py-2 border-t border-slate-200">
              <div className="flex flex-wrap justify-center space-x-6">
                <button
                  className="btn-sm text-left border-slate-200 hover:border-slate-300 text-slate-600"
                  onClick={() => navigateTo("/user/list")}
                >
                  Annuler
                </button>
                <button
                  onClick={() => navigateTo("/users/edit/" + id)}
                  className="btn-sm text-right bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  <svg className="w-4 h-4 fill-current shrink-0 mr-2" viewBox="0 0 16 16">
                    <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                  </svg>
                  Modifier
                </button>
                <button
                  onClick={() => setConfirm(true)}
                  aria-controls="info-modal"
                  className="btn border-red-400 hover:border-slate-300 text-rose-500"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                    <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                  </svg>
                  <span className="ml-2">Supprimer</span>
                </button>
              </div>
            </div>
          </div>

          <ConfirmModal
            show={confirm}
            setShow={setConfirm}
            action={deleteR}
            title={"supprimer?"}
            subtitle={"Cette action sera irréversible. Voulez-vous vraiment supprimer cette epreuve?"}
          />
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
