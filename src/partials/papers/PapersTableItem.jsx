import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppImage01 from "../../logo.png";
import formatDate from "../../utils/formatDate";
import Tooltip from "../../components/Tooltip";
import ConfirmModal from "../../components/ConfirmModal";
import { deletePaper } from "../../slices/papers";
import { showError, showSucces } from "../../components/Toasts";
import { RenderFile } from "../../components/RenderFile";
import { useDispatch } from "react-redux";

function PaperTableItem({ paper }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };
  const deleteR = () => {
    dispatch(deletePaper({ id: paper?._id, data: {} }))
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
    <div>
      <ConfirmModal
        show={open}
        setShow={setOpen}
        action={deleteR}
        title={"Suppression"}
        subtitle={"Voulez-vous vraiment supprimer cette epreuve ?"}
        yes="Oui"
      />
      <div className="bg-white shadow-lg rounded-sm border border-slate-100 relative justify-center items-center font-medium ">
        <RenderFile asset={paper?.assets[0]} />
        <Tooltip
          position="bottom2"
          size="md"
          key={paper?._id}
          render={
            <Link to={`/papers/details/${paper._id}`}>
              <div
                className="pl-1 pr-3 overflow-hidden overflow-ellipsis whitespace-nowrap"
                style={{ height: 70 }}
              >
                <div className="flex justify-between">
                  <div>Code:</div>
                  <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {paper.ue}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>Année:</div>
                  <div>{formatDate(paper.year)}</div>
                </div>
                <div className="flex justify-between">
                  <div className="">Ens:</div>
                  <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {paper.teacher?.lastName}
                  </div>
                </div>
              </div>
            </Link>
          }
        >
          <div className="d-flex justify-content-between">
            <div className="flex justify-between">
              <div>Faculté:</div>
              <div>{paper.faculty}</div>
            </div>
            <div className="flex justify-between">
              <div>Filière:</div>
              <div>{paper.filiere}</div>
            </div>
            <div className="flex justify-between">
              <div>Niveau:</div>
              <div>{paper.level}</div>
            </div>
            <div className="flex justify-between">
              <div>Semestre:</div>
              <div>{paper.semester}</div>
            </div>
            <div className="flex justify-between">
              <div>Type:</div>
              <div>{paper.type}</div>
            </div>
            <div className="flex justify-between">
              <div>Code:</div>
              <div>{paper.code}</div>
            </div>
          </div>
        </Tooltip>

        <div className="space-x-1 flex justify-end">
          <button>
            <Link
              to={`/papers/edit/${paper._id}`}
              className="text-slate-400 hover:text-slate-500 rounded-full"
            >
              <span className="sr-only">Edit</span>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
              </svg>
            </Link>
          </button>
          <button
            className="text-slate-400 hover:text-slate-500 rounded-full"
            onClick={() => {
              if (paper?.assets != null && paper?.assets?.length != 0) {
                paper?.assets?.map((file) => openInNewTab(file.completedUrl));
              }
            }}
          >
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
      </div>
    </div>
  );
}

export default PaperTableItem;
