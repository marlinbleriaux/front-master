import React from "react";
import ModalBasic from "../../../components/ModalBasic";

function Matiere({ update = false, matiere = {}, setShow, show }) {
  return (
    <div className="m-1.5" key={matiere?._id}>
      {/* Start */}
      <ModalBasic
        id="listMatiere-modal"
        modalOpen={show}
        setModalOpen={setShow}
        title={"Matiere"}
      >
        {/* Modal content */}
        <div className="px-5 py-4">
          <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
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
                      <div className="font-semibold text-left">Code UE</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Level</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Semestre</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Id</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">idTeacher</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-200">
                  {matiere?.subjects?.map((mat) => {
                    return (
                      <tr
                        // key={depart?._id}
                        key={`${mat?._id}-${mat?.name}-${mat?.codeUe}`}
                        className=" odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-100 border-b dark:border-gray-200"
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
                              {mat?.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {mat?.codeUe}
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {mat?.level}
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {mat?.semester}
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {mat?._id}
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {mat?.idTeacher}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>



          {/* Modal footer */}
          <div className="px-5 py-2 border-t border-slate-200">
            <div className="flex flex-wrap justify-center space-x-6">
              <button
                className="btn-sm text-left border-slate-200 hover:border-slate-300 text-slate-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setShow(false);
                }}
              >
                {"Annuler"}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShow(false);
                }}
                className="btn-sm text-right bg-primary-500 hover:bg-primary-600 text-white"
              >
                {"Okay"}
              </button>
            </div>
          </div>
        </div>
        {/* End */}
      </ModalBasic>
    </div>
  );
}

export default Matiere;
