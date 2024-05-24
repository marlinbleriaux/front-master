import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FileUploader } from "react-drag-drop-files";
import { toast } from "react-toastify";
import AInput from "../../components/Input";
import SelectInput from "../../components/SelectInput";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import { addPaper } from "../../slices/papers";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import moment from "moment";
import Tooltip from "../../components/Tooltip";
import { getSchools } from "../../slices/schools";
import { updateFilterData } from "../../utils/updateFilterData";
//import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function AddLoge() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { schools } = useSelector((state) => state.schools);

  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const validationSchema = Yup.object().shape({
    user: Yup.string().required("user is required"),
    title: Yup.string().required("title is required"),
    type: Yup.string().required("type is required"),
    ville: Yup.string().required("ville is required"),
    quartier: Yup.string().required("quartier is required"),
    phone: Yup.string().required("phone is required"),
    loyer: Yup.string().required("loyer is required"),
    actualite: Yup.string().required("actuality is required"),
    description: Yup.string().required("description is required"),
    views: Yup.string().required("view is required"),
    likes: Yup.string().required("like is required"),
    capacite: Yup.string().required("capacity is required"),
    chambre: Yup.string().required("chambre is required"),
    apercu: Yup.string().required("apercu is required"),
    toiletType: Yup.string().required("toilet type is required"),
    computerType: Yup.string().required("compteur type is required"),
    bathrooms: Yup.string().required("bathrooms is requiered"),
    status: Yup.string().required("status is required"),
    university: Yup.string().required("university is requiered"),
    //url, services, housetype, code, assets, comments, rating
  });
  const dispatch = useDispatch();
  const onFormSubmit = async (data) => {
    let formData = new FormData(); //formdata object
    formData.append("user", data.user);
    formData.append("views", data.views);
    formData.append("type", data.type);
    formData.append("title", data.title); //append the values with key, value pair
    formData.append("ville", data.ville);
    formData.append("quartier", data.quartier);
    formData.append("phone", data.phone);
    formData.append("loyer", data.loyer);
    formData.append("actualite", data.actualite);
    formData.append("description", data.description);
    formData.append("likes", data.likes);
    formData.append("capacite", data.capacite);
    formData.append("chambre", data.chambre);
    formData.append("toiletType", data.toiletType);
    formData.append("computeurType", data.computerType);
    formData.append("bathrooms", data.bathrooms);
    formData.append("status", data.status);
    formData.append("preview", file[0]);
    formData.append("university", data.university);
    dispatch(addPaper(formData))
      .unwrap()
      .then(() => {})
      .catch(() => {});
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });
  const onErrors = (errors) => console.error(errors);

  const [user, setUser] = useState("");
  const [views, setViews] = useState("");
  const [title, setTitre] = useState("");
  const [ville, setVille] = useState("");
  const [quartier, setQuartier] = useState("");
  const [tel, setPhone] = useState("");
  const [type, setType] = useState("");
  const [loye, setLoyer] = useState("");
  const [actualite, setActu] = useState("");
  const [description, setDescription] = useState("");
  const [likes, setLikes] = useState("");
  const [capacite, setCapacity] = useState("");
  const [chambre, setChambre] = useState("");
  const [toiletType, setToiletType] = useState("");
  const [computerType, setComputerType] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [status, setStatus] = useState("");
  const [university, setUniversity] = useState("");

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    console.log(file);
    console.log(file[0]);
    setFile(file);
  };

  const notify = () => toast("Formulaire soumis!");
  if (isValid) {
  }

  const [universities, setUniversities] = useState([]);

  useEffect(async () => {
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

      setUniversities([...(data?.universites ?? [])]);
    } catch (e) {
      console.log(e);
    }
  };

  /*const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])*/

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                Accommodation list ✨
              </h1>
            </div>

            <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
              <div className="border-t border-slate-200">
                {/* Components */}
                <div className="space-y-8 mt-8">
                  {/* Input Types */}
                  <div>
                    <h2 className="text-2xl text-slate-800 font-bold mb-6">
                      Housing information
                    </h2>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        {/* Start */}
                        <div className="flex-1">
                          <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="description"
                          >
                            {" "}
                            Users <span className="text-rose-500">*</span>
                          </label>
                          <SelectInput
                            option={[
                              { value: "user1", name: "User1" },
                              { value: "user2", name: "User2" },
                              { value: "user3", name: "User3" },
                            ]}
                            onChange={(e) => {
                              setUser(e);
                            }}
                          />
                        </div>
                        {/* End */}
                      </div>
                      <AInput
                        label="Title"
                        type="text"
                        id="title"
                        name="title"
                        onChange={(e) => {
                          setTitre("title", e);
                        }}
                        register={{ ...register("title") }}
                        valid={errors.title ? false : {}}
                      />
                      <div>
                        {/* Start */}
                        <div className="flex-1">
                          <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="description"
                          >
                            {" "}
                            Type <span className="text-rose-500">*</span>
                          </label>
                          <SelectInput
                            option={[
                              { value: "room", name: "Room" },
                              { value: "appart", name: "Appartement" },
                              { value: "home", name: "Home" },
                              { value: "studio", name: "Studio" },
                            ]}
                            onChange={(e) => {
                              setType(e);
                            }}
                          />
                        </div>
                        {/* End */}
                      </div>
                      <div>
                        {/* Start */}
                        <div className="flex-1">
                          <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="description"
                          >
                            {" "}
                            Toilet type <span className="text-rose-500">*</span>
                          </label>
                          <SelectInput
                            option={[
                              { value: "modern", name: "Modern" },
                              { value: "traditional", name: "Traditional" },
                              { value: "noIdea", name: "No idea" },
                            ]}
                            onChange={(e) => {
                              setToiletType(e);
                            }}
                          />
                        </div>
                        {/* End */}
                      </div>
                      <div>
                        {/* Start */}
                        <div className="flex-1">
                          <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="description"
                          >
                            {" "}
                            Compteur type{" "}
                            <span className="text-rose-500">*</span>
                          </label>
                          <SelectInput
                            option={[
                              { value: "Prepaid", name: "Prepaid" },
                              { value: "notPrepaid", name: "Not prepaid" },
                            ]}
                            onChange={(e) => {
                              setComputerType(e);
                            }}
                          />
                        </div>
                        {/* End */}
                      </div>
                      <AInput
                        label="Phone"
                        type="text"
                        required
                        onChange={(e) => {
                          setPhone("phone", e);
                        }}
                        register={{ ...register("phone") }}
                        valid={errors.phone ? false : {}}
                      />
                      <AInput
                        label="Loyer"
                        type="number"
                        required
                        onChange={(e) => {
                          setLoyer("loyer", e);
                        }}
                        register={{ ...register("loyer") }}
                        valid={errors.loyer ? false : {}}
                      />
                      <div>
                        <div className="flex-1">
                          <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="description"
                          >
                            {" "}
                            Status <span className="text-rose-500">*</span>
                          </label>
                          <SelectInput
                            option={[
                              { value: "new", name: "New" },
                              { value: "occupé", name: "Occupé" },
                              { value: "collocation", name: "collocation" },
                            ]}
                            onChange={(e) => {
                              setStatus(e);
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex-1">
                          <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="description"
                          >
                            {" "}
                            University <span className="text-rose-500">*</span>
                          </label>
                          <SelectInput
                            option={universities}
                            onChange={(e) => {
                              setUniversity(e);
                            }}
                          />
                        </div>
                      </div>
                      <AInput
                        label="Bathrooms"
                        type="number"
                        id="bathrooms"
                        name="bathrooms"
                        placeholder="0"
                        required
                        onChange={(e) => {
                          setBathrooms("bathrooms", e);
                        }}
                        register={{ ...register("bathrooms") }}
                        valid={errors.bathrooms ? false : {}}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="grid gap-5 md:grid-cols-2">
                      <AInput
                        label="Views"
                        type="number"
                        id="views"
                        name="views"
                        placeholder="0"
                        required
                        onChange={(e) => {
                          setViews("views", e);
                        }}
                        register={{ ...register("views") }}
                        valid={errors.views ? false : {}}
                      />
                      <AInput
                        label="Likes"
                        type="number"
                        id="likes"
                        name="likes"
                        placeholder="0"
                        required
                        onChange={(e) => {
                          setLikes("likes", e);
                        }}
                        register={{ ...register("likes") }}
                        valid={errors.likes ? false : {}}
                      />
                      <div>
                        <div className="flex-1">
                          <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="description"
                          >
                            {" "}
                            Description <span className="text-rose-500">*</span>
                          </label>
                          <textarea
                            id="description"
                            className="form-textarea h-full w-full"
                            rows="6"
                            type="text-area"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex-1">
                          <label
                            className="block text-sm font-medium mb-1"
                            htmlFor="equipement"
                          >
                            {" "}
                            Equipement <span className="text-rose-500">*</span>
                          </label>
                          <textarea
                            id="equipement"
                            className="form-textarea h-full w-full"
                            rows="6"
                            type="text-area"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div>
                    <h2 className="text-2xl text-slate-800 font-bold mb-6">
                      Little more
                    </h2>
                    <div className="flex flex-wrap items-center -m-3 gap-2">
                      <div className="m-3">
                        {/* Start */}
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-sm ml-2">Modern</span>
                        </label>
                        {/* End */}
                      </div>

                      <div className="m-3">
                        {/* Start */}
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-sm ml-2">Closet</span>
                        </label>
                        {/* End */}
                      </div>

                      <div className="m-3">
                        {/* Start */}
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-sm ml-2">Kitchen</span>
                        </label>
                        {/* End */}
                      </div>
                    </div>

                    {/* <div className="grid gap-5 md:grid-cols-2" style={{marginTop:20}}>
                    <AInput 
                      label="Capacite" 
                      type="number" 
                      placeholder="0"  
                      required
                      onChange={(e) => {setCapacity(e);}}
                      register={{...register("capacite")}}
                      valid={errors.ville ? false : {}}
                    />
                    <AInput 
                      label="Chambre" 
                      type="number" 
                      id="chambre"
                      name="chambre"
                      placeholder="0" 
                      required
                      onChange={(e) => {setValue("chambre", e);}}
                      register={{...register("chambre")}}
                      valid={errors.ville ? false : {}}
                    />

                  </div> */}
                  </div>

                  <div>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="assets"
                        >
                          {" "}
                          Preview{" "}
                        </label>
                        <FileUploader
                          id="assets"
                          multiple={true}
                          handleChange={handleChange}
                          name="file"
                        />
                        <p>
                          {" "}
                          {file
                            ? `File name: ${file[0].name}`
                            : "Aucun document ajouté !"}{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div></div>

                  <div className="m-1.5">
                    <button
                      onClick={notify}
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AddLoge;
