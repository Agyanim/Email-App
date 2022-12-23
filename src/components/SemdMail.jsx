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
    <div className="w-[100%] h-[100vh] flex justify-center items-center ">
      <div className=" flex items-center justify-center lg:w-[40vw] lg:h-[100%]  h-[100vh]">
        <form
          ref={form}
          method="post"
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col  items-center h-[100vh] w-[100vw] [&_input]:w-[80vw]  lg:h-[90%] lg:[&_input]:w-[25vw]  bg-blue-500 lg:w-[30vw] gap-2 [&_input]:p-2 [&_input]:rounded-sm lg:rounded-md
          xl:w-[25vw]  xl:[&_input]:w-[20vw] 
          "
        >
          <h1 className="my-[40px] text-white shadow-lg shadow-black font-bold lg:text-[1.2rem] text-[1rem] uppercase p-2 md:text-[2rem]">
            Subscription Form
          </h1>

          <input
            className=""
            type="text"
            placeholder="Full Name"
            name="user_name"
            {...register("user_name")}
          />
          <h1 className="text-white translate-x-[-65px] translate-y-[-6px] md:translate-x-[-14rem] lg:translate-x-[-2.5rem] xl:translate-x-[-3.5rem]">
            {errors?.user_name?.message}
          </h1>
          <input
          className=""
            type="email"
            name="user_email"
            placeholder="Enter your email"
            {...register("user_email")}
          />
          <h1 className="text-white translate-x-[-50px] translate-y-[-6px] md:translate-x-[-13rem] lg:translate-x-[-2rem] xl:translate-x-[-3rem]">{errors?.user_email?.message}</h1>
          <input
            {...register("contact")}
            type="text"
            placeholder="Phone number"
            name="contact"
          />
          <h1 className="text-white translate-x-[-45px] translate-y-[-6px] md:translate-x-[-13rem] lg:translate-x-[-2rem] xl:translate-x-[-3rem]">{errors?.contact?.message}</h1>
          <textarea
            className="w-[80vw] lg:w-[25vw]  xl:w-[20vw] p-2 rounded-sm  "
            name="message"
            id=""
            rows="5"
            {...register("message")}
          ></textarea>
          <h1 className="text-white translate-x-[-65px] translate-y-[-6px] md:translate-x-[-14rem] lg:translate-x-[-2.5rem] xl:translate-x-[-3.5rem]">{errors?.message?.message}</h1>
          <button className="bg-white px-12 py-2 text-blue-500 font-bold rounded-lg text-lg mt-4 hover:bg-blue-900 hover:text-white transition-all ">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default SemdMail;
