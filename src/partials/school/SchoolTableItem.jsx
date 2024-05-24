import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppImage01 from "../../images/school.png";
import { deleteSchool } from "../../slices/schools";
import ConfirmModal from "../../components/ConfirmModal";
import { useDispatch } from "react-redux";
import { showError, showSucces } from "../../components/Toasts";

function SchoolTableItem(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const deleteR = () => {
    console.log("====================================");
    console.log(props?.school?._id);
    console.log("====================================");
    dispatch(deleteSchool({ id: props?.school?._id, data: {} }))
      .unwrap()
      .then(() => {
        showSucces("Ecole supprime avec success");
        setOpen(false);
      })
      .catch(() => {
        showError("Une erreur c'est produite");
        setOpen(false);
      });
  };
  return (
    <tr
      key={props?.school?._id}
      className=" odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-100 border-b dark:border-gray-200"
    >
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <ConfirmModal
            show={open}
            setShow={setOpen}
            action={deleteR}
            title={"Suppression"}
            subtitle={"Voulez-vous vraiment supprimer cette ecole ?"}
            yes="Oui"
          />
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input
              id={props?.id}
              className="form-checkbox"
              type="checkbox"
              onChange={props?.handleClick}
              checked={props?.isChecked}
            />
          </label>
        </div>
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <img
          className="object-cover object-center w-full  rounded-lg"
          src={props?.school?.logos[0]?.completedUrl ?? AppImage01}
          style={{ height: 100, width: 120 }}
          // style={{ height: height, width: width }}
          alt="Logos"
        />
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="overflow-wrap" style={{ width: "150px" }}>
          <div className="font-medium text-slate-800">
            {props?.school?.name}
          </div>
        </div>
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">{props?.school?.type}</div>
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">
          {props?.school?.university}
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">
          {props?.school?.country}
        </div>
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">{props?.school?.city}</div>
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">{props?.school?.town}</div>
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">{props?.school?.value}</div>
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">{props?.school?.abr}</div>
      </td>

      <td className="w-150 px-2 first:pl-5 last:pr-5 py-3">
        <div className="description-container" style={{ maxWidth: "250px" }}>
          <div
            className="font-medium text-slate-800 description"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
            }}
          >
            {props?.school?.description}
          </div>
        </div>
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">
          {props?.school?.status}
        </div>
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="space-x-1">
          <button>
            <Link
              to={`/schools/details/${props?.school?._id}`}
              className="text-slate-400 hover:text-slate-500 rounded-full"
            >
              <span className="sr-only">Edit</span>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
              </svg>
            </Link>
          </button>
          <button className="text-slate-400 hover:text-slate-500 rounded-full">
            <span className="sr-only">Download</span>
            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <path d="M16 20c.3 0 .5-.1.7-.3l5.7-5.7-1.4-1.4-4 4V8h-2v8.6l-4-4L9.6 14l5.7 5.7c.2.2.4.3.7.3zM9 22h14v2H9z" />
            </svg>
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

export default SchoolTableItem;
