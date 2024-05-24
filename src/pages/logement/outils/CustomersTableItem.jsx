import React, { useState } from 'react';
import ModalBasic from '../../../components/ModalBasic';
import ModalBlank from '../../../components/ModalBlank';
import AInput from "../../../components/Input";
import SelectInput from "../../../components/SelectInput";
import "react-datepicker/dist/react-datepicker.css";
import { FileUploader } from "react-drag-drop-files";
import { toast } from "react-toastify";
import { addPaper } from "../../../slices/papers";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function CustomersTableItem(props) {

  //modal

  const [dangerModalOpen, setDangerModalOpen] = useState(false)
  const [infoModalOpen, setInfoModalOpen] = useState(false)
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)

  //form

  const validationSchema = Yup.object().shape({
    user: Yup.string().required("user is required"),
    title: Yup.string().required("title is required"),
    type: Yup.string().required("type is required"),
    phone: Yup.string().required("phone is required"),
    loyer: Yup.string().required("loyer is required"),
    views: Yup.string().required("view is required"),
    likes: Yup.string().required("like is required"),
    apercu: Yup.string().required("apercu is required"),
    toiletType: Yup.string().required("toilet type is required"),
    computerType: Yup.string().required("compteur type is required"),
    bathrooms: Yup.string().required("bathrooms is requiered"),
    status: Yup.string().required("status is required"),
    university: Yup.string().required("university is requiered"),
  });
  const dispatch = useDispatch();
  const onFormSubmit = async (data) => {
    let formData = new FormData(); //formdata object
    formData.append("user", data.user);
    formData.append("views", data.views);
    formData.append("type", data.type);
    formData.append("title", data.title);
    formData.append("phone", data.phone);
    formData.append("loyer", data.loyer);
    formData.append("likes", data.likes);
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
  const [tel, setPhone] = useState("");
  const [type, setType] = useState("");
  const [loye, setLoyer] = useState("");
  const [likes, setLikes] = useState("");
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
  if (isValid) {}
  
  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input id={props.id} className="form-checkbox" type="checkbox" onChange={props.handleClick} checked={props.isChecked} />
          </label>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center relative">
          <button>
            <svg className={`w-4 h-4 shrink-0 fill-current ${props.fav ? 'text-amber-500' : 'text-slate-300'}`} viewBox="0 0 16 16">
              <path d="M8 0L6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934h-6L8 0z" />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
            <img className="rounded-full" src={props.image} width="40" height="40" alt={props.user} />
          </div>
          <div className="font-medium text-slate-800">{props.user}</div>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.title}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{props.localisation}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-center">{props.type}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left font-medium text-sky-500">{props.statut}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left font-medium text-emerald-500">{props.loyer}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-center">{props.capacity}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 w-px">
        {/* Menu button */}
        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="feedback-modal" onClick={(e) => { e.stopPropagation(); setInfoModalOpen(true); }}>
          <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
          </svg>
        </button>
        <ModalBlank id="info-modal" modalOpen={infoModalOpen} setModalOpen={setInfoModalOpen}>
                        <div className="p-5 flex space-x-4">
                          {/* Icon */}
                          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-indigo-100">
                            <svg className="w-4 h-4 shrink-0 fill-current text-indigo-500" viewBox="0 0 16 16">
                              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                            </svg>
                          </div>
                          {/* Content */}
                          <div>
                            {/* Modal header */}
                            <div className="mb-2">
                              <div className="text-lg font-semibold text-slate-800">More information</div>
                            </div>
                            {/* Modal content */}
                            <div className="text-sm mb-10">
                              <div className="space-y-2">
                                <p>User : </p>
                                <p>Title : </p>
                                <p>Type : </p>
                                <p>Toilet type : </p>
                                <p>Compteur type : </p>
                                <p>Phone : </p>
                                <p>Loyer : </p>
                                <p>Status : </p>
                                <p>University : </p>
                                <p>Bathrooms : </p>
                                <p>Views : </p>
                                <p>Likes : </p>
                                <p>Description : </p>
                                <p>Equipement : </p>
                                <p>Modern : </p>
                                <p>Closet : </p>
                                <p>Kitchen : </p>
                                <p>Preview : </p>
                              </div>
                            </div>
                            {/* Modal footer */}
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button className="btn-sm bg-red-500 hover:bg-red-600 text-white" onClick={(e) => { e.stopPropagation(); setInfoModalOpen(false); }}>Cancel</button>
                            </div>
                          </div>
                        </div>
                      </ModalBlank>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 w-px">
        {/* Menu button */}
        <button className="btn bg-red-500 hover:bg-red-600 text-white"  aria-controls="danger-modal" onClick={(e) => { e.stopPropagation(); setDangerModalOpen(true); }}>
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                          <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                        </svg>
        </button>
        <ModalBlank id="danger-modal" modalOpen={dangerModalOpen} setModalOpen={setDangerModalOpen}>
                        <div className="p-5 flex space-x-4">
                          {/* Icon */}
                          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100">
                            <svg className="w-4 h-4 shrink-0 fill-current text-rose-500" viewBox="0 0 16 16">
                              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
                            </svg>
                          </div>
                          {/* Content */}
                          <div>
                            {/* Modal header */}
                            <div className="mb-2">
                              <div className="text-lg font-semibold text-slate-800">Delete 1 customer?</div>
                            </div>
                            {/* Modal content */}
                            <div className="text-sm mb-10">
                              <div className="space-y-2">
                                <p>Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.</p>
                              </div>
                            </div>
                            {/* Modal footer */}
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600" onClick={(e) => { e.stopPropagation(); setDangerModalOpen(false); }}>Cancel</button>
                              <button className="btn-sm bg-rose-500 hover:bg-rose-600 text-white">Yes, Delete it</button>
                            </div>
                          </div>
                        </div>
                      </ModalBlank>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        {/* Menu button */}
        <button className="btn bg-green-500 hover:bg-green-600 text-white" aria-controls="feedback-modal" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}>
        <svg className="w-4 h-4 fill-current text-white-500 shrink-0" viewBox="0 0 16 16">
                          <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                        </svg>
        </button>
        <ModalBasic id="feedback-modal" modalOpen={feedbackModalOpen} setModalOpen={setFeedbackModalOpen} title="Modify">
          {/* Modal content */}
          <div className="px-5 py-4">
            <div className="text-sm">
              <div className="font-medium text-slate-800 mb-3">Fill the next form 🙌</div>
            </div>
            <div className="space-y-3">
              <div>
              <label className="block text-sm font-medium mb-1" htmlFor="description"> Users <span className="text-rose-500">*</span></label>
                        <SelectInput
                            option={[
                            { value: "user1", label: "User1" },
                            { value: "user2", label: "User2" },
                            { value: "user3", label: "User3" },
                            ]}
                            onChange={(e) => {
                              setUser(e);
                            }}
                        />
              </div>
              <div>
              <AInput 
                      label="Title" 
                      type="text" 
                      id="title"
                      name="title"
                      onChange={(e) => {setTitre("title", e);}}
                      register={{...register("title")}}
                      valid={errors.title ? false : {}}
                    />
              </div>
              <div>
              <label className="block text-sm font-medium mb-1" htmlFor="description"> Type <span className="text-rose-500">*</span></label>
              <SelectInput
                            option={[
                            { value: "room", label: "Room" },
                            { value: "appart", label: "Appartement" },
                            { value: "home", label: "Home" },
                            { value: "studio", label: "Studio" },
                            ]}
                            onChange={(e) => {
                              setType(e);
                            }}
                        />
              </div>
              <div className="flex-1">
                        <label className="block text-sm font-medium mb-1" htmlFor="description"> Toilet type <span className="text-rose-500">*</span></label>
                        <SelectInput
                            option={[
                            { value: "modern", label: "Modern" },
                            { value: "traditional", label: "Traditional" },
                            { value: "noIdea", label: "No idea" },
                            ]}
                            onChange={(e) => {
                              setToiletType(e);
                            }}
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1" htmlFor="description"> Compteur type <span className="text-rose-500">*</span></label>
                        <SelectInput
                            option={[
                            { value: "Prepaid", label: "Prepaid" },
                            { value: "notPrepaid", label: "Not prepaid" },
                            ]}
                            onChange={(e) => {
                              setComputerType(e);
                            }}
                        />
                      </div>
              <div>
              <AInput 
                      label="Phone" 
                      type="text"
                      required
                      onChange={(e) => {setPhone("phone", e);}}
                      register={{...register("phone")}}
                      valid={errors.phone ? false : {}}
                    />
              </div>
              <div>
              <AInput 
                      label="Loyer" 
                      type="number"
                      required
                      onChange={(e) => {setLoyer("loyer", e);}}
                      register={{...register("loyer")}}
                      valid={errors.loyer ? false : {}}
                    /> 
              </div>
              <div className="flex-1">
                                <label className="block text-sm font-medium mb-1" htmlFor="description"> Status <span className="text-rose-500">*</span></label>
                                <SelectInput
                                    option={[
                                    { value: "new", label: "New" },
                                    { value: "occupé", label: "Occupé" },
                                    { value: "collocation", label: "collocation" },
                                    ]}
                                    onChange={(e) => {
                                      setStatus(e);
                                    }}
                                />
                              </div>
                              <div className="flex-1">
                                <label className="block text-sm font-medium mb-1" htmlFor="description"> University <span className="text-rose-500">*</span></label>
                                <SelectInput
                                    option={[
                                    { value: "uy2", label: "UY1" },
                                    { value: "uy1", label: "UY2" },
                                    { value: "ict-u", label: "ICT-U" },
                                    ]}
                                    onChange={(e) => {
                                      setUniversity(e);
                                    }}
                                />
                              </div>
              <div>
              <AInput 
                      label="Bathrooms" 
                      type="number" 
                      id="bathrooms"
                      name="bathrooms"
                      placeholder="0" 
                      required
                      onChange={(e) => {setBathrooms("bathrooms", e);}}
                      register={{...register("bathrooms")}}
                      valid={errors.bathrooms ? false : {}}
                    />
              </div>
              <div>
              <AInput 
                      label="Views" 
                      type="number" 
                      id="views"
                      name="views"
                      placeholder="0" 
                      required
                      onChange={(e) => {setViews("views", e);}}
                      register={{...register("views")}}
                      valid={errors.views ? false : {}}
                    />
              </div>
              <div>
              <AInput 
                      label="Likes" 
                      type="number" 
                      id="likes"
                      name="likes"
                      placeholder="0" 
                      required
                      onChange={(e) => {setLikes("likes", e);}}
                      register={{...register("likes")}}
                      valid={errors.likes ? false : {}}
                    />
              </div>
              <div className="flex-1">
                               <label className="block text-sm font-medium mb-1" htmlFor="description"> Description <span className="text-rose-500">*</span></label>
                               <textarea  id="description" className="form-textarea h-full w-full" rows="6" type="text-area" />
                             </div>
                             <div className="flex-1">
                                <label className="block text-sm font-medium mb-1" htmlFor="equipement"> Equipement <span className="text-rose-500">*</span></label>
                                <textarea  id="equipement" className="form-textarea h-full w-full" rows="6" type="text-area" />
                              </div>
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
              <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="assets"> Preview </label>
                      <FileUploader
                        id="assets"
                        multiple={true}
                        handleChange={handleChange}
                        name="file"
                      />
                      <p> {file ? `File name: ${file[0].name}`: "Aucun document ajouté !"} </p>
                    </div>
              
            </div>
          </div>
          {/* Modal footer */}
          <div className="px-5 py-4 border-t border-slate-200">
            <div className="flex flex-wrap justify-end space-x-2">
            <button 
                      onClick={notify}
                      type="submit" 
                      className="btn-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                      Submit
                    </button>
              <button className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(false); }}>Cancel</button>
            </div>
          </div>
        </ModalBasic>
      </td>
    </tr>
  );
}

export default CustomersTableItem;
