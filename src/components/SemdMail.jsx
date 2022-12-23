import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import sendMail from "../utils/sendMail";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SemdMail = () => {
  const form = useRef();
  const submitHandler = () => {
    sendMail(form);
  };

  const validationShema = yup.object().shape({
    user_name: yup.string().required("Name cannot be empty"),
    user_email: yup.string().email().required("email field cannot be empty"),
    contact: yup.string().required("please add you contact number"),
    message: yup.string(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    criteriaMode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      user_name: "",
      user_email: "",
      contact: "",
      message: "",
    },
    resolver: yupResolver(validationShema),
  });

  return (
    <div className="w-[100%] h-[100vh] flex justify-center">
      <div className=" flex items-center justify-center lg:w-[40vw] h-[100vh]">
        <form
          ref={form}
          method="post"
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col  items-center h-[100vh] lg:[&_input]:w-[25vw] [&_input]:w-[80vw] bg-blue-500 w-[100vw] lg:w-[30vw] gap-2 [&_input]:p-2 [&_input]:rounded-sm rounded-md"
        >
          <h1 className="mt-[20px] text-white shadow-lg shadow-black font-bold lg:text-[1.5rem] text-[1rem] uppercase p-2">
            Subscription Form
          </h1>
          <input
            className="mt-[20px]"
            type="text"
            placeholder="Full Name"
            name="user_name"
            {...register("user_name")}
          />
          <h1>{errors?.user_name?.message}</h1>
          <input
          
            type="email"
            name="user_email"
            placeholder="Enter your email"
            {...register("user_email")}
          />
          <h1>{errors?.user_email?.message}</h1>
          <input
            {...register("contact")}
            type="text"
            placeholder="Phone number"
            name="contact"
          />
          <h1>{errors?.contact?.message}</h1>
          <textarea
            className="lg:w-[25vw] w-[80vw] p-2 rounded-sm"
            name="message"
            id=""
            rows="5"
            {...register("message")}
          ></textarea>
          <h1>{errors?.message?.message}</h1>
          <button className="bg-white px-12 py-2 text-blue-500 font-bold rounded-lg text-lg mt-4 hover:bg-blue-900 hover:text-white transition-all ">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default SemdMail;
