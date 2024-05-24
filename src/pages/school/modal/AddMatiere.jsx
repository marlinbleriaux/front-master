import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import AInput from "../../../components/Input";
import SelectInput from "../../../components/SelectInput";
import { replaceDepartment } from "../../../slices/schools";
import levels from "../../../common/enum/levels";
import semester from "../../../common/enum/semester";

function AddMatiere({ matiere = {}, setShow, show, index }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const { departments } = useSelector((state) => state.schools);

  const update = async (inde, updatedMatiere) => {
    const updatedDepartments = departments?.map((department, i) => {
      if (i === index) {
        return {
          ...department,
          subjects: (department?.subjects ?? [])?.map((mat, ind) =>
            ind === inde ? updatedMatiere : mat
          ),
        };
      }
      return department;
    });
    setValue(12);

    dispatch(replaceDepartment(updatedDepartments));
  };

  const onDelete = async (indexToDelete) => {
    const updatedDepartments = departments?.map((department) => ({
      ...department,
      subjects: (department?.subjects ?? []).filter(
        (_, index) => index !== indexToDelete
      ),
    }));

    await dispatch(replaceDepartment(updatedDepartments));
  };

  const addMatiere = async (index, val) => {
    const updatedDepartments = departments?.map((department, i) => {
      if (i === index) {
        return {
          ...department,
          subjects: [...(department?.subjects ?? []), val],
        };
      }
      return department;
    });

    await dispatch(replaceDepartment(updatedDepartments));
  };

  const modalContent = useRef(null);

  // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (!show || modalContent.current.contains(target)) return
  //     setShow(false);
  //   };
  //   document.addEventListener('click', clickHandler);
  //   return () => document.removeEventListener('click', clickHandler);
  // });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!show || keyCode !== 27) return;
      setShow(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return show ? (
    <div className="z-40 absolute top-28 left-0 right-0 bottom-0 h-full flex justify-center items-center bg-black/[0.3]">
      <div className="p-5 rounded-lg flex flex-col items-center justify-center">
        {/* Content */}
        <div
          ref={modalContent}
          className="px-5 py-4 md:w-2/3 w-screen bg-white rounded"
        >
          <div className="flex flex-wrap justify-around mb-2">
            <button
              onClick={(e) => {
                addMatiere(index, {
                  name: "",
                  codeUe: "",
                  level: "",
                  semester: "",
                  idTeacher: "",
                  _id: uuid(),
                });
              }}
              className="btn btn bg-cyan-500 hover:bg-cyan-600 text-white"
            >
              <svg
                className="w-4 h-4 fill-current opacity-50 shrink-0"
                viewBox="0 0 16 16"
              >
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="ml-2">Matiere</span>
            </button>
            <button
              className="btn-sm text-left border-slate-200 hover:border-slate-300 text-slate-600"
              onClick={(e) => {
                setShow(false);
              }}
            >
              {"Fermer"}
            </button>
          </div>
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
                      <div className="font-semibold text-left">Level</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Code UE</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Semestre</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Actions</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Parent Id</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">idTeacher</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3">
                      <div className="font-semibold text-left">Id</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-200">
                  {(departments[index]?.subjects ?? [])?.map((mat, ind) => {
                    return (
                      <tr
                        key={ind}
                        className=" odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-100 border-b dark:border-gray-200"
                      >
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div
                            className="overflow-wrap"
                            style={{ minWidth: "140px" }}
                          >
                            <AInput
                              onChange={(e) => {
                                update(ind, {
                                  ...departments[index].subjects[ind],
                                  name: e,
                                });
                              }}
                              value={mat?.name}
                              placeholder={"Nom"}
                            />
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div
                            className="overflow-wrap"
                            style={{ minWidth: "140px" }}
                          >
                            <SelectInput
                              placeholder="Niveau"
                              option={levels}
                              onChange={(val) => {
                                update(ind, {
                                  ...departments[index].subjects[ind],
                                  level: val,
                                });
                              }}
                              selectedOption={mat?.level}
                            />
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div style={{ minWidth: "140px" }}>
                            <AInput
                              onChange={(val) => {
                                update(ind, {
                                  ...departments[index].subjects[ind],
                                  codeUe: val,
                                });
                              }}
                              value={mat?.codeUe}
                              placeholder="Code UE"
                            />
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div style={{ minWidth: "140px" }}>
                            <SelectInput
                              placeholder="Semestre"
                              option={semester}
                              onChange={(val) => {
                                update(ind, {
                                  ...departments[index].subjects[ind],
                                  semester: val,
                                });
                              }}
                              selectedOption={mat?.semester}
                            />
                          </div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            <button
                              onClick={() => {
                                onDelete(ind);
                              }}
                              className="btn fill-current hover:border-rose-500 text-rose-500 shrink-0 mx-2"
                            >
                              <svg
                                className="w-4 h-4 fill-current shrink-0"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div style={{ minWidth: "140px" }}>
                            <AInput
                              onChange={(val) => {
                                update(ind, {
                                  ...departments[index].subjects[ind],
                                  parentId: val,
                                });
                              }}
                              value={mat?.parentId}
                              placeholder="Id Parent"
                            />
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div style={{ minWidth: "140px" }}>
                            <AInput
                              onChange={(val) => {
                                update(ind, {
                                  ...departments[index].subjects[ind],
                                  idTeacher: val,
                                });
                              }}
                              value={mat?.idTeacher}
                              placeholder="Id Teacher"
                            />
                          </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                          <div className="font-medium text-slate-800">
                            {mat?._id}
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
                  // e.stopPropagation();
                  setShow(false);
                }}
              >
                {"Annuler"}
              </button>
              <button
                onClick={(e) => {
                  // e.stopPropagation();
                  setShow(false);
                }}
                className="btn-sm text-right bg-primary-500 hover:bg-primary-600 text-white"
              >
                {"Okay"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default AddMatiere;
