import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditMenu from "../../../components/DropdownEditMenu";
import AppImage01 from "../../../logo.png";
import {
  deleteInfo,
  replaceInfo,
  replaceInputInfo,
} from "../../../slices/infos";
import { showError, showSucces } from "../../../components/Toasts";
import ConfirmModal from "../../../components/ConfirmModal";
import { useDispatch } from "react-redux";
import Tooltip from "../../../components/Tooltip";
import { RenderFile } from '../../../components/RenderFile';

// function InfoView( username, userimage,name, title, description, url, publishedat, endat, } ){

function InfoView({ info }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };
  const deleteR = () => {
    dispatch(deleteInfo({ id: info?._id, data: {} }))
      .unwrap()
      .then(() => {
        showSucces("Informations supprime avec success");
        setOpen(false);
      })
      .catch(() => {
        showError("Une erreur c'est produite");
        setOpen(false);
      });
  };
  return (
    <div
      style={{ width: 220, height: 300 }}
      className="bg-white shadow-lg rounded-sm border mr-3 mb-3 border-slate-200 relative cursor-progress"
      // className="bg-white shadow-md rounded border border-slate-200 p-5"
      onClick={() => {
        // navigateTo(`/infos/details/${info?._id}`);
      }}
    >
      <ConfirmModal
        show={open}
        setShow={setOpen}
        action={deleteR}
        title={"Suppression"}
        subtitle={"Voulez-vous vraiment supprimer cette info ?"}
        yes="Oui"
      />
      {/* Header */}
      <header>
        <div className="flex justify-between pl-1">
          {/* User */}
          <div className="flex w-full justify-between">
            <img
              className="rounded-full shrink-0"
              src={info?.user?.picture?.baseUrl || `https://ui-avatars.com/api/?name=${info?.user?.lastName?.toString()}&rounded=true`}
              width="40"
              height="40"
              alt=""
            />
            <div className="w-full">
              <div className="flex w-full justify-between ">
                <div className="leading-tight">
                  <a className="text-sm font-semibold text-slate-800" href="#0">
                    {info?.user?.firstName}
                  </a>
                  <div className="text-xs text-slate-500">
                    {info?.category}/{info?.type}
                  </div>
                </div>
                {/* Menu button */}
                <EditMenu
                  align="right"
                  className="relative inline-flex shrink-0"
                >
                  <button
                    className="font-medium items-center text-sm text-slate-400 hover:text-slate-500 rounded-full flex py-1 px-3"
                    onClick={() => {
                      dispatch(replaceInfo(info));
                      dispatch(
                        replaceInputInfo({
                          ...info,
                        })
                      );
                      navigateTo(`/infos/edit/${info._id}`);
                    }}
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                      <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
                    </svg>
                    <span className="">Edit</span>
                  </button>
                  <button
                    className="font-medium items-center text-sm text-slate-400 hover:text-slate-500 rounded-full flex py-1 px-3"
                    // className="text-slate-400 hover:text-slate-500 rounded-full"
                    onClick={() => {
                      if (info?.assets != null && info?.assets?.length != 0) {
                        info?.assets?.map((file) =>
                          openInNewTab(file.completedUrl)
                        );
                      }
                    }}
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                      <path d="M16 20c.3 0 .5-.1.7-.3l5.7-5.7-1.4-1.4-4 4V8h-2v8.6l-4-4L9.6 14l5.7 5.7c.2.2.4.3.7.3zM9 22h14v2H9z" />
                    </svg>
                    <span className="">Download</span>
                  </button>
                  <button
                    // className="text-rose-500 hover:text-rose-600 rounded-full"
                    className="font-medium items-center text-sm text-rose-500 hover:text-rose-600 rounded-full flex py-1 px-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(true);
                    }}
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                      <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
                      <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
                    </svg>
                    <span className="">Delete</span>
                  </button>
                </EditMenu>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Body */}
      <div className="text-sm p-1"
      onClick={() => {
        navigateTo(`/infos/details/${info?._id}`);
      }}>
        <Tooltip
          position="right"
          size="md"
          render={
            <h2 className="font-bold overflow-hidden overflow-ellipsis whitespace-nowrap">
              {info?.title}
            </h2>
          }
        >
          <h2 className="font-bold ">{info?.title}</h2>
        </Tooltip>
        <Tooltip
          position="right"
          size="md"
          render={
            <p className="overflow-hidden text-slate-600 overflow-ellipsis whitespace-nowrap">
              {info?.description}
            </p>
          }
        >
          <p className="">{info?.description}</p>
        </Tooltip>

        <div className="relative">
          <RenderFile asset={info?.assets[0]} />

          <div className="absolute left-0 right-0 bottom-0 p-1 bg-black bg-opacity-25 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-slate-300">
                {info?.url}
              </div>
              <a
                className="text-xs font-medium text-indigo-400 hover:text-indigo-300"
                href={info?.url}
              >
                Suivre -&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="flex justify-around items-center space-x-4">
        {/* Like button */}
        <button className="flex items-center text-slate-400 hover:text-indigo-500">
          <svg
            className="w-4 h-4 shrink-0 fill-current mr-1.5"
            viewBox="0 0 16 16"
          >
            <path d="M14.682 2.318A4.485 4.485 0 0011.5 1 4.377 4.377 0 008 2.707 4.383 4.383 0 004.5 1a4.5 4.5 0 00-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 014.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 011.785 4.251h-.003z" />
          </svg>
          <div className="text-sm text-slate-500">{info?.likes.length}</div>
        </button>
        {/* Share button */}
        <button className="flex items-center text-slate-400 hover:text-indigo-500">
          <svg
            className="w-4 h-4 shrink-0 fill-current mr-1.5"
            viewBox="0 0 16 16"
          >
            <path d="M13 7h2v6a1 1 0 0 1-1 1H4v2l-4-3 4-3v2h9V7ZM3 9H1V3a1 1 0 0 1 1-1h10V0l4 3-4 3V4H3v5Z" />
          </svg>
          <div className="text-sm text-slate-500">0</div>
        </button>
        {/* Replies button */}
        <button className="flex items-center text-slate-400 hover:text-indigo-500">
          <svg
            className="w-4 h-4 shrink-0 fill-current mr-1.5"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
          </svg>
          <div className="text-sm text-slate-500">{info?.comments.length}</div>
        </button>

        {/* Replies button */}
        <button className="flex items-center text-slate-400 hover:text-indigo-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-eye"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
          <div className="text-sm text-slate-500 ">_ {info?.views}</div>
        </button>
      </footer>
    </div>
  );
}

export default InfoView;
