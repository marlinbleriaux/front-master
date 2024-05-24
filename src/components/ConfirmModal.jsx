import React from "react";
import ModalBlank from "./ModalBlank";
function ConfirmModal({
  action,
  setShow,
  show,
  title = "",
  subtitle = "",
  yes = "Confirm",
  no = "Annuler",
  cancelAction = () => {},
}) {
  const submit = () => {
    action();
    setShow(!show);
  };
  return (
    // <div className="m-1.5">
    //   {/* Info Modal */}
      <div className="m-1.5">
        {/* Start */}
        <ModalBlank id="info-modal" modalOpen={show} setModalOpen={setShow}>
          <div className="p-5 flex flex-col items-center justify-center text-center space-x-4">
            {/* Icon */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-cyan-100">
              <svg
                className="w-4 h-4 shrink-0 fill-current text-cyan-500"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
              </svg>
              {/* @ */}
            </div>
            {/* Content */}
            <div>
              {/* Modal header */}
              <div className="mb-2">
                <div className="text-lg font-semibold text-slate-800">
                  {title}
                </div>
              </div>
              {/* Modal content */}
              <div className="text-sm mb-5">
                <div className="space-y-2">
                  <p>{subtitle}</p>
                </div>
              </div>
              {/* Modal footer */}
              <div className="flex flex-wrap justify-center space-x-2">
                <button
                  className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShow(false);
                    cancelAction();
                  }}
                >
                  {no}
                </button>
                <button
                  className="btn-sm bg-cyan-500 hover:bg-cyan-600 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    submit();
                  }}
                >
                  {yes}
                </button>
              </div>
            </div>
          </div>
        </ModalBlank>
        {/* End */}
      </div>
    // </div>
  );
}

export default ConfirmModal;
