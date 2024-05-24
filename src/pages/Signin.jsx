import React from "react";

import AuthImage from "../images/image.png";
import AInput from "../components/Input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../slices/auth";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LogoBip from "../images/amphimill/logo.png";
import { showError } from "../components/Toasts";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  password: Yup.string()
    .required("Password is required")
    // .min(6, "Password must be at least 6 characters")
    // .max(40, "Password must not exceed 40 characters"),
});

export default function Signin() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useDispatch();

  const onFormSubmit = async (data) => {
    // console.log(data);
    dispatch(login(data))
      .unwrap()
      .then((data) => {
        // console.log("data");
        // console.log(data);
        // if (data?.user?.role?.name == "ADMIN") {
        //   showError("Verifier votre compte et recommencer.");
        // }
      })
      .catch(() => {});
  };

  const onErrors = (errors) => {
    console.error(errors);
    showError("Verifier tous les champs du formulaire et reessayer.");
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover"  src={AuthImage}  alt="" />
        {/* <img className="w-full h-full object-cover" src={LogoBip} alt="" /> */}
      </div>

      <div className="bg-white flex flex-col justify-center">
        <h2 className="text-4xl dark:text-white font-bold text-center mb-6">
          Welcome ✨
        </h2>
        <form
          onSubmit={handleSubmit(onFormSubmit, onErrors)}
          className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-400 p-8 px-8"
        >
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="username"
              >
                Identifiant
              </label>
              <input
                id="username"
                name="username"
                {...register("username")}
                className={`form-input w-full ${
                  errors.username ? "border-red-500" : ""
                }`}
              />
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errors.username?.message}
              </span>
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                {...register("password")}
                className={`form-input w-full ${
                  errors.password ? "border-red-500" : ""
                }`}
                type="password"
                autoComplete="on"
              />
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errors.password?.message}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="mr-1">
              {/* <Link
                className="text-sm underline hover:no-underline"
                to="/reset-password"
              >
                Forgot Password?
              </Link> */}
            </div>
            <button
              type="submit"
              className="btn bg-cyan-500 hover:bg-cyan-600 text-white ml-3"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
