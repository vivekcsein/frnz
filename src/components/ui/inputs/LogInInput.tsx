"use client";
import React, { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import "../../../styles/ui/forms/LogInInput.scss";
import { FaRegEnvelope, FaUser, FaRegUser, FaSearch } from "react-icons/fa";
import {
  MdLockOutline,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from "react-icons/md";

type loginOptions = {
  email?: string | undefined;
  password?: string | undefined;
  fullname?: string | undefined;
  username?: string | undefined;
  confirmPassword?: string | undefined;
  search?: string | undefined;
};

type register = UseFormRegister<loginOptions>;
type FieldErr = FieldErrors<loginOptions>;

interface LogInInput {
  register: register;
  error: FieldErr;
  inputForm: {
    id: number | string;
    type: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    variant?: number;
  };
}
const LogInInput = ({
  register,
  error,
  inputForm: { name, type, placeholder, required = false },
}: LogInInput) => {
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const InputElement = (name: string) => {
    switch (name.toString()) {
      case "email":
        return (
          <div className="inputField justify-start">
            <div className="absolute top-12">
              <p className="text-sm">{error.email?.message}</p>
            </div>
            <FaRegEnvelope className=" md-icon  " />
            <input
              {...register("email", { required: required })}
              type={type}
              name={name}
              placeholder={placeholder ? placeholder : "Enter Your Email"}
            />
          </div>
        );
      case "password":
        return (
          <div className="inputField">
            <div className="absolute top-12">
              <p className="text-sm">{error.password?.message}</p>
            </div>
            <MdLockOutline className=" md-icon " />
            <input
              {...register("password", { required: required })}
              type={passwordType}
              name={name}
              placeholder={placeholder ? placeholder : "Enter Your Password"}
            />
            <div
              className={`passwordIcon`}
              onClick={(e) => {
                togglePassword();
              }}
            >
              {passwordType === "password" ? (
                <MdOutlineVisibility />
              ) : (
                <MdOutlineVisibilityOff />
              )}
            </div>
          </div>
        );
      case "confirmPassword":
        return (
          <div className="inputField">
            <div className="absolute top-12">
              <p className="text-sm">{error.confirmPassword?.message}</p>
            </div>
            <MdLockOutline className=" md-icon " />
            <input
              {...register("confirmPassword", { required: required })}
              type={passwordType}
              name={name}
              placeholder={placeholder ? placeholder : "Enter Your Password"}
            />
            <div
              className={`passwordIcon`}
              onClick={(e) => {
                togglePassword();
              }}
            >
              {passwordType === "password" ? (
                <MdOutlineVisibility />
              ) : (
                <MdOutlineVisibilityOff />
              )}
            </div>
          </div>
        );

      case "username":
        return (
          <div className="inputField">
            <div className="absolute top-12">
              <p className="text-sm">{error.username?.message}</p>
            </div>
            <FaUser className=" md-icon " />
            <input
              {...register("username", { required: required })}
              type={type}
              name={name}
              placeholder={placeholder ? placeholder : "Enter Your Username"}
            />
          </div>
        );

      case "fullname":
        return (
          <div className="inputField">
            <div className="absolute top-12">
              <p className="text-sm">{error.fullname?.message}</p>
            </div>
            <FaRegUser className=" md-icon" />
            <input
              {...register("fullname", { required: required })}
              type={type}
              name={name}
              placeholder={placeholder ? placeholder : "Enter Your Fullname"}
            />
          </div>
        );

      default:
        return (
          <div className="inputField">
            <div className="absolute top-12">
              <p className="text-sm">{error.search?.message}</p>
            </div>
            <FaSearch className=" md-icon " />
            <input
              {...register("search", { required: required })}
              type={type}
              name={name}
              placeholder={placeholder ? placeholder : "search here..."}
            />
          </div>
        );
    }
  };

  return <div className="flex_center">{InputElement(name)}</div>;
};

export default LogInInput;
