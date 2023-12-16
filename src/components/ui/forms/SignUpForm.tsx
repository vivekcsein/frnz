"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { MdCancel } from "react-icons/md";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { type Input, type Output } from "valibot";
import { SignUpSchema } from "../../../libs/validationSchema";
import { signupFormLayout } from "@/libs/layoutForm";
import LogInInput from "../inputs/LogInInput";

const SignUpForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Output<typeof SignUpSchema>>({
    resolver: valibotResolver(SignUpSchema),
    defaultValues: signupFormLayout.values,
  });

  const gotoHomepage = () => {
    router.push("/");
  };

  const onSubmit = async (values: Output<typeof SignUpSchema>) => {
    console.log(values);

    try {
      // const res = await fetch("/api/user", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     username: values.username,
      //     email: values.email,
      //     password: values.password,
      //   }),
      // });
      // if (res.ok) {
      //   router.push("/signin");
      // }
    } catch (error) {
      console.error("something happen wrong");
    }
  };

  return (
    <>
      <div className="box_shadow m-auto mt-3 w-[90%] md:w-3/5 flex flex-col md:flex-row relative">
        <div className=" w-full md:w-3/5 bg-bgc">
          <div className="pt-6 flex flex-col items-center gap-2">
            <h2 className="text-center text-2xl md:text-3xl font-bold">
              Sign up to Account
            </h2>
            <div className=" inline-block border-2 w-20 border-primary  mb-2  "></div>
          </div>
          <p className="text-textLight pb-2 text-center">
            register yourself in a new journey
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="signinForm">
            {signupFormLayout.inputFields.map((item) => {
              return (
                <LogInInput
                  key={item.id}
                  register={register}
                  error={errors}
                  inputForm={item}
                />
              );
            })}
            <div className="flex_center">
              <input
                type="submit"
                value="Sign In"
                className=" border-primary  px-10 py-2  font-semibold  mt-4 mb-8 button_submit_variant1 "
              />
            </div>
          </form>
        </div>
        <div className="w-full md:w-2/5 text-textLight rounded-tr-2xl rounded-br-2xl py-36 px-12 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-3 text-textLight">
            Hello Friends
          </h2>
          <div className="border-2 w-10 border-textLight inline-block mb-2"></div>{" "}
          <p className="mb-2 text-textLight">Already Have an Account?</p>
          <a
            href="/signin"
            className="px-8 py-1 text-sm inline-block font-semibold  mt-4 sm:text-xxl sm:px-12 sm:py-2 button_submit_variant2"
          >
            Sign In
          </a>
        </div>
        <MdCancel
          id="SignIn_cancelform"
          className="absolute text-4xl right-3 top-3 text-textLight cursor-pointer "
          onClick={gotoHomepage}
        />
      </div>
    </>
  );
};

export default SignUpForm;
