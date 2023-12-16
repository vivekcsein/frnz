"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import LogInInput from "../inputs/LogInInput";
import { subscribeNowSchema } from "../../../libs/validationSchema";
import { type Output } from "valibot";
import { subscribeNowLayout } from "../../../libs/layoutForm";
type props = {
  link: links;
};
const SubscribeForm = ({ link: { label } }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Output<typeof subscribeNowSchema>>({
    resolver: valibotResolver(subscribeNowSchema),
    defaultValues: subscribeNowLayout.values,
  });

  const onSubmit = async (values: Output<typeof subscribeNowSchema>) => {
    console.log(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="SubscribeNow">
        <p className="text-lg md:text-left w-full">
          subscribe for more updates
        </p>
        {subscribeNowLayout.inputFields.map((item) => {
          return (
            <LogInInput
              key={item.id}
              register={register}
              error={errors}
              inputForm={item}
            />
          );
        })}
        <div className="flex_center SubscribeNow_btn">
          <input
            type="submit"
            value={label}
            className=""
            // className=" border-primary  px-10 py-2  font-semibold  mt-8 mb-8 button_submit_variant1 "
          />
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </div>
      </form>
    </>
  );
};

export default SubscribeForm;

{
  /* <input
          type="text/email"
          name=""
          placeholder="Your Email Adress"
          id="subscribeNowInput"
        /> */
}

{
  /* <button>
          {label}
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </button> */
}
