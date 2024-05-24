import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import {
  addUsers,
  getRoles,
  getUserById,
  replaceInputUser,
  updateUser,
} from "../../slices/users";
import {
  addStudents,
  // getRoles,
  // getUserById,
  // replaceInputUser,
  // updateUser,
} from "../../slices/student";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import SelectInput from "../../components/SelectInput";
import DragFiles from "../../components/DragFile";
import AInput from "../../components/Input";
// import { getSchools } from "../../slices/schools";
import { updateFilterData } from "../../utils/updateFilterData";
import DateInput from "../../components/DateInput";
import formatDate from "../../utils/formatDate";
import { showError, showSucces } from "../../components/Toasts";
import PhoneInput2 from "../../components/PhoneInput2";

function CreateUser() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("email is required"),
    // phoneNumber: Yup.string().required("phoneNumber is required"),
    firstName: Yup.string().required("firstName is required"),
    lastName: Yup.string().required("lastName is required"),
    // password: Yup.string()
    //   .required("Password is required")
    //   .min(6, "Password must be at least 6 characters")
    //   .max(40, "Password must not exceed 40 characters"),
  });
  const { inputUser, user, roles = [] } = useSelector((state) => state.users);
  const { schools } = useSelector((state) => state.schools);
  const { id } = useParams();
  const location = useLocation();
  const navigateTo = useNavigate();
  const { pathname } = location;

  const [showForm, setShowForm] = useState(true);

  const dispatch = useDispatch();
  const onFormSubmit = async (data) => {
    try {
      setLoading(true);
      let studentData = {};
  
      if (inputUser?.faculty && inputUser?.faculty !== undefined)
        studentData.faculty = inputUser?.faculty;
      
      if (inputUser?.department && inputUser?.department !== undefined)
        studentData.departement = inputUser?.department;
  
      if (inputUser?.birth_date && inputUser?.birth_date !== undefined)
        studentData.birthdate = formatDate(inputUser?.birth_date, "YYYY-MM-DD");
  
      if (inputUser?.matricule && inputUser?.matricule !== undefined)
        studentData.matricule = inputUser?.matricule;
        
      if (inputUser?.level && inputUser?.level !== undefined)
        studentData.level = inputUser?.level;
  
      if (inputUser?.firstName && inputUser?.firstName !== undefined)
        studentData.name = inputUser?.firstName;
       
      if (inputUser?.email && inputUser?.email !== undefined)
        studentData.email = inputUser?.email;
        
      if (inputUser?.phoneNumber && inputUser?.phoneNumber !== undefined)
        studentData.phoneNumber = addPlusIfNeeded(inputUser?.phoneNumber);
  
      if (inputUser?.sexe && inputUser?.sexe !== undefined)
        studentData.sexe = inputUser?.sexe;
  
      if (inputUser?.filiere && inputUser?.filiere !== undefined)
        studentData.filiere = inputUser?.filiere;
      console.log( studentData.filiere);
  
      // if (file && file !== undefined) 
      //   studentData.picture = file; // Note: if you need to handle file upload, this might need special handling.
  
      if (pathname.includes("users/edit")) {
        // Code for editing a user, if needed.
      } else {
        // console.log("studentData");
        // console.log(studentData);
        
        dispatch(addStudents(studentData))
          .unwrap()
          .then(() => {
            setLoading(false);
            showSucces("Terminer");
          })
          .catch(() => {
            setLoading(false);
            showError("Une erreur s'est produite");
          });
      }
    } catch (error) {
      setLoading(false);
      showError("Une erreur s'est produite");
    }
  };
  
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(pathname.includes("users/edit") ? Yup.object().shape({}) : validationSchema),
  });
  const onErrors = (errors) => {
    console.error(errors);
    showError("Verifier tous les champs du formulaire et reessayer.");
  };

  if (isValid) {
    // return <Navigate to="/papers/list" />;
  }
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
 
  const [file, setFile] = useState(null);

  useEffect(async () => {
    if (pathname.includes("users/edit")) {
      await dispatch(getUserById(id))
        .unwrap()
        .then((data) => {
          dispatch(
            replaceInputUser({
              // ...inputPaper,
              ...data,
              password: null,
              role: data.role?._id
              // year: new Date(paper?.year),
            })
          );
          if (data?.isDelete) setDeleted(data?.isDelete);
        })
        .catch(() => {});
    }
    dispatch(getRoles()).unwrap();
    dispatch(
      // getSchools()
    )
      .unwrap()
      .then((data) => {
        updateFilterData2({ datas: data });
      })
      .catch(() => {});
  }, []);

  
  const addPlusIfNeeded = (number) => {
    // Vérifier si le nombre commence par un signe "+"
    if (!/^\+/.test(number)) {
      // Ajouter le signe "+" au début du nombre
      return `+${number}`;
    }
    // Retourner le nombre tel quel s'il commence déjà par "+"
    return number;
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
          {/* <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"> */}
          <div className=" px-4 sm:px-6 lg:px-8 py-8 ">
            {/* Page header */}
            {/* Left: Title */}

            <div className="block  sm:justify-between sm:items-center mb-5">
              {/* Left: Title */}
              {/* <div className="mb-4 sm:mb-0"> */}
              <h1 className="text-2xl font-bold font-medium text-cyan-500 hover:text-cyan-600">
                Student
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
              <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
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
                >
                  Submit
                </button>
              </form>
            )}

            <div className="justify-center items-center ">
              {/* <div id="profile" role="tabpanel" aria-labelledby="profile-tab"> */}
              {showForm && (
                <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    {/* <div id="file2" className="">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="fichier"
                      >
                        Photo
                      </label>
                      <DragFiles
                        onFileChange={(val) => {
                          setFile(val);
                        }}
                        eltId={"file2"}
                      />
                      <p>
                        {file
                          ? "File name: " + file[0]?.name
                          : "Aucune image ajoutée!"}
                      </p>
                    </div> */}
                    <div></div>
                    <AInput
                      label="First Name"
                      required
                      onChange={(e) => {
                        setValue("firstName", e);
                        dispatch(
                          replaceInputUser({ ...inputUser, firstName: e })
                        );
                      }}
                      className={`form-input w-full ${
                        errors.firstName ? "border-red-500" : ""
                      }`}
                      valid={errors?.firstName ? false : {}}
                      placeholder="John"
                      value={inputUser?.firstName}
                    />
                    <AInput
                      label="Last Name"
                      required
                      onChange={(e) => {
                        setValue("lastName", e);
                        dispatch(
                          replaceInputUser({ ...inputUser, lastName: e })
                        );
                      }}
                      className={`form-input w-full ${
                        errors.lastName ? "border-red-500" : ""
                      }`}
                      valid={errors?.lastName ? false : {}}
                      placeholder="Doe"
                      value={inputUser?.lastName}
                    />

                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block mb-2 text-sm font-medium"
                      >
                        Phone Number
                      </label>
                      <PhoneInput2
                        country={"cm"}
                        value={inputUser?.phoneNumber}
                        onChange={(e) => {
                          setValue("phoneNumber", e);
                          dispatch(
                            replaceInputUser({ ...inputUser, phoneNumber: e })
                          );
                        }}
                        placeholder="Numero de Telephone"
                      />
                    </div>

                    <AInput
                      label="Email"
                      required
                      onChange={(e) => {
                        setValue("email", e);
                        dispatch(replaceInputUser({ ...inputUser, email: e }));
                      }}
                      className={`form-input w-full ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      valid={errors?.email ? false : {}}
                      placeholder="exemple@gmail.com"
                      value={inputUser?.email}
                    />
                    <AInput
                      label="Matricule"
                      // required
                      onChange={(e) => {
                        setValue("matricule", e);
                        dispatch(
                          replaceInputUser({ ...inputUser, matricule: e })
                        );
                      }}
                      className={`form-input w-full ${
                        errors.lastName ? "border-red-500" : ""
                      }`}
                      valid={errors?.lastName ? false : {}}
                      placeholder="12J2345"
                      value={inputUser?.matricule}
                    />
                    <SelectInput
                      labelI="Sexe"
                      option={[
                        { value: "M", name: "M" },
                        { value: "F", name: "F" },
                      ]}
                      onChange={(e) => {
                        setValue("sexe", e);
                        dispatch(replaceInputUser({ ...inputUser, sexe: e }));
                      }}
                      selectedOption={inputUser?.sexe}
                    />

                    <SelectInput
                      labelI="Filiere"
                      option={[
                        { value: "MATHEMATIQUE", name: "MATHEMATIQUE" },
                        { value: "INFORMATIQUE", name: "INFORMATIQUE" },
                        { value: "BIOSCIENCE", name: "BIOSCIENCE" },
                        { value: "GEOSCIENCE", name: "GEOSCIENCE" },
                        { value: "PHYSIQUE", name: "PHYSIQUE" },
                        { value: "ICT4D", name: "ICT4D"},
                        { value: "SIGL", name: "SIGL"},
                      ]}
                      placeholder={"Filiere"}
                      onChange={(e) => {
                        setValue("filiere", e);
                        dispatch(replaceInputUser({ ...inputUser, filiere: e }));
                      }}
                      selectedOption={inputUser?.filiere}
                    />
                     <SelectInput
                      labelI="Level"
                      option={[
                        { value: "L1", name: "L1" },
                        { value: "L2", name: "L2" },
                        { value: "L3", name: "L3" },
                        { value: "M1", name: "M1" },
                        { value: "M2", name: "M2" },
                        // { value: "ICT4D", name: "ICT4D"},
                        // { value: "SIGL", name: "SIGL"},
                      ]}
                      placeholder={"Level"}
                      onChange={(e) => {
                        setValue("level", e);
                        dispatch(replaceInputUser({ ...inputUser, level: e }));
                      }}
                      selectedOption={inputUser?.level}
                    />
                   

                    <DateInput
                      id="birth_date"
                      label="Anniversaire"
                      placeholder={"Anniversaire"}
                      setSvg={"of"}
                      onChange={(value) => {
                        setValue("birth_date", value);
                        dispatch(
                          replaceInputUser({ ...inputUser, birth_date: value })
                        );
                      }}
                      value={inputUser?.birth_date}
                    />

                    
                    <>
                      <SelectInput
                        labelI="University"
                        option={[
                          { value: "UY1", name: "UY1" },
                          { value: "UY2", name: "UY2" },
                          { value: "DOUALA", name: "DOUALA" },
                          
                        ]}
                        onChange={(val) => {
                          dispatch(
                            dispatch(
                              replaceInputUser({ ...inputUser, university: value })
                            )
                          );
                          setValue("university", val);
                        }}
                        selectedOption={inputUser?.student?.university}
                      />
                      <SelectInput
                        labelI="Faculté"
                        option={[
                          { value: "FS", name: "FS" },
                          { value: "FALSH", name: "FALSH" },
                          { value: "FMSB", name: "FMSB" },
                          
                        ]}
                        onChange={(e) => {
                          setValue("faculty", e);
                          dispatch(
                            replaceInputUser({
                              ...inputUser,
                                faculty: e,
                              
                            })
                          );
                        }}
                        selectedOption={inputUser?.faculty}
                      />
                      <SelectInput
                        labelI="Departement"
                        option={[
                          { value: "MATHEMATIQUE", name: "MATHEMATIQUE" },
                          { value: "INFORMATIQUE", name: "INFORMATIQUE" },
                          { value: "BIOSCIENCE", name: "BIOSCIENCE" },
                          { value: "GEOSCIENCE", name: "GEOSCIENCE" },
                          { value: "PHYSIQUE", name: "PHYSIQUE" },
                          // { value: "ICT4D", name: "ICT4D"},
                          // { value: "SIGL", name: "SIGL"},
                        ]}
                        placeholder={"Departement"}
                        onChange={(val) => {
                          setValue("departement", val);
                          dispatch(
                            replaceInputUser({
                              ...inputUser,
                              
                                department: val,
                              
                            })
                          );
                        }}
                        selectedOption={inputUser?.departement}
                      />
                      <SelectInput
                        labelI="Filière"
                        option={[
                          { value: "MATHEMATIQUE", name: "MATHEMATIQUE" },
                          { value: "INFORMATIQUE", name: "INFORMATIQUE" },
                          { value: "BIOSCIENCE", name: "BIOSCIENCE" },
                          { value: "GEOSCIENCE", name: "GEOSCIENCE" },
                          { value: "PHYSIQUE", name: "PHYSIQUE" },
                          { value: "ICT4D", name: "ICT4D"},
                          { value: "SIGL", name: "SIGL"},
                        ]}
                        onChange={(val) => {
                          dispatch(
                            replaceInputUser({
                              ...inputUser,
                                filiere: val,

                              })
                          );
                          setValue("filiere", val);
                        }}
                        selectedOption={inputUser?.filiere}
                      />
                
                    </>
                
                  </div>
                  <div className="px-5 py-2 border-t border-slate-200">
                    <div className="flex flex-wrap justify-center space-x-6">
                      <button
                        className="btn-sm text-left border-slate-200 hover:border-slate-300 text-slate-600"
                        onClick={(e) => {
                          navigateTo("/users/list");
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
              )}

              {/* </div> */}
              {/* Add content for other tabs if needed */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CreateUser;
