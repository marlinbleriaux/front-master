import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { v4 as uuid } from "uuid";
import DragFiles from "../../components/DragFile";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import {
  addSchool,
  getSchoolById,
  getSchools,
  replaceDepartment,
  replaceInputSchool,
  updateSchool,
} from "../../slices/schools";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SelectInput from "../../components/SelectInput";
import { showError, showSucces } from "../../components/Toasts";
// import universities from "../../common/enum/universities";
import AInput from "../../components/Input";
import DateInput from "../../components/DateInput";
import formatDate from "../../utils/formatDate";
import statues from "../../common/enum/statues";
import AddMatiere from "./modal/AddMatiere";
import Messages from "../../components/Messages";
import { getUsers } from "../../slices/users";
import { updateFilterData } from "../../utils/updateFilterData";

function AddSchool() {
  const validationSchema = Yup.object().shape({
    // teacher: Yup.string().required("teacher is required"),
    // ue: Yup.string().required("ue is required"),
    // faculty: Yup.string().required("faculty is required"),
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
  const { users } = useSelector((state) => state.users);
  const { schools } = useSelector((state) => state.schools);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [index1, setIndex] = useState(0);
  const [matiere, setMatiere] = useState({});
  const dispatch = useDispatch();
  const { inputSchool, school, departments } = useSelector(
    (state) => state.schools
  );
  
  const updateFilterData2 = async ({
    uni = null,
    sync = false,
    datas = schools,
  }) => {
    try {
      let data = await updateFilterData({
        datas: datas,
        uni,
        sync,
      });

      setUniversities([...(data?.universites ?? [])]);
    } catch (e) {
      console.log(e);
    }
  };

  const [showForm, setShowForm] = useState(true);

  const school_types = [
    { value: "UNIVERSITY", name: "UNIVERSITY" },
    { value: "FACULTY", name: "FACULTY" },
    { value: "SCHOOL", name: "SCHOOL" },
    { value: "DEPARTMENT", name: "DEPARTMENT" },
    { value: "FILIERE", name: "FILIERE" },
    { value: "MATIERE", name: "MATIERE" },
    { value: "OTHER", name: "OTHER" },
  ];

  const postes = [
    { value: "DIRECTOR", name: "DIRECTOR" },
    { value: "DOYEN", name: "DOYEN" },
    { value: "VICE_DOYEN", name: "VICE_DOYEN" },
    { value: "RESPONSABLE", name: "RESPONSABLE" },
    { value: "RECTEUR", name: "RECTEUR" },
    { value: "CHEF_DEPARTEMENT", name: "CHEF_DEPARTEMENT" },
    { value: "OTHER", name: "OTHER" },
  ];

  const [file, setFile] = useState(null);
  const onErrors = (errors) => console.error(errors);

  useEffect(async () => {
    if (id || id == undefined) {
      dispatch(
        replaceInputSchool({
          ...inputSchool,
          _id: uuid(),
        })
      );
    }
    if (pathname.includes("schools/edit")) {
      await dispatch(getSchoolById(id))
        .unwrap()
        .then((data) => {
          dispatch(
            replaceInputSchool({
              ...data,
            })
          );
          dispatch(replaceDepartment(data?.departments));
          if (data?.isDelete) setDeleted(data?.isDelete);
        })
        .catch(() => {});
    }

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
    dispatch(getSchools())
      .unwrap()
      .then((data) => {
        updateFilterData2({ datas: data });
      })
      .catch(() => {});
  }, []);

  const { id } = useParams();
  const location = useLocation();
  const navigateTo = useNavigate();
  const { pathname } = location;

  const onFormSubmit = async (data) => {
    setLoading(true);
    try {
      let formData = new FormData();
      if (inputSchool?.university && inputSchool?.university != undefined)
        formData.append("university", inputSchool?.university);
      if (inputSchool?.type && inputSchool?.type != undefined)
        formData.append("type", inputSchool?.type);
      if (inputSchool?.country && inputSchool?.country != undefined)
        formData.append("country", inputSchool?.country);
      if (inputSchool?.city && inputSchool?.city != undefined)
        formData.append("city", inputSchool?.city);
      if (!inputSchool?.code && inputSchool?.code != undefined)
        formData.append(
          "code",
          (inputSchool?.name ?? "") +
            "|" +
            (Date.now() ?? "") +
            "|" +
            (inputSchool?.university ?? "")
        );
      if (inputSchool?.region && inputSchool?.region != undefined)
        formData.append("region", inputSchool?.region);
      if (inputSchool?.name && inputSchool?.name != undefined)
        formData.append("name", inputSchool?.name);
      if (inputSchool?.abr && inputSchool?.abr != undefined)
        formData.append("abr", inputSchool?.abr);
      if (inputSchool?.value && inputSchool?.value != undefined)
        formData.append("value", inputSchool?.value);
      if (inputSchool?.user && inputSchool?.user != undefined)
        formData.append("user", inputSchool?.user);
      if (inputSchool?.description && inputSchool?.description != undefined)
        formData.append("description", inputSchool?.description);
      if (
        inputSchool?.coordinator?.name &&
        inputSchool?.coordinator?.name != undefined
      )
        formData.append("coordinator[name]", inputSchool?.coordinator?.name);
      if (
        inputSchool?.coordinator?.poste &&
        inputSchool?.coordinator?.poste != undefined
      )
        formData.append("coordinator[poste]", inputSchool?.coordinator?.poste);
      // formData.append("exercices", []);
      // formData.append("tags", []);
      // formData.append("comments", []);
      // formData.append("corrections", []);
      //formData.append("status", "NEW");
      if (inputSchool?.version && inputSchool?.version != undefined)
        formData.append("version", inputSchool?.version ?? 1);
      if (departments && departments?.length >= 1 && departments != undefined) {
        departments.forEach((elt, ind) => {
          if (elt?.value && elt?.value != "") {
            formData.append(`departments[${ind}][name]`, elt?.name);
            formData.append(`departments[${ind}][value]`, elt?.value);
            formData.append(`departments[${ind}][type]`, elt?.type);
            formData.append(`departments[${ind}][abr]`, elt?.abr);
            if (elt?.coordinator?.name && elt?.coordinator?.name != undefined)
              formData.append(
                `departments[${ind}][coordinator][name]`,
                elt?.coordinator?.name
              );
            if (elt?.coordinator?.poste && elt?.coordinator?.poste != undefined)
              formData.append(
                `departments[${ind}][coordinator][poste]`,
                elt?.coordinator?.poste
              );
            if (elt?.parentId && elt?.parentId != undefined)
              formData.append(`departments[${ind}][parentId]`, elt?.parentId);
            if (elt?._id && elt?._id != undefined)
              formData.append(`departments[${ind}][_id]`, elt?._id);

            elt?.subjects?.forEach((elt2, ind2) => {
              formData.append(
                `departments[${ind}][subjects][${ind2}][name]`,
                elt2?.name
              );
              formData.append(
                `departments[${ind}][subjects][${ind2}][codeUe]`,
                elt2?.codeUe
              );
              formData.append(
                `departments[${ind}][subjects][${ind2}][level]`,
                elt2?.level
              );
              formData.append(
                `departments[${ind}][subjects][${ind2}][semester]`,
                elt2?.semester
              );
              if (
                elt2?.coordinator?.name &&
                elt2?.coordinator?.name != undefined
              )
                formData.append(
                  `departments[${ind}][subjects][${ind2}][coordinator][name]`,
                  elt2?.coordinator?.name
                );
              if (
                elt2?.coordinator?.poste &&
                elt2?.coordinator?.postee != undefined
              )
                formData.append(
                  `departments[${ind}][subjects][${ind2}][coordinator][poste]`,
                  elt2?.coordinator?.poste
                );
              if (elt2?.idTeacher && elt2?.idTeacher != undefined)
                formData.append(
                  `departments[${ind}][subjects][${ind2}][idTeacher]`,
                  elt2?.idTeacher
                );
              if (elt2?.parentId && elt2?.parentId != undefined)
                formData.append(
                  `departments[${ind}][subjects][${ind2}][parentId]`,
                  elt2?.parentId
                );
              if (elt2?._id && elt2?._id != undefined)
                formData.append(
                  `departments[${ind}][subjects][${ind2}][_id]`,
                  elt2?._id
                );
            });
          }
        });
      }
      // formData.append("views", 0);
      // formData.append("preview", file);
      if (inputSchool?.status)
        formData.append("status", inputSchool?.status ?? "REFUSED");
      // formData.append("likes", []);
      if (inputSchool?.views)
        formData.append(
          "views",
          !isNaN(inputSchool?.views) ? inputSchool?.views : school?.views ?? 0
        );
      if (deleted) formData.append("isDelete", deleted);
      if (file) formData.append("logos", file);

      if (inputSchool?.scope) formData.append("scope", inputSchool?.scope);

      if (pathname.includes("schools/edit")) {
        dispatch(updateSchool({ id, data: formData }))
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
        dispatch(addSchool(formData))
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

  const update = async (index, val) => {
    let choice = [...departments];
    if (index < departments.length) {
      choice[index] = val;
      await dispatch(replaceDepartment([...choice]));
    }
  };

  const onDelete = async (index) => {
    const choice = departments.filter((val, ind) => ind != index);
    await dispatch(replaceDepartment(choice));
  };

  const addDepartment = async (index, val) => {
    let choice = [...departments];
    const choice1 = [...choice, val];
    await dispatch(replaceDepartment(choice1));
  };

  const onFormSubmit2 = async (data) => {
    let formData = new FormData();
    formData.append("file", file);
    dispatch(importSchools(formData))
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        showError("Une erreur c'est produite");
      });
  };
  const launchModal = (e, index, elt) => {
    setMatiere(elt);
    setIndex(index);
    setShow(true);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden w-full">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/* Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className=" px-4 sm:px-6 lg:px-8 py-8 ">
              {/* Page header */}
              <div className="block  sm:justify-between sm:items-center mb-5">
                {/* Left: Title */}
                {/* <div className="mb-4 sm:mb-0"> */}
                <h1 className="text-2xl font-bold font-medium text-cyan-500 hover:text-cyan-600">
                  School
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
                      <svg
                        className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2"
                        viewBox=" 0 0 16 16"
                      >
                        <path d="M5 9h11v2H5V9zM0 9h3v2H0V9zm5 4h6v2H5v-2zm-5 0h3v2H0v-2zm5-8h7v2H5V5zM0 5h3v2H0V5zm5-4h11v2H5V1zM0 1h3v2H0V1z" />
                      </svg>
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
                      <svg
                        className="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2"
                        viewBox=" 0 0 16 16"
                      >
                        <path d="M3.414 2L9 7.586V16H7V8.414l-5-5V6H0V1a1 1 0 011-1h5v2H3.414zM15 0a1 1 0 011 1v5h-2V3.414l-3.172 3.172-1.414-1.414L12.586 2H10V0h5z" />
                      </svg>
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
                        className="animate-spin w-4 h-4 fill-current shrink-0"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                      </svg>
                    )}
                    <div className="ml-3">Enregistrer</div>
                  </button>
                </div>
              )}
              {/* {showForm && (
              <div className="flex justify-center items-center"> */}
              <div>
                <div className="md:text-xl text-gray-900 mb-10">
                  <div className="text-left">
                    <span className="underline">ID </span>:{" "}
                    {id ?? inputSchool?._id}
                  </div>
                </div>

                <div className="grid gap-6 mb-6">
                  <div className="grid gap-6 mb-2 md:grid-cols-3">
                    <SelectInput
                      labelI="University"
                      option={universities}
                      onChange={(val) => {
                        setValue("university", val);
                        var input = {
                          university: val,
                        };
                        universities.forEach((elt)=>{
                          if (elt?.value == val) {
                            input['parentId'] = elt?.id;
                          }
                        });
                        dispatch(
                          replaceInputSchool({
                            ...inputSchool,
                            ...input
                          })
                        );
                      }}
                      selectedOption={inputSchool?.university}
                    />
                    <SelectInput
                      labelI="Type"
                      option={school_types}
                      onChange={(val) => {
                        setValue("type", val);
                        dispatch(
                          replaceInputSchool({ ...inputSchool, type: val })
                        );
                      }}
                      selectedOption={inputSchool?.type}
                    />
                    <SelectInput
                      labelI="Status"
                      option={statues}
                      onChange={(val) => {
                        setValue("status", val);
                        dispatch(
                          replaceInputSchool({ ...inputSchool, status: val })
                        );
                      }}
                      selectedOption={inputSchool?.status}
                    />
                    <AInput
                      label="Country"
                      required
                      onChange={(e) => {
                        setValue("country", e);
                        dispatch(
                          replaceInputSchool({ ...inputSchool, country: e })
                        );
                      }}
                      className={`form-input w-full ${
                        errors.country ? "border-red-500" : ""
                      }`}
                      valid={errors?.country ? false : {}}
                      placeholder="Country"
                      value={inputSchool?.country}
                    />
                    <AInput
                      label="City"
                      required
                      onChange={(e) => {
                        setValue("city", e);
                        dispatch(
                          replaceInputSchool({ ...inputSchool, city: e })
                        );
                      }}
                      className={`form-input w-full ${
                        errors.city ? "border-red-500" : ""
                      }`}
                      valid={errors?.city ? false : {}}
                      placeholder="City"
                      value={inputSchool?.city}
                    />
                    <AInput
                      label="Town"
                      required
                      onChange={(e) => {
                        setValue("town", e);
                        dispatch(
                          replaceInputSchool({ ...inputSchool, town: e })
                        );
                      }}
                      className={`form-input w-full ${
                        errors.town ? "border-red-500" : ""
                      }`}
                      valid={errors?.town ? false : {}}
                      placeholder="Town"
                      value={inputSchool?.town}
                    />
                    <AInput
                      label="Region"
                      required
                      onChange={(e) => {
                        setValue("region", e);
                        dispatch(
                          replaceInputSchool({ ...inputSchool, region: e })
                        );
                      }}
                      className={`form-input w-full ${
                        errors.region ? "border-red-500" : ""
                      }`}
                      valid={errors?.region ? false : {}}
                      placeholder="Region"
                      value={inputSchool?.region}
                    />
                    <AInput
                      label="Nom"
                      required
                      onChange={(e) => {
                        setValue("name", e);
                        dispatch(
                          replaceInputSchool({ ...inputSchool, name: e })
                        );
                      }}
                      className={`form-input w-full ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      valid={errors?.name ? false : {}}
                      placeholder="Nom"
                      value={inputSchool?.name}
                    />
                    <AInput
                      label="Abreviation"
                      required
                      onChange={(e) => {
                        setValue("abr", e);
                        dispatch(
                          replaceInputSchool({ ...inputSchool, abr: e })
                        );
                      }}
                      className={`form-input w-full ${
                        errors.abr ? "border-red-500" : ""
                      }`}
                      valid={errors?.abr ? false : {}}
                      placeholder="Abreviation"
                      value={inputSchool?.abr}
                    />
                    <AInput
                      label="Value"
                      required
                      onChange={(e) => {
                        setValue("value", e);
                        dispatch(
                          replaceInputSchool({ ...inputSchool, value: e })
                        );
                      }}
                      className={`form-input w-full ${
                        errors.value ? "border-red-500" : ""
                      }`}
                      valid={errors?.value ? false : {}}
                      placeholder="Value"
                      value={inputSchool?.value}
                    />
                    <AInput
                      label="Coordinator"
                      required
                      onChange={(e) => {
                        setValue("coordinator", e);
                        dispatch(
                          replaceInputSchool({
                            ...inputSchool,
                            coordinator: {
                              ...inputSchool?.coordinator,
                              name: e,
                            },
                          })
                        );
                      }}
                      className={`form-input w-full ${
                        errors.coordinator ? "border-red-500" : ""
                      }`}
                      valid={errors?.coordinator ? false : {}}
                      placeholder="Coordinator"
                      value={inputSchool?.coordinator?.name}
                    />
                    <SelectInput
                      labelI="Poste"
                      option={postes}
                      onChange={(val) => {
                        dispatch(
                          replaceInputSchool({
                            ...inputSchool,
                            coordinator: {
                              ...inputSchool?.coordinator,
                              poste: val,
                            },
                          })
                        );
                        setValue("poste", val);
                      }}
                      selectedOption={inputSchool?.coordinator?.poste}
                      placeholder={"Poste"}
                    />
                    {errors.poste && (
                      <Messages message={errors.poste.message} />
                    )}
                    <AInput
                      label="Version"
                      required
                      onChange={(e) => {
                        setValue("version", e);
                        dispatch(
                          replaceInputSchool({ ...inputSchool, version: e })
                        );
                      }}
                      className={`form-input w-full ${
                        errors.version ? "border-red-500" : ""
                      }`}
                      valid={errors?.version ? false : {}}
                      placeholder="Version"
                      value={inputSchool?.version}
                    />
                    <AInput
                      label="Code"
                      disabled
                      onChange={(e) => {
                        setValue("code", e);
                        dispatch(
                          replaceInputSchool({ ...inputSchool, code: e })
                        );
                      }}
                      className={`form-input w-full ${
                        errors.code ? "border-red-500" : ""
                      }`}
                      valid={errors?.code ? false : {}}
                      placeholder="Code"
                      value={inputSchool?.code}
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
                          replaceInputSchool({ ...inputSchool, user: val })
                        );
                      }}
                      selectedOption={inputSchool?.user}
                    />

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
                      label="Date de création"
                      value={inputSchool.year}
                      onChange={(value) => {
                        let val = value.toString();
                        setValue("createdAt", new Date(val));
                        dispatch(
                          replaceInputSchool({
                            ...inputSchool,
                            createdAt: val,
                          })
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
                          replaceInputSchool({
                            ...inputSchool,
                            description: e.target.value,
                          })
                        );
                      }}
                      className="form-textarea h-full w-full"
                      value={inputSchool?.description}
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
                      Logos <span className="text-rose-500">*</span>
                    </label>
                    <DragFiles
                      onFileChange={(val) => {
                        setFile(val);
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-around align-middle mb-2">
                  <div>Departement</div>
                  <button
                    onClick={() => {
                      addDepartment((departments ?? []).length, {
                        name: "",
                        type: "",
                        abr: "",
                        value: "",
                        coordinator: {
                          name: "",
                          poste: "",
                        },
                        subjects: [],
                        parentId: "",
                        _id: uuid(),
                      });
                    }}
                    className="btn bg-cyan-500 hover:bg-cyan-700 text-white mr-1"
                  >
                    <svg
                      className="w-4 h-4 fill-current opacity-50 text-white shrink-0 mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>{" "}
                    Departement
                  </button>
                </div>

                <div
                  style={{ height: "500px" }}
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
                          <div className="font-semibold text-left">
                            Abreviation
                          </div>
                        </th>
                        <th className="px-2 first:pl-5 last:pr-5 py-3">
                          <div className="font-semibold text-left">
                            Coordinator
                          </div>
                        </th>
                        <th className="px-2 first:pl-5 last:pr-5 py-3">
                          <div className="font-semibold text-left">Poste</div>
                        </th>
                        <th className="px-2 first:pl-5 last:pr-5 py-3">
                          <div className="font-semibold text-left">Actions</div>
                        </th>
                        <th className="px-2 first:pl-5 last:pr-5 py-3">
                          <div className="font-semibold text-left">
                            Parent Id
                          </div>
                        </th>
                        <th className="px-2 first:pl-5 last:pr-5 py-3">
                          <div className="font-semibold text-left">Id</div>
                        </th>
                      </tr>
                    </thead>
                    {/* Table body */}
                    <tbody className="text-sm divide-y divide-slate-200 w-auto">
                      {(departments ?? [])?.map((elt, index) => {
                        return (
                          <tr
                            key={index}
                            className="w-full odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-100 border-b dark:border-gray-200"
                          >
                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                              <div
                                className="overflow-wrap"
                                style={{ minWidth: "140px" }}
                              >
                                <AInput
                                  onChange={(e) => {
                                    update(index, {
                                      ...departments[index],
                                      name: e,
                                    });
                                    setValue("name", e);
                                  }}
                                  value={elt?.name}
                                  placeholder={"Nom"}
                                />
                                {errors.name && (
                                  <Messages message={errors.name.message} />
                                )}
                              </div>
                            </td>
                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                              <div
                                className="description-container"
                                style={{ minWidth: "130px" }}
                              >
                                <div
                                  className="font-medium text-slate-800 description"
                                  style={{}}
                                >
                                  <SelectInput
                                    option={school_types}
                                    onChange={(val) => {
                                      update(index, {
                                        ...departments[index],
                                        type: val,
                                      });
                                      setValue("type", val);
                                    }}
                                    selectedOption={elt?.type}
                                    placeholder={"Type"}
                                  />
                                  {errors.type && (
                                    <Messages message={errors.type.message} />
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                              <div style={{ minWidth: "140px" }}>
                                <AInput
                                  onChange={async (val) => {
                                    update(index, {
                                      ...departments[index],
                                      value: val,
                                    });
                                    setValue("value", val);
                                  }}
                                  value={departments[index]?.value}
                                  placeholder="Value"
                                />
                                {errors.value && (
                                  <Messages message={errors.value.message} />
                                )}
                              </div>
                            </td>
                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                              <div style={{ minWidth: "140px" }}>
                                <AInput
                                  placeholder={"Abreviation"}
                                  onChange={async (val) => {
                                    update(index, {
                                      ...departments[index],
                                      abr: val,
                                    });
                                    setValue("abr", val);
                                  }}
                                  value={departments[index]?.abr}
                                />
                                {errors.abr && (
                                  <Messages message={errors.abr.message} />
                                )}
                              </div>
                            </td>
                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                              <div style={{ minWidth: "140px" }}>
                                <AInput
                                  placeholder={"Nom du Coordinateur"}
                                  onChange={(e) => {
                                    update(index, {
                                      ...departments[index],
                                      coordinator: {
                                        ...departments[index]?.coordinator,
                                        name: e,
                                      },
                                    });
                                    setValue("coordinator", e);
                                  }}
                                  value={elt?.coordinator?.name}
                                />
                                {errors.coordinator && (
                                  <Messages
                                    message={errors.coordinator.message}
                                  />
                                )}
                              </div>
                            </td>
                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                              <div style={{ minWidth: "140px" }}>
                                <SelectInput
                                  option={postes}
                                  onChange={(val) => {
                                    update(index, {
                                      ...departments[index],
                                      coordinator: {
                                        ...departments[index]?.coordinator,
                                        poste: val,
                                      },
                                    });
                                    setValue("poste", val);
                                  }}
                                  selectedOption={elt?.coordinator?.poste}
                                  placeholder={"Poste"}
                                />
                                {errors.poste && (
                                  <Messages message={errors.poste.message} />
                                )}
                              </div>
                            </td>
                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                              <div className="flex flex-row items-center justify-center">
                                <div className="font-medium text-slate-800">
                                  {index > 0 && (
                                    <button
                                      onClick={() => {
                                        onDelete(index);
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
                                  )}
                                  <button
                                    onClick={(e) => {
                                      launchModal(e, index, elt);
                                    }}
                                    aria-controls="addMatiere-modal"
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
                                </div>
                              </div>
                            </td>

                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                              <div style={{ minWidth: "140px" }}>
                                <AInput
                                  onChange={(val) => {
                                    update(index, {
                                      ...departments[index],
                                      parentId: val,
                                    });
                                    setValue("parentId", e);
                                  }}
                                  value={elt?.parentId}
                                  placeholder="Id Parent"
                                />
                              </div>
                            </td>

                            <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                              <div className="font-medium text-slate-800">
                                {elt?._id}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="px-5 py-2 border-t border-slate-200">
                  <div className="flex flex-wrap justify-center space-x-6">
                    <button
                      className="btn-sm text-left border-slate-200 hover:border-slate-300 text-slate-600"
                      onClick={(e) => {
                        navigateTo("/schools/list");
                      }}
                    >
                      {"Annuler"}
                    </button>
                    <button
                      type="submit"
                      onClick={handleSubmit(onFormSubmit, onErrors)}
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
              </div>
              {/* </div>
            )} */}
            </div>
          </main>
        </div>
      </div>
      <AddMatiere
        show={show}
        setShow={setShow}
        action={() => {}}
        matiere={matiere}
        index={index1}
      />
    </>
  );
}

export default AddSchool;
