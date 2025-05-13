import React from "react";
import LandingNavbar from "../Components/LandingNavbar";
import LandingFooter from "../Components/LandingFooter";
import { IoIosArrowForward } from "react-icons/io";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});


const LoginPage = () => {
  const navigate =useNavigate()
const handleLogin = () => {
  //  add login logic here
  // navigate("/student");
  navigate("/instructor");
};
  return (
    <div>
      <LandingNavbar />
      <div>
        <div className="bg-[url(./src/assets/Images/aboutusBg.png)] pt-25 pb-15 pl-45">
          <div className="text-4xl font-bold">Login</div>
          <div className="font-semibold text-gray-400 flex space-x-2 items-center">
            <a href="/">Home</a> <IoIosArrowForward />{" "}
            <p className="text-purple">Login</p>{" "}
          </div>
        </div>
        <div className="w-full space-y-6 my-auto">
          <div className=" mx-auto w-[40%]">
            <p className=" text-3xl font-bold">Welcome back!</p>
            <p className=" text-lg font-semibold text-gray-400">
              Hey there! Ready to log in? Just enter your email and password
              below and you'll be back in action in no time. Let's go!
            </p>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Form submitted:", values);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className=" mx-auto w-[40%] mb-14 ">
                <div className="mb-14">
                  <label className="font-semibold ">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="E-mail "
                    className="w-full p-2 border border-gray-300 rounded-lg  placeholder-gray-400 "
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-14">
                  <label className="font-semibold ">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    name="password"
                    placeholder="Password"
                    className="w-full p-2 border border-gray-300 rounded-lg  placeholder-gray-400 "
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex item-center justify-end">
                  <a href="/forgotPassword" className="text-purple underline">
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleLogin}
                  className=" w-full shadow-lg shadow-blue hover:shadow-none flex items-center justify-center rounded-full bg-yellow   mt-10 w-fit py-3 font-semibold  hover:bg-purple text-black hover:text-white  transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-100 "
                >
                  {isSubmitting ? "Submitting..." : "Sign In"}
                  <p className="ml-4">
                    <FaArrowRightLong />
                  </p>
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex justify-center mb-10 ">
          <p className="font-semibold text-gray-400 ">Don't have an account?</p>
          <a
            href="/studentSignup"
            className="pl-1 underline text-purple hover:text-yellow"
          >
            Sign Up
          </a>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default LoginPage;
