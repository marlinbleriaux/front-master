import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { useParams, useNavigate } from "react-router";

import ConfirmModal from "../../components/ConfirmModal";
import formatDate from "../../utils/formatDate";
import { PdfThumbnail } from "../../components/PdfThumbnail";
import { showError, showSucces } from '../../components/Toasts';
import { deleteInfo, getInfoById } from "../../slices/infos";

function DetailsInfo(){
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.infos);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const { id } = useParams();
    const navigateTo = useNavigate();
  
    useEffect(async () => {
      await dispatch(getInfoById(id))
        .unwrap()
        .then((data) => {
        })
        .catch(() => {});
    }, []);
  
    const deleteR = () => {
      dispatch(deleteInfo({ id: id, data: {} }))
        .unwrap()
        .then(() => {
          showSucces("Epreuve supprime avec success");
          setConfirm(false);
        })
        .catch(() => {
          showError("Une erreur c'est produite");
          setConfirm(false);
        });
    };
  
    return (
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/* Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl font-bold font-medium text-cyan-500 hover:text-cyan-600">
                  Details
                </h1>
              </div>
            </div>
  
            {/* <div className="md:text-xl text-gray-900 mb-10">
              <div className="text-left">
                <span className="underline">ID </span>: {info?._id}
              </div>
            </div> */}
            <div className="container mx-auto mt-8 p-8 bg-white shadow-lg ">
              <h1 className="text-3xl font-bold mb-4">{info?.category}</h1>
  
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="font-bold">Code:</p>
                  <p>{info?.code}</p>
                </div>
                <div>
                  <p className="font-bold">publishedAt:</p>
                  <p>{formatDate(info?.publishedAt, "YYYY-MM-DD")}</p>
                </div>
                <div>
                  <p className="font-bold">endAt:</p>
                  <p>{formatDate(info?.endAt, "YYYY-MM-DD")}</p>
                </div>
                <div>
                  <p className="font-bold">Type:</p>
                  <p>{info?.type}</p>
                </div>
                <div>
                  <p className="font-bold">Sous Type:</p>
                  <p>{info?.subType}</p>
                </div>
                <div>
                  <p className="font-bold">Niveau:</p>
                  <p>{info?.level}</p>
                </div>
                <div>
                  <p className="font-bold">University:</p>
                  <p>{info?.university}</p>
                </div>
                <div>
                  <p className="font-bold">Faculte:</p>
                  <p>{info?.faculty}</p>
                </div>
                <div>
                  <p className="font-bold">Departement:</p>
                  <p>{info?.department}</p>
                </div>
                <div>
                  <p className="font-bold">Filiere:</p>
                  <p>{info?.filiere}</p>
                </div>
                <div>
                  <p className="font-bold">Scope:</p>
                  <p>{info?.scope}</p>
                </div>
                <div>
                  <p className="font-bold">Views:</p>
                  <p>{info?.views}</p>
                </div>
                <div>
                  <p className="font-bold">Titre:</p>
                  <p>{info?.title}</p>
                </div>
                <div>
                  <p className="font-bold">User:</p>
                  <p>{info?.user?.toString()}</p>
                </div>
              <div className="m-3 w-24">
                <p className="font-bold">Status:</p>
                <p>{info?.status}</p>
              </div>

              <div className="m-3 w-24">
                <label className="block text-sm font-medium">Delete</label>
                <div className="flex items-center">
                  <div className="form-switch">
                    <input
                      type="checkbox"
                      id="switch-2"
                      className="sr-only"
                      checked={info?.isDelete ?? false}
                      onChange={() => {}}
                      disabled
                    />
                    <label className="bg-slate-400" htmlFor="switch-2">
                      <span
                        className="bg-white shadow-sm"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Delete</span>
                    </label>
                  </div>
                  <div className="text-sm text-slate-400 italic ml-2">
                    {info?.isDelete ?? false ? "Oui" : "Non"}
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold">Version:</p>
                <p>{info?.version}</p>
              </div>
              <div>
                <p className="font-bold">CreatedAt:</p>
                <p>{formatDate(info?.createdAt, "YYYY-MM-DD")}</p>
              </div>
              <div>
                <p className="font-bold">UpdatedAt :</p>
                <p>{formatDate(info?.updatedAt, "YYYY-MM-DD")}</p>
              </div>
                {/* Ajoutez d'autres champs de données selon vos besoins */}
              </div>
  
              <div className="mb-6">
                <p className="font-bold">Description:</p>
                <p>{info?.description}</p>
              </div>
  
              <div className="mb-6">
                <p className="font-bold">Proposed By:</p>
                <p>{info?.proposedBy}</p>
              </div>
              <div>
                <p className="font-bold">Assets:</p>
                {info?.assets?.map((file, index) => (
                  <div key={file._id}>
                    <p>File {index + 1}:</p>
                    <p>Filename: {file.filename}</p>
                    <p>File Type: {file.contentType}</p>
                    <p>Size: {file.size} bytes</p>
                    <p>URL: <a href={file.completedUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-500">{file.completedUrl}</a></p>
  
                    {/* Intégration du PDF avec une balise iframe */}
                    <div>
                      <PdfThumbnail pdfUrl={file.completedUrl} />
                    </div>
  
                    {/* Ajoutez d'autres détails que vous souhaitez afficher */}
                    <hr />
                  </div>
                ))}
              </div>
  
              {/* Ajoutez d'autres sections de détails en fonction de votre modèle de données */}
              <div className="px-5 py-2 border-t border-slate-200">
                <div className="flex flex-wrap justify-center space-x-6">
                  <button
                    className="btn-sm text-left border-slate-200 hover:border-slate-300 text-slate-600"
                    onClick={(e) => {
                      navigateTo("/infos/list");
                    }}
                  >
                    {/* &lt;-  */}
                    {"Annuler"}
                  </button>
                  <button
                    onClick={(e) => {
                      navigateTo("/infos/edit/" + id);
                    }}
                    className="btn-sm text-right bg-cyan-500 hover:bg-cyan-600 text-white"
                  >
                    <svg
                      className="w-4 h-4 fill-current shrink-0 mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                    </svg>
                    Modifier
                  </button>
  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setConfirm(true);
                    }}
                    aria-controls="info-modal"
                    className="btn border-red-400 hover:border-slate-300 text-rose-500"
                  >
                    <svg
                      className="w-4 h-4 fill-current shrink-0"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                    </svg>
                    <span className="ml-2">{"Supprimer"}</span>
                  </button>
                </div>
              </div>
            </div>
  
            {/* More actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">
              {/* Left side */}
              <div className="mb-4 sm:mb-0"></div>
            </div>
          </div>
        </div>
        <ConfirmModal
          show={confirm}
          setShow={setConfirm}
          action={deleteR}
          title={"supprimer" + "?"}
          subtitle={
            "cette action sera irreversible. Voulez-vous vraiment supprimer cette information?"
          }
        />
      </div>
    );

}
export default DetailsInfo;