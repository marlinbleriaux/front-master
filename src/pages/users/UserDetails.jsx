import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getUserById } from "../../slices/user";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { useParams, useNavigate } from "react-router";

import AppImage01 from "../../images/amphimill/default_person_picture.png";

import { deleteUser, getUserById } from "../../slices/users";

import ConfirmModal from "../../components/ConfirmModal";
import formatDate from "../../utils/formatDate";
import { PdfThumbnail } from "../../components/PdfThumbnail";
import { showError, showSucces } from "../../components/Toasts";

function UserDetails({ handleFormSubmit }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const [tableData, setTableData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { id } = useParams();
  const [confirm, setConfirm] = useState(false);
  // const [user, setUser] = useState({});
  const navigateTo = useNavigate();
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    // Effectuer l'appel API pour récupérer l'image
    // et mettre à jour imageURL dans l'état du composant
    // fetch('https://example.com/api/image')
    //   .then(response => response.json())
    //   .then(data => setImageURL(data.imageURL))
    //   .catch(error => console.log(error));
  }, []);

  useEffect(async () => {
    await dispatch(getUserById(id))
      .unwrap()
      .then((data) => {
        // setUser(data);
        // console.log(user?.createdAt);
      })
      .catch(() => {});
  }, []);

  const deleteR = () => {
    dispatch(deleteUser({ id: id, data: {} }))
      .unwrap()
      .then(() => {
        showSucces("Utilisateur supprime avec success");
        setConfirm(false);
      })
      .catch(() => {
        showError("Une erreur c'est produite");
        setConfirm(false);
      });
  };

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const handleSubmit = (e) => {
    setTableData([...tableData, formData]);
    e.preventDefault();
  };
  const RenderBool = ({ label, active }) => {
    return (
      <div className="">
          <label className=" text-sm font-medium mr-2">{label}</label>
        <div className="block items-center">
          <div className="form-switch ">
            <input
              type="checkbox"
              id="switch-2"
              className="sr-only"
              checked={active ?? false}
              onChange={() => {}} 
              // disabled
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
          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold font-medium text-cyan-500 hover:text-cyan-600">
              Details
            </h1>
          </div>
        </div>

        <div className="md:text-xl text-gray-900 mb-10">
          <div className="text-left">
            <span className="underline">ID </span>: {user?._id}
          </div>
        </div>
        {/* <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-purple-200"> */}
        <div className=" mx-auto my-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="container mx-auto mt-8 p-8 bg-white shadow-lg ">
            <div className="flex items-center justify-center">
              <img
                className="object-cover object-center w-full  rounded-lg"
                src={user?.picture?.completedUrl ?? AppImage01}
                style={{ height: 100, width: 120 }}
                // style={{ height: height, width: width }}
                alt="Logos"
              />
            </div>
            <h1 className="text-3xl font-bold mb-4">Code: {user?.code}</h1>

            <div className="flex items-center justify-evenly flex-wrap space-y-5 space-x-5">
              <div className="mt-5">
                <p className="font-bold">Nom:</p>
                <p>{user?.firstName}</p>
              </div>
              <div className="">
                <p className="font-bold">Prenom:</p>
                <p>{user?.lastName}</p>
              </div>
              <div className="">
                <p className="font-bold">Telephone:</p>
                <p>{user?.phoneNumber}</p>
              </div>
              <div className="">
                <p className="font-bold">Email:</p>
                <p>{user?.email}</p>
              </div>
              <div className="">
                <p className="font-bold">Sexe:</p>
                <p>{user?.sexe}</p>
              </div>
              <div className="">
                <p className="font-bold">Type:</p>
                <p>{user?.type}</p>
              </div>

              <div className="">
                <p className="font-bold">Birthdate:</p>
                <p>{formatDate(user?.birthdate, "YYYY-MM-DD")}</p>
              </div>
              <div className="">
                <p className="font-bold">Nombre de mot de passe rater:</p>
                <p>{user?.passwordAttempt}</p>
              </div>
              <div className="w-full"></div>
              <RenderBool active={user?.isActive} label={"isActive"} />
              <RenderBool active={user?.inactivePermanent} label={"Desactiver de facon permanente:"} />
              <RenderBool active={user?.phoneNumber_activated} label={"PhoneNumber Activated:"} />
              <RenderBool active={user?.blocked} label={"Blocker"} />
              <RenderBool active={user?.phoneVerified} label={"Numero de telephone verifie:"} />
              
              <div className="">
                <p className="font-bold">Inviter Par:</p>
                <p>{user?.invitedBy}</p>
              </div>

              <h1 className="text-3xl font-bold mb-4 w-full">Student</h1>
              <div className="">
                <p className="font-bold">Universite:</p>
                <p>{user?.student?.university}</p>
              </div>
              <div className="">
                <p className="font-bold">Ecole:</p>
                <p>{user?.student?.faculty}</p>
              </div>
              <div className="">
                <p className="font-bold">Departement:</p>
                <p>{user?.student?.department}</p>
              </div>
              <div className="">
                <p className="font-bold">Filiere:</p>
                <p>{user?.student?.filiere}</p>
              </div>
              <div className="">
                <p className="font-bold">Niveau:</p>
                <p>{user?.student?.level}</p>
              </div>

              <h1 className="text-3xl font-bold mb-4 w-full">Metadata</h1>
              <div className="">
                <p className="font-bold">Universite:</p>
                <p>{user?.metadata?.university}</p>
              </div>
              <div className="">
                <p className="font-bold">Ecole:</p>
                <p>{user?.metadata?.faculty}</p>
              </div>
              <div className="">
                <p className="font-bold">Departement:</p>
                <p>{user?.metadata?.department}</p>
              </div>
              <div className="">
                <p className="font-bold">Filiere:</p>
                <p>{user?.metadata?.filiere}</p>
              </div>
              <div className="">
                <p className="font-bold">Niveau:</p>
                <p>{user?.metadata?.level}</p>
              </div>

              <h1 className="text-3xl font-bold mb-4 w-full">Role</h1>
              <div className="">
                <p className="font-bold">ID:</p>
                <p>{user?.role?._id}</p>
              </div>
              <div className="">
                <p className="font-bold">Nom:</p>
                <p>{user?.role?.name}</p>
              </div>
              <div className="">
                <p className="font-bold">type:</p>
                <p>{user?.role?.type}</p>
              </div>
              <div className="">
                <p className="font-bold">Active:</p>
                <p>{user?.role?.isActive}</p>
              </div>

              <h1 className="text-3xl font-bold mb-4 w-full">Parametre</h1>
              <RenderBool active={user?.setting?.paperNotification} label={"Paper Notification"} />
              <RenderBool active={user?.setting?.infoNotification} label={"Info Notification"} />
              <RenderBool active={user?.setting?.logementNotification} label={"Logement Notification"} />
              
              <div className="">
                <p className="font-bold">language:</p>
                <p>{user?.setting?.language}</p>
              </div>
              <div className="w-full"></div>

              <div className="m-3 w-24">
                <p className="font-bold">Status:</p>
                <p>{user?.status}</p>
              </div>
              <RenderBool active={user?.isDelete} label={"Delete"} />
              <div className="">
                <p className="font-bold">Version:</p>
                <p>{user?.version}</p>
              </div>
              <div className="">
                <p className="font-bold">CreatedAt:</p>
                <p>{formatDate(user?.createdAt, "YYYY-MM-DD")}</p>
              </div>
              <div className="">
                <p className="font-bold">UpdatedAt :</p>
                <p>{formatDate(user?.updatedAt, "YYYY-MM-DD")}</p>
              </div>
            </div>

            {/* Ajoutez d'autres champs de données selon vos besoins */}

            <h1 className="text-3xl font-bold mb-4">Appareils</h1>

            <div className="overflow-x-auto shadow-md sm:rounded-lg table-wrp block">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* Table header */}
                <thead className="text-xs font-semibold uppercase text-white bg-slate-50 border-t border-b border-slate-200">
                  <tr className="odd:bg-white odd:dark:bg-slate-800 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Nom</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Model</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Systeme</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Token</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Actif</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-200">
                  {user?.devices?.map((elt, ind) => {
                    return (
                      <tr
                        key={ind}
                        className="cursor-pointer odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-100 border-b dark:border-gray-200"
                      >
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div
                            className="description-container"
                            style={{ maxWidth: "130px" }}
                          >
                            <div className="font-medium text-slate-800 description">
                              {elt?.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {elt?.model}
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {elt?.os}
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {elt?.token}
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {elt?.isEnable}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <h1 className="text-3xl font-bold mb-4">Credit</h1>

            <div className="overflow-x-auto shadow-md sm:rounded-lg table-wrp block">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* Table header */}
                <thead className="text-xs font-semibold uppercase text-white bg-slate-50 border-t border-b border-slate-200">
                  <tr className="odd:bg-white odd:dark:bg-slate-800 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Nom</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Type</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Credit</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-200">
                  {user?.credits?.map((elt, ind) => {
                    return (
                      <tr
                        key={ind}
                        className="cursor-pointer odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-100 border-b dark:border-gray-200"
                      >
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div
                            className="description-container"
                            style={{ maxWidth: "130px" }}
                          >
                            <div className="font-medium text-slate-800 description">
                              {elt?.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {elt?.type}
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {elt?.credit}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <h1 className="text-3xl font-bold mb-4">Documents Personnels</h1>

            <div className="overflow-x-auto shadow-md sm:rounded-lg table-wrp block">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* Table header */}
                <thead className="text-xs font-semibold uppercase text-white bg-slate-50 border-t border-b border-slate-200">
                  <tr className="odd:bg-white odd:dark:bg-slate-800 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Titre</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Type</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Assets</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-200">
                  {user?.personalDocuments?.map((elt, ind) => {
                    return (
                      <tr
                        key={ind}
                        className="cursor-pointer odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-100 border-b dark:border-gray-200"
                      >
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div
                            className="description-container"
                            style={{ maxWidth: "130px" }}
                          >
                            <div className="font-medium text-slate-800 description">
                              {elt?.title}
                            </div>
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {elt?.type}
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {elt?.assets && elt?.assets?.length != 0
                              ? elt?.assets[0]?.baseUrl
                              : ""}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h1 className="text-3xl font-bold mb-4">
              Information de verifications
            </h1>

            <div className="overflow-x-auto shadow-md sm:rounded-lg table-wrp block">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* Table header */}
                <thead className="text-xs font-semibold uppercase text-white bg-slate-50 border-t border-b border-slate-200">
                  <tr className="odd:bg-white odd:dark:bg-slate-800 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Status</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Type</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Token</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Creer le</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-200">
                  {user?.verifications?.map((elt, ind) => {
                    return (
                      <tr
                        key={ind}
                        className="cursor-pointer odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-100 border-b dark:border-gray-200"
                      >
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div
                            className="description-container"
                            style={{ maxWidth: "130px" }}
                          >
                            <div className="font-medium text-slate-800 description">
                              {elt?.statut}
                            </div>
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {elt?.type}
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {elt?.token}
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            <p>{formatDate(elt?.birthdate, "YYYY-MM-DD")}</p>
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
                    navigateTo("/user/list");
                  }}
                >
                  {/* &lt;-  */}
                  {"Annuler"}
                </button>
                <button
                  onClick={(e) => {
                    navigateTo("/users/edit/" + id);
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
    </div>
  );
}

export default UserDetails;
