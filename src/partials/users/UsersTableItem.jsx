import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppImage01 from "../../images/amphimill/default_person_picture.png";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../slices/users";
import { showError, showSucces } from "../../components/Toasts";
import ConfirmModal from "../../components/ConfirmModal";

function UsersTableItem(props) {
  // console.log("response");
  // console.log(props);

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const deleteR = () => {
    dispatch(deleteUser({ id: props?.user?._id, data: {} }))
      .unwrap()
      .then(() => {
        showSucces("Epreuve supprime avec success");
        setOpen(false);
      })
      .catch(() => {
        showError("Une erreur c'est produite");
        setOpen(false);
      });
  };
  return (
    <tr
      key={props?.user?._id}
      className=" odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-100 border-b dark:border-gray-200"
    >
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <ConfirmModal
            show={open}
            setShow={setOpen}
            action={deleteR}
            title={"Suppression"}
            subtitle={"Voulez-vous vraiment supprimer cet utilisateur ?"}
            yes="Oui"
          />
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input
              id={props?.id}
              className="form-checkbox"
              type="checkbox"
              onChange={props.handleClick}
              checked={props.isChecked}
            />
          </label>
        </div>
      </td>

      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-slate-500"
      >
        <img
          className="object-cover object-center w-full  rounded-xl"
          src={props?.user?.picture?.completedUrl ?? AppImage01}
          style={{ height: 60, width: 60 }}
          // style={{ height: height, width: width }}
          alt="Logos"
        />
        <div className="ps-3">
          <div className="text-base font-semibold">
            {props?.user?.matricule}
          </div>
          {/* <div className="font-normal text-gray-500">
            {props?.user?.lastName}
          </div> */}
        </div>
      </th>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">
          {props?.user?.name}
        </div>
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">
          {props?.user?.phoneNumber}
        </div>
      </td>

     

     

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">{props?.user?.sexe}</div>
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">{props?.user?.email}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">
          {props?.user?.filiere}
        </div>
      </td> <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">
          {props?.user?.level}
        </div>
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="space-x-1">
          <button>
            <Link
              to={`/users/details/${props?.user?.id}`}
              className="text-slate-400 hover:text-slate-500 rounded-full"
            >
              <span className="sr-only">Details</span>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                <path d="M15 15V5l-5-5H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h12c.6 0 1-.4 1-1zM3 2h6v4h4v8H3V2z" />
              </svg>
            </Link>
          </button>
          <button className="text-slate-400 hover:text-slate-500 rounded-full">
            <Link
              to={`/users/edit/${props?.user?.id}`}
              className="text-slate-400 hover:text-slate-500 rounded-full"
            >
              <span className="sr-only">Edit</span>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
              </svg>
            </Link>
          </button>
          <button
            className="text-rose-500 hover:text-rose-600 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
          >
            <span className="sr-only">Delete</span>
            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
              <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default UsersTableItem;
