import React, { useState, useEffect } from "react";
// import * as csvParser from 'csv-parser';
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import DragFiles from "../../components/DragFile";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import {
  addPaper,
  getPaperById,
  replaceInputPaper,
  updatePaper,
} from "../../slices/papers";
import { getTeachers } from "../../slices/users";
import { getUsers } from "../../slices/users";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SelectInput from "../../components/SelectInput";
import { showError, showSucces } from "../../components/Toasts";
import examType from "../../common/enum/examType";
import semester from "../../common/enum/semester";
import AInput from "../../components/Input";
import DateInput from "../../components/DateInput";
import formatDate from "../../utils/formatDate";
import statues from "../../common/enum/statues";
import { updateFilterData } from "../../utils/updateFilterData";
import { getSchools } from "../../slices/schools";

function AddPaper() {
  const validationSchema = Yup.object().shape({
    // teacher: Yup.string().required("teacher is required"),
    // ue: Yup.string().required("ue is required"),
    faculty: Yup.string().required("faculty is required"),
    // assets: Yup.string().required('assets is required'),
    // year: Yup.string().required("year is required"),
    // teacher: Yup.string().required('teacher is required'),
  });
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmit },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });
  const { users, teachers } = useSelector((state) => state.users);
  const { schools } = useSelector((state) => state.schools);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [levels, setLevels] = useState([]);
  const [codeUes, setCodeUes] = useState([]);
  const [fillieres, setFillieres] = useState([]);
  const dispatch = useDispatch();
  const { inputPaper, paper } = useSelector((state) => state.papers);

  const [showForm, setShowForm] = useState(true);

  const [file, setFile] = useState(null);
  const [correction, setCorrection] = useState(null);
  const onErrors = (errors) => {
    console.error(errors);
    showError("Verifier tous les champs du formulaire et reessayer.");
  };

  useEffect(async () => {
    if (pathname.includes("papers/edit")) {
      await dispatch(getPaperById(id))
        .unwrap()
        .then((data) => {
          dispatch(
            replaceInputPaper({
              // ...inputPaper,
              ...data,
              // year: new Date(paper?.year),
            })
          );
          if (data?.isDelete) setDeleted(data?.isDelete);
        })
        .catch(() => {});
    }
    dispatch(getSchools())
      .unwrap()
      .then((data) => {
        updateFilterData2({ datas: data });
      })
      .catch(() => {});
    dispatch(getTeachers("TEACHER")).unwrap();
    dispatch(
      getUsers({
        params: {
          perPage: 500,
          orderBy: "createdAt",
          orderDirection: "asc",
          populate: false,
        },
      })
    ).unwrap();
  }, []);

  const { id } = useParams();
  const location = useLocation();
  const navigateTo = useNavigate();
  const { pathname } = location;

  const onFormSubmit = async (data) => {
    let formData = new FormData(); //formdata object
    try {
      setLoading(true);
      if (inputPaper?.semester && inputPaper?.semester !== undefined)
        formData.append("semester", inputPaper?.semester); //append the values with key, value pair
      if (inputPaper?.faculty && inputPaper?.faculty !== undefined)
        formData.append("faculty", inputPaper?.faculty);
      if (inputPaper?.filiere && inputPaper?.filiere !== undefined)
        formData.append("filiere", inputPaper?.filiere);
      if (inputPaper?.type && inputPaper?.type !== undefined)
        formData.append("type", inputPaper?.type);
      if (!inputPaper?.code)
        formData.append(
          "code",
          (inputPaper?.ue ?? "") +
            "|" +
            (inputPaper?.semester ?? "") +
            "|" +
            (inputPaper?.type ?? "") +
            "|" +
            (inputPaper?.filiere ?? "") +
            "|" +
            (inputPaper?.faculty ?? "") +
            "|" +
            (inputPaper?.university ?? "") +
            "|" +
            formatDate(inputPaper?.year, "YYYY")
        );
      if (inputPaper?.ue && inputPaper?.ue !== undefined)
        formData.append("ue", inputPaper?.ue);
      if (inputPaper?.year && inputPaper?.year !== undefined)
        formData.append("year", formatDate(inputPaper?.year, "YYYY-MM-DD"));
      if (inputPaper?.level && inputPaper?.level !== undefined)
        formData.append("level", inputPaper?.level);
      if (inputPaper?.university && inputPaper?.university !== undefined)
        formData.append("university", inputPaper?.university);
      if (inputPaper?.department && inputPaper?.department !== undefined)
        formData.append("department", inputPaper?.department);
      if (inputPaper?.user && inputPaper?.user !== undefined)
        formData.append("user", inputPaper?.user);
      if (inputPaper?.teacher && inputPaper?.teacher !== undefined)
        formData.append("teacher", inputPaper?.teacher);
      if (inputPaper?.description && inputPaper?.description !== undefined)
        formData.append("description", inputPaper?.description);
      if (inputPaper?.intitule && inputPaper?.intitule !== undefined)
        formData.append("intitule", inputPaper?.intitule);
      // formData.append("exercices", []);
      // formData.append("tags", []);
      // formData.append("comments", []);
      // formData.append("corrections", []);
      //formData.append("status", "NEW");
      if (inputPaper?.proposedBy && inputPaper?.proposedBy !== undefined)
        formData.append("proposedBy", inputPaper?.proposedBy ?? "Arielle");
      // formData.append("views", 0);
      // formData.append("preview", file);
      if (inputPaper?.status && inputPaper?.status !== undefined)
        formData.append("status", inputPaper?.status ?? "REFUSED");
      // formData.append("likes", []);
      formData.append(
        "views",
        !isNaN(inputPaper?.views) ? inputPaper?.views : paper?.views ?? 0
      );
      if (deleted) formData.append("isDelete", deleted);
      if (file) formData.append("assets", file);
      if (correction) {
        formData.append("corrections[0][assets]", correction);
        formData.append("corrections[0][rating]", 3);
        formData.append(
          "corrections[0][userId]",
          "013c96f5-78f9-49b9-b4d2-166d59a3e28f"
        );
        formData.append("correction[0][comments][0][rate]", 3);
        formData.append(
          "correction[0][comments][0][comment]",
          "laissez des commentaires sur la correction."
        );
      }
      // formData.append(
      //   "assets",
      //   await urlToFile(inputPaper?.file, "assets.jpg", "image/jpeg")
      // );
      if (inputPaper?.scope && inputPaper?.scope !== undefined)
        formData.append("scope", inputPaper?.scope);

      if (pathname.includes("papers/edit")) {
        dispatch(updatePaper({ id, data: formData }))
          .unwrap()
          .then(() => {
            setLoading(false);
            showSucces("Terminer");
          })
          .catch(() => {
            setLoading(false);
            showError("Une erreur c'est produite");
          });
      } else {
        dispatch(addPaper(formData))
          .unwrap()
          .then(() => {
            setLoading(false);
            showSucces("Terminer");
          })
          .catch(() => {
            setLoading(false);
            showError("Une erreur c'est produite");
          });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      showError("Une erreur c'est produite");
    }
  };
  const onFormSubmit2 = async (data) => {
    let formData = new FormData();
    formData.append("file", file);
    dispatch(importPapers(formData))
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        showError("Une erreur c'est produite");
      });
  };

  const updateFilterData2 = async ({
    uni = null,
    fac = null,
    dep = null,
    fil = null,
    lev = null,
    sem = null,
    sync = false,
    datas = schools,
  }) => {
    try {
      let data = await updateFilterData({
        datas: datas,
        uni,
        fac,
        dep,
        fil,
        lev,
        sem,
        sync,
      });

      setLevels([...(data?.levels ?? [])]);
      setFillieres([...(data?.filieres ?? [])]);
      setFaculties([...(data?.facultes ?? [])]);
      setDepartments([...(data?.departments ?? [])]);
      setUniversities([...(data?.universites ?? [])]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className=" px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="block  sm:justify-between sm:items-center mb-5">
              {/* Left: Title */}
              {/* <div className="mb-4 sm:mb-0"> */}
              <h1 className="text-2xl font-bold font-medium text-cyan-500 hover:text-cyan-600">
                Document
              </h1>
              <div className="flex justify-around items-center w-full mb-8 border-b border-slate-200 dark:border-gray-700">
                <li
                  className={`pb-3 border-b-2 ${
                    showForm && "border-cyan-500"
                  } mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8`}
                  role="presentation"
                >
                  <button
                    className={`whitespace-nowrap flex items-center rounded-t-lg ${
                      showForm ? "" : ""
                    }`}
                    id="profile-tab"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected={showForm ? "true" : "false"}
                    onClick={() => setShowForm(true)}
                  >
                    {/* <svg
                      className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2"
                      viewBox=" 0 0 16 16"
                    >
                      <path d="M5 9h11v2H5V9zM0 9h3v2H0V9zm5 4h6v2H5v-2zm-5 0h3v2H0v-2zm5-8h7v2H5V5zM0 5h3v2H0V5zm5-4h11v2H5V1zM0 1h3v2H0V1z" />
                    </svg> */}
                    <span>Manuel</span>
                  </button>
                </li>
                <li
                  className={`pb-3 border-b-2 ${
                    !showForm && "border-cyan-500"
                  } mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8`}
                  role="presentation"
                >
                  <button
                    className={`whitespace-nowrap flex items-center rounded-t-lg ${
                      !showForm ? "" : ""
                    }`}
                    id="dashboard-tab"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected={showForm ? "false" : "true"}
                    onClick={() => setShowForm(false)}
                  >
                    {/* <svg
                      className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2"
                      viewBox=" 0 0 16 16"
                    >
                      <path d="M3.414 2L9 7.586V16H7V8.414l-5-5V6H0V1a1 1 0 011-1h5v2H3.414zM15 0a1 1 0 011 1v5h-2V3.414l-3.172 3.172-1.414-1.414L12.586 2H10V0h5z" />
                    </svg> */}
                    <span>Importation</span>
                  </button>
                </li>
              </div>
            </div>
            {/* Display table data */}

            {!showForm && (
              <div>
                <div id="file" className="">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="fichier"
                  ></label>
                  <DragFiles
                    onFileChange={(val) => {
                      setFile(val);
                    }}
                  />
                </div>
                <br />
                <br />
                <button
                  type="submit"
                  className="btn bg-cyan-500 hover:bg-cyan-600 text-white ml-3"
                  onClick={() => onFormSubmit2()}
                >
                  {loading && (
                    <svg
                      className="animate-spin w-4 h-4 fill-current shrink-0 text-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                    </svg>
                  )}
                  <div className="ml-3">Enregistrer</div>
                </button>
              </div>
            )}
            {showForm && (
              <div className="">
                <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
                  <div className="grid gap-6 mb-6">
                    <div className="grid gap-6 mb-2 md:grid-cols-3">
                      <SelectInput
                        labelI="University"
                        option={universities}
                        onChange={(val) => {
                          setValue("university", val);
                          dispatch(
                            replaceInputPaper({
                              ...inputPaper,
                              university: val,
                            })
                          );
                        }}
                        selectedOption={inputPaper?.university}
                      />
                      <SelectInput
                        labelI="Faculté"
                        option={faculties}
                        onChange={(val) => {
                          setValue("faculty", val);
                          dispatch(
                            replaceInputPaper({ ...inputPaper, faculty: val })
                          );
                        }}
                        selectedOption={inputPaper?.faculty}
                      />
                      <SelectInput
                        labelI="Departement"
                        option={departments}
                        onChange={(val) => {
                          setValue("department", val);
                          dispatch(
                            replaceInputPaper({
                              ...inputPaper,
                              department: val,
                            })
                          );
                        }}
                        selectedOption={inputPaper?.department}
                      />
                      <SelectInput
                        labelI="Filière"
                        option={fillieres}
                        onChange={(val) => {
                          setValue("filiere", val);
                          dispatch(
                            replaceInputPaper({ ...inputPaper, filiere: val })
                          );
                        }}
                        selectedOption={inputPaper?.filiere}
                      />
                      <SelectInput
                        labelI="Niveau"
                        option={levels}
                        onChange={(val) => {
                          setValue("level", val);
                          dispatch(
                            replaceInputPaper({ ...inputPaper, level: val })
                          );
                        }}
                        selectedOption={inputPaper?.level}
                      />

                      <SelectInput
                        labelI="Semestre"
                        option={semester}
                        onChange={(val) => {
                          setValue("semester", val);
                          dispatch(
                            replaceInputPaper({ ...inputPaper, semester: val })
                          );
                        }}
                        selectedOption={inputPaper?.semester}
                      />
                      <SelectInput
                        labelI="Type"
                        option={examType}
                        onChange={(val) => {
                          setValue("type", val);
                          dispatch(
                            replaceInputPaper({ ...inputPaper, type: val })
                          );
                        }}
                        selectedOption={inputPaper?.type}
                      />
                      <SelectInput
                        labelI="Status"
                        option={statues}
                        onChange={(val) => {
                          setValue("status", val);
                          dispatch(
                            replaceInputPaper({ ...inputPaper, status: val })
                          );
                        }}
                        selectedOption={inputPaper?.status}
                      />
                      {/* <SelectInput
                        labelI="Code"
                        option={codeUe}
                        onChange={(val) => {
                          setValue("code", val);
                          dispatch(replaceInputPaper({ ...inputPaper, code: val }));
                        }}
                        selectedOption={inputPaper?.code}
                      /> */}
                      <SelectInput
                        labelI="Professeur"
                        option={teachers}
                        imgSrc={["picture", "baseUrl"]}
                        label={"firstName"}
                        value={"_id"}
                        onChange={(val) => {
                          setValue("teacher", val);
                          dispatch(
                            replaceInputPaper({ ...inputPaper, teacher: val })
                          );
                        }}
                        selectedOption={inputPaper?.teacher}
                      />
                      <SelectInput
                        labelI="User"
                        option={users}
                        imgSrc={["picture", "baseUrl"]}
                        label={"firstName"}
                        value={"_id"}
                        onChange={(val) => {
                          setValue("user", val);
                          dispatch(
                            replaceInputPaper({ ...inputPaper, user: val })
                          );
                        }}
                        selectedOption={inputPaper?.user}
                      />
                      <AInput
                        label="UE"
                        // required
                        onChange={(e) => {
                          setValue("ue", e);
                          dispatch(replaceInputPaper({ ...inputPaper, ue: e }));
                        }}
                        className={`form-input w-full ${
                          errors.ue ? "border-red-500" : ""
                        }`}
                        // valid={errors?.ue ? false : {}}
                        placeholder="UE"
                        value={inputPaper?.ue}
                      />
                      <AInput
                        label="Propose par"
                        required
                        onChange={(e) => {
                          setValue("proposedBy", e);
                          dispatch(
                            replaceInputPaper({ ...inputPaper, proposedBy: e })
                          );
                        }}
                        className={`form-input w-full ${
                          errors.ue ? "border-red-500" : ""
                        }`}
                        valid={errors?.proposedBy ? false : {}}
                        placeholder="proposedBy"
                        value={inputPaper?.proposedBy}
                      />
                      <AInput
                        label="Vues"
                        required={false}
                        type="number"
                        onChange={(e) => {
                          setValue("views", e);
                          dispatch(
                            replaceInputPaper({ ...inputPaper, views: e })
                          );
                        }}
                        className={`form-input w-full ${
                          errors.views ? "border-red-500" : ""
                        }`}
                        placeholder="views"
                        value={inputPaper?.views}
                      />
                      <AInput
                        label="Institule"
                        required={false}
                        onChange={(e) => {
                          setValue("intitule", e);
                          dispatch(
                            replaceInputPaper({ ...inputPaper, intitule: e })
                          );
                        }}
                        className={`form-input w-full ${
                          errors.intitule ? "border-red-500" : ""
                        }`}
                        placeholder="Institule"
                        value={inputPaper?.intitule}
                      />
                      {pathname.includes("papers/edit") && (
                        <AInput
                          label="Scope"
                          required={false}
                          onChange={(e) => {
                            setValue("scope", e);
                            dispatch(
                              replaceInputPaper({ ...inputPaper, scope: e })
                            );
                          }}
                          className={`form-input w-full ${
                            errors.scope ? "border-red-500" : ""
                          }`}
                          valid={errors?.scope ? false : {}}
                          placeholder="Scope"
                          value={inputPaper?.scope}
                        />
                      )}

                      <div className="m-3 w-24">
                        <label className="block text-sm font-medium">
                          Delete
                        </label>
                        <div className="flex items-center">
                          <div className="form-switch">
                            <input
                              type="checkbox"
                              id="switch-2"
                              className="sr-only"
                              checked={deleted}
                              onChange={() => setDeleted(!deleted)}
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
                            {deleted ? "Oui" : "Non"}
                          </div>
                        </div>
                      </div>

                      <DateInput
                        label="Date de création de l'épreuve"
                        value={inputPaper.year}
                        onChange={(value) => {
                          let val = value.toString();
                          setValue("year", new Date(val));
                          dispatch(
                            replaceInputPaper({ ...inputPaper, year: val })
                          );
                        }}
                      />
                    </div>

                    <div className="">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="description"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        onChange={(e) => {
                          setValue("description", e.target.value);
                          dispatch(
                            replaceInputPaper({
                              ...inputPaper,
                              description: e.target.value,
                            })
                          );
                        }}
                        className="form-textarea h-full w-full"
                        value={inputPaper?.description}
                        rows="6"
                        type="text-area"
                      />
                    </div>
                    <br />
                    <div id="file" className="">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="fichier"
                      >
                        Assets <span className="text-rose-500">*</span>
                      </label>
                      <DragFiles
                        onFileChange={(val) => {
                          setFile(val);
                        }}
                      />
                    </div>
                    <div id="file" className="">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="fichier"
                      >
                        Corrections <span className="text-rose-500">*</span>
                      </label>
                      <DragFiles
                        onFileChange={(val) => {
                          setCorrection(val);
                        }}
                      />
                    </div>
                  </div>

                  <div className="px-5 py-2 border-t border-slate-200">
                    <div className="flex flex-wrap justify-center space-x-6">
                      <button
                        className="btn-sm text-left border-slate-200 hover:border-slate-300 text-slate-600"
                        onClick={(e) => {
                          navigateTo("/papers/list");
                        }}
                      >
                        {"Annuler"}
                      </button>
                      <button
                        type="submit"
                        className="btn-sm text-right bg-cyan-500 hover:bg-cyan-600 text-white"
                      >
                        {loading && (
                          <svg
                            className="animate-spin w-4 h-4 fill-current shrink-0"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                          </svg>
                        )}
                        <div className="ml-3">Enregistrer</div>
                      </button>
                    </div>
                  </div>
                  <div>
                    <br />
                  </div>
                </form>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AddPaper;
