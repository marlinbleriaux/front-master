import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSchool, getSchoolById } from "../../slices/schools";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { useParams, useNavigate } from "react-router";

import ConfirmModal from "../../components/ConfirmModal";
import formatDate from "../../utils/formatDate";
import { PdfThumbnail } from "../../components/PdfThumbnail";
import { showError, showSucces } from "../../components/Toasts";
import Matiere from "./modal/Matiere";

function DetailsSchool({ handleFormSubmit }) {
  const dispatch = useDispatch();
  const { school } = useSelector((state) => state.schools);
  const [tableData, setTableData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const { id } = useParams();
  const navigateTo = useNavigate();

  const [show, setShow] = useState(false);
  const [matiere, setMatiere] = useState({});

  useEffect(async () => {
    await dispatch(getSchoolById(id))
      .unwrap()
      .then((data) => {
        // setSchool(data[0]);
      })
      .catch(() => {});
  }, []);

  const deleteR = () => {
    dispatch(deleteSchool({ id: id, data: {} }))
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

          <div className="md:text-xl text-gray-900 mb-10">
            <div className="text-left">
              <span className="underline">ID </span>: {school?._id}
            </div>
          </div>
          <div className="container mx-auto mt-8 p-8 bg-white shadow-lg ">
            <h1 className="text-3xl font-bold mb-4">{school?.ue}</h1>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="font-bold">Code:</p>
                <p>{school?.code}</p>
              </div>

              <div>
                <p className="font-bold">Type:</p>
                <p>{school?.type}</p>
              </div>

              <div>
                <p className="font-bold">Parent Id:</p>
                <p>{school?.parentId}</p>
              </div>
              <div>
                <p className="font-bold">Coordinator:</p>
                <p>{school?.coordinator?.name}</p>
              </div>
              <div>
                <p className="font-bold">University:</p>
                <p>{school?.university}</p>
              </div>
              <div>
                <p className="font-bold">Name:</p>
                <p>{school?.name}</p>
              </div>
              <div>
                <p className="font-bold">Abreviation:</p>
                <p>{school?.abr}</p>
              </div>
              <div>
                <p className="font-bold">Value:</p>
                <p>{school?.value}</p>
              </div>
              <div>
                <p className="font-bold">Scope:</p>
                <p>{school?.scope}</p>
              </div>
              <div>
                <p className="font-bold">Country:</p>
                <p>{school?.country}</p>
              </div>
              <div>
                <p className="font-bold">City:</p>
                <p>{school?.city}</p>
              </div>
              <div>
                <p className="font-bold">Town:</p>
                <p>{school?.town}</p>
              </div>
              <div>
                <p className="font-bold">Region:</p>
                <p>{school?.region}</p>
              </div>
              <div className="m-3 w-24">
                <p className="font-bold">Status:</p>
                <p>{school?.status}</p>
              </div>

              <div className="m-3 w-24">
                <label className="block text-sm font-medium">Delete</label>
                <div className="flex items-center">
                  <div className="form-switch">
                    <input
                      type="checkbox"
                      id="switch-2"
                      className="sr-only"
                      checked={school?.isDelete ?? false}
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
                    {school?.isDelete ?? false ? "Oui" : "Non"}
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold">Version:</p>
                <p>{school?.version}</p>
              </div>
              <div>
                <p className="font-bold">CreatedAt:</p>
                <p>{formatDate(school?.createdAt, "YYYY-MM-DD")}</p>
              </div>
              <div>
                <p className="font-bold">UpdatedAt :</p>
                <p>{formatDate(school?.updatedAt, "YYYY-MM-DD")}</p>
              </div>
              {/* Ajoutez d'autres champs de données selon vos besoins */}
            </div>

            <div className="mb-6">
              <p className="font-bold">Description:</p>
              <p>{school?.description}</p>
            </div>

            <div>
              <p className="font-bold">Assets:</p>
              {school?.assets?.map((file, index) => (
                <div key={file._id}>
                  <p>File {index + 1}:</p>
                  <p>Filename: {file.filename}</p>
                  <p>File Type: {file.contentType}</p>
                  <p>Size: {file.size} bytes</p>
                  <p>
                    URL:{" "}
                    <a
                      href={file.completedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-500"
                    >
                      {file.completedUrl}
                    </a>
                  </p>

                  {/* Intégration du PDF avec une balise iframe */}
                  <div>
                    <PdfThumbnail pdfUrl={file.completedUrl} />
                  </div>

                  {/* Ajoutez d'autres détails que vous souhaitez afficher */}
                  <hr />
                </div>
              ))}
            </div>

            <div
              style={{ height: "800px" }}
              className="overflow-x-auto shadow-md sm:rounded-lg table-wrp block"
            >
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* Table header */}
                <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
                  <tr>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Nom</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Type</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Value</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Abreviation</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Coordinator</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Parent Id</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Id</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-200">
                  {school?.departments?.map((depart, ind) => {
                    return (
                      <tr
                        key={ind}
                        onClick={(e) => {
                          e.stopPropagation();
                          setMatiere(depart);
                          setShow(!show);
                        }}
                        aria-controls="listMatiere-modal"
                        className="cursor-pointer  odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-100 border-b dark:border-gray-200"
                      >
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div
                            className="description-container"
                            style={{ maxWidth: "130px" }}
                          >
                            <div
                              className="font-medium text-slate-800 description"
                              style={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 3,
                                overflow: "hidden",
                              }}
                            >
                              {school?.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {depart?.type}
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {depart?.value}
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {depart?.abr}
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {depart?.coordinator?.name}
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {depart?.parentId}
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {depart?._id}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Ajoutez d'autres sections de détails en fonction de votre modèle de données */}
            <div className="px-5 py-2 border-t border-slate-200">
              <div className="flex flex-wrap justify-center space-x-6">
                <button
                  className="btn-sm text-left border-slate-200 hover:border-slate-300 text-slate-600"
                  onClick={(e) => {
                    navigateTo("/schools/list");
                  }}
                >
                  {/* &lt;-  */}
                  {"Annuler"}
                </button>
                <button
                  onClick={(e) => {
                    navigateTo("/schools/edit/" + id);
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
          "cette action sera irreversible. Voulez-vous vraiment supprimer cette epreuve?"
        }
      />
      <Matiere
        show={show}
        setShow={setShow}
        action={() => {}}
        matiere={matiere}
      />
    </div>
  );
}

export default DetailsSchool;
