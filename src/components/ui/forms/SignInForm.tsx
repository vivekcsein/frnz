"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import LogInInput from "../inputs/LogInInput";
import { SignInSchema } from "../../../libs/validationSchema";
import { type Output } from "valibot";
import { signinFormLayout } from "../../../libs/layoutForm";
import "../../../styles/ui/forms/signinform.scss";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const SignInForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Output<typeof SignInSchema>>({
    resolver: valibotResolver(SignInSchema),
    defaultValues: signinFormLayout.values,
  });

  const gotoHomepage = () => {
    router.push("/");
  };

  const onSubmit = async (values: Output<typeof SignInSchema>) => {
    const signIndata = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (signIndata?.error) {
      if (signIndata?.error === "Incorrect Password") {
        setError("password", {
          type: "custom",
          message: signIndata.error,
        });
      } else {
        setError("email", {
          type: "custom",
          message: signIndata.error,
        });
      }
    } else {
      router.refresh();
      router.push("/user");
    }
  };

  return (
    <div className="box_shadow m-auto mt-20 w-[90%] md:w-3/5 flex flex-col md:flex-row relative">
      <div className=" w-full md:w-3/5 bg-bgc">
        <div className="pt-10 flex flex-col items-center gap-2">
          <h2 className="text-center text-2xl md:text-3xl font-bold">
            Sign in to Account
          </h2>
          <div className=" inline-block border-2 w-20 border-primary  mb-2  "></div>
        </div>
        <div className="signin-social">
          <div className="flex justify-center my-2 ">
            <a
              href="#"
              className="border-2 border-textLight rounded-full p-3 mx-1 hover:bg-primary hover:text-textLight"
            >
              <FaFacebookF className="text-sm" />
            </a>
            <a
              href="#"
              className="border-2 border-textLight rounded-full p-3 mx-1  hover:bg-primary hover:text-textLight"
            >
              <FaGoogle className="text-sm" />
            </a>
            <a
              href="#"
              className="border-2 border-textLight rounded-full p-3 mx-1  hover:bg-primary hover:text-textLight"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
          </div>
        </div>
        <p className="text-textLight pb-2 text-center">
          use your email account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="signinForm">
          {signinFormLayout.inputFields.map((item) => {
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
              className=" border-primary  px-10 py-2  font-semibold  mt-8 mb-8 button_submit_variant1 "
            />
          </div>
        </form>
      </div>
      <div className="w-full md:w-2/5 text-textLight rounded-tr-2xl rounded-br-2xl py-36 px-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-3 text-textLight">
          Hello Friends
        </h2>
        <div className="border-2 w-10 border-textLight inline-block mb-2"></div>{" "}
        <p className="mb-2 text-textLight">
          Lets connect together on same journey{" "}
        </p>{" "}
        <a
          href="/signup"
          className="px-8 py-1 text-sm inline-block font-semibold  mt-4 sm:text-xxl sm:px-12 sm:py-2 button_submit_variant2"
        >
          Sign Up
        </a>
      </div>
      <MdCancel
        id="SignIn_cancelform"
        className="absolute text-3xl right-3  text-textLight hover:text-bgc cursor-pointer "
        onClick={gotoHomepage}
      />
    </div>
  );
};

export default SignInForm;