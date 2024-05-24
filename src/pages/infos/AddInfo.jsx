import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  addInfo,
  getInfoById,
  replaceInputInfo,
  updateInfo,
} from "../../slices/infos";
import { getUsers } from "../../slices/users";
import DragFile from "../../components/DragFile";
import SelectInput from "../../components/SelectInput";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import formatDate from "../../utils/formatDate";
import { showError, showSucces } from "../../components/Toasts";
import AInput from "../../components/Input";
import DateInput from "../../components/DateInput";
import genRscCode from "../../common/genRscCode";
import infoCategorie from "../../common/enum/infoCategorie";
import infoType from "../../common/enum/infoType";
import infoSubType from "../../common/enum/infoSubType";
import statues from "../../common/enum/statues";
import { updateFilterData } from "../../utils/updateFilterData";
import { getSchools } from "../../slices/schools";

const validationSchema = Yup.object().shape({
  user: Yup.string().required("user is required"),
  title: Yup.string().required("title is required"),
  // faculty: Yup.string().required("faculty is required"),
  // teacher: Yup.string().required('teacher is required'),
  // assets: Yup.string().required('assets is required'),
  // year: Yup.string().required("year is required"),
});

function AddInfo() {
  const { users, teachers } = useSelector((state) => state.users);
  const { inputInfo, info } = useSelector((state) => state.infos);
  const { schools } = useSelector((state) => state.schools);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  
  const [universities, setUniversities] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [levels, setLevels] = useState([]);
  const [fillieres, setFillieres] = useState([]);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmit },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useDispatch();

  const { id } = useParams();
  const location = useLocation();
  const navigateTo = useNavigate();
  const { pathname } = location;

  const onErrors = (errors) => {
    console.error(errors);
    showError("Verifier tous les champs du formulaire et reessayer.");
  };

  const onFormSubmit = async (data) => {
    setLoading(true);
    let formData = new FormData();
    formData.append(
      "code",
      genRscCode(inputInfo?.type, "info", inputInfo?.user)
    );
    if (inputInfo?.title) formData.append("title", inputInfo?.title);
    if (inputInfo?.description)
      formData.append("description", inputInfo?.description);
    if (inputInfo?.url) formData.append("url", inputInfo?.url);
    //formData.append("comment", data.comment);
    if (inputInfo?.department)
      formData.append("department", inputInfo?.department);
    if (inputInfo?.university)
      formData.append("university", inputInfo?.university);
    if (inputInfo?.level) formData.append("level", inputInfo?.level);
    if (inputInfo?.faculty) formData.append("faculty", inputInfo?.faculty);
    if (inputInfo?.filiere) formData.append("filiere", inputInfo?.filiere);
    if (inputInfo?.category) formData.append("category", inputInfo?.category);
    if (inputInfo?.type) formData.append("type", inputInfo?.type);
    if (inputInfo?.subType) formData.append("subType", inputInfo?.subType);
    // formData.append("likes", []);
    if (inputInfo?.views)
      formData.append(
        "views",
        !isNaN(inputInfo?.views) ? inputInfo?.views : info?.views ?? 0
      );
    if (deleted) formData.append("isDelete", deleted);
    if (inputInfo?.user) formData.append("user", inputInfo?.user);
    if (inputInfo?.status)
      formData.append("status", inputInfo?.status ?? "REFUSED");
    if (inputInfo?.publishedAt) {
      formData.append(
        "publishedAt",
        formatDate(inputInfo?.publishedAt, "YYYY-MM-DD")
      );
    }
    if (inputInfo?.endAt)
      formData.append("endAt", formatDate(inputInfo?.endAt, "YYYY-MM-DD"));

    if (file) formData.append("assets", file);
    if (inputInfo?.scope) formData.append("scope", inputInfo?.scope);

    if (inputInfo?.comment) {
      formData.append("comments[0][rate]", 3);
      formData.append(
        "comments[0][userId]",
        "013c96f5-78f9-49b9-b4d2-166d59a3e28f"
      );
      formData.append("comments[0][comment]", inputInfo?.comment);
    }

    if (pathname.includes("infos/edit")) {
      dispatch(updateInfo({ id, data: formData }))
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
      dispatch(addInfo(formData))
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
  };

  useEffect(async () => {
    if (pathname.includes("infos/edit")) {
      await dispatch(getInfoById(id))
        .unwrap()
        .then((data) => {
          dispatch(
            replaceInputInfo({
              // ...inputInfo,
              ...data,
              // year: new Date(paper?.year),
            })
          );
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
    <div className="flex h-screen overflow-auto">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className=" flex flex-col flex-1">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="overflow-auto">
          <div className=" relative px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className=" sm:flex sm:justify-between sm:items-center mb-5">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  {" "}
                  Create An information{" "}
                </h1>
              </div>
            </div>

            <div className="relative  justify-center items-center">
              <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
                {/* <div className="space-y-4 mb-8"> */}
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <SelectInput
                    labelI="University"
                    option={universities}
                    onChange={(val) => {
                      setValue("university", val);
                      dispatch(
                        replaceInputInfo({
                          ...inputInfo,
                          university: val,
                        })
                      );
                    }}
                    selectedOption={inputInfo?.university}
                  />
                  <SelectInput
                    labelI="Faculté"
                    option={faculties}
                    onChange={(val) => {
                      setValue("faculty", val);
                      dispatch(
                        replaceInputInfo({ ...inputInfo, faculty: val })
                      );
                    }}
                    selectedOption={inputInfo?.faculty}
                  />
                  <SelectInput
                    labelI="Departement"
                    option={departments}
                    onChange={(val) => {
                      setValue("department", val);
                      dispatch(
                        replaceInputInfo({
                          ...inputInfo,
                          department: val,
                        })
                      );
                    }}
                    selectedOption={inputInfo?.department}
                  />
                  <SelectInput
                    labelI="Filière"
                    option={fillieres}
                    onChange={(val) => {
                      setValue("filiere", val);
                      dispatch(
                        replaceInputInfo({ ...inputInfo, filiere: val })
                      );
                    }}
                    selectedOption={inputInfo?.filiere}
                  />
                  <SelectInput
                    labelI="Niveau"
                    option={levels}
                    onChange={(val) => {
                      setValue("level", val);
                      dispatch(replaceInputInfo({ ...inputInfo, level: val }));
                    }}
                    selectedOption={inputInfo?.level}
                  />
                  <SelectInput
                    labelI="Category"
                    option={infoCategorie}
                    onChange={(val) => {
                      setValue("category", val);
                      dispatch(
                        replaceInputInfo({ ...inputInfo, category: val })
                      );
                    }}
                    selectedOption={inputInfo?.type}
                  />

                  <SelectInput
                    labelI="Type"
                    option={infoType}
                    onChange={(val) => {
                      setValue("type", val);
                      dispatch(replaceInputInfo({ ...inputInfo, type: val }));
                    }}
                    selectedOption={inputInfo?.type}
                  />

                  <SelectInput
                    labelI="Sub Type"
                    option={infoSubType}
                    onChange={(val) => {
                      setValue("subType", val);
                      dispatch(
                        replaceInputInfo({ ...inputInfo, subType: val })
                      );
                    }}
                    selectedOption={inputInfo?.subType}
                  />

                  <SelectInput
                    labelI="Status"
                    option={statues}
                    onChange={(val) => {
                      setValue("status", val);
                      dispatch(replaceInputInfo({ ...inputInfo, status: val }));
                    }}
                    selectedOption={inputInfo?.status}
                  />
                  <SelectInput
                    labelI="User"
                    option={users}
                    imgSrc={["picture", "baseUrl"]}
                    label={"firstName"}
                    value={"_id"}
                    onChange={(val) => {
                      setValue("user", val);
                      dispatch(replaceInputInfo({ ...inputInfo, user: val }));
                    }}
                    selectedOption={inputInfo?.user}
                  />
                  <AInput
                    label="Vues"
                    required={false}
                    type="number"
                    onChange={(e) => {
                      setValue("views", e);
                      dispatch(replaceInputInfo({ ...inputInfo, views: e }));
                    }}
                    className={`form-input w-full ${
                      errors.views ? "border-red-500" : ""
                    }`}
                    placeholder="views"
                    value={inputInfo?.views}
                  />

                  {pathname.includes("infos/edit") && (
                    <AInput
                      label="Scope"
                      required={false}
                      onChange={(e) => {
                        setValue("scope", e);
                        dispatch(replaceInputInfo({ ...inputInfo, scope: e }));
                      }}
                      className={`form-input w-full ${
                        errors.scope ? "border-red-500" : ""
                      }`}
                      valid={errors?.scope ? false : {}}
                      placeholder="Scope"
                      value={inputInfo?.scope}
                    />
                  )}

                  <div className="m-3 w-24">
                    <label className="block text-sm font-medium">Delete</label>
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

                  <AInput
                    label="Ajouter une url"
                    required={false}
                    onChange={(e) => {
                      setValue("url", e);
                      dispatch(replaceInputInfo({ ...inputInfo, url: e }));
                    }}
                    className={`form-input w-full ${
                      errors.url ? "border-red-500" : ""
                    }`}
                    placeholder="Url"
                    value={inputInfo?.url}
                  />
                  <AInput
                    label="Leave a comment"
                    required={false}
                    onChange={(e) => {
                      setValue("comment", e);
                      dispatch(replaceInputInfo({ ...inputInfo, comment: e }));
                    }}
                    className={`form-input w-full ${
                      errors.comment ? "border-red-500" : ""
                    }`}
                    placeholder="Comment"
                    value={inputInfo?.comment}
                  />

                  <DateInput
                    label="Date de fin de la publication"
                    value={inputInfo?.endAt}
                    onChange={(value) => {
                      let val = value.toString();
                      setValue("endAt", new Date(val));
                      dispatch(replaceInputInfo({ ...inputInfo, endAt: val }));
                    }}
                  />
                  <DateInput
                    label="Date de publication"
                    value={inputInfo?.publishedAt}
                    onChange={(value) => {
                      let val = value.toString();
                      setValue("publishedAt", new Date(val));
                      dispatch(
                        replaceInputInfo({ ...inputInfo, publishedAt: val })
                      );
                    }}
                  />
                </div>

                <AInput
                  label="Title"
                  required={false}
                  onChange={(e) => {
                    setValue("title", e);
                    dispatch(replaceInputInfo({ ...inputInfo, title: e }));
                  }}
                  className={`form-input w-full ${
                    errors.title ? "border-red-500" : ""
                  }`}
                  placeholder="Titre"
                  value={inputInfo?.title}
                />

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
                        replaceInputInfo({
                          ...inputInfo,
                          description: e.target.value,
                        })
                      );
                    }}
                    className="form-textarea h-full w-full"
                    value={inputInfo?.description}
                    rows="6"
                    type="text-area"
                  />
                </div>

                {/* assets */}
                <div id="file" className="">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="fichier"
                  >
                    Assets <span className="text-rose-500">*</span>
                  </label>
                  <DragFile
                    onFileChange={(val) => {
                      setFile(val);
                    }}
                  />
                  {/* <FileUploader  
                              handleChange={handlefileChange}
                               multiple={true}
                                name="file"
                                 types={fileTypes}
                             /> */}
                </div>

                <div className="px-5 py-2 border-t border-slate-200">
                  <div className="flex flex-wrap justify-center space-x-6">
                    <button
                      className="btn-sm text-left border-slate-200 hover:border-slate-300 text-slate-600"
                      onClick={(e) => {
                        navigateTo("/infos/list");
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
                          className="animate-spin w-4 h-4 mr-3 fill-current shrink-0"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                        </svg>
                      )}
                      <div className="">Enregistrer</div>
                    </button>
                  </div>
                </div>
                {/* </div> */}
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AddInfo;
