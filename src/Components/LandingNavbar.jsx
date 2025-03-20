import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";
const LandingNavbar = () => {
  return (
    <div className="bg-white shadow-lg shadow-gray-300  flex justify-between items-center px-4  sticky top-0 ">
      <a href="/" className="flex items-center">
        {/* <img src="./src/assets/Images/logo.png" alt='logo'/> */}
        <p className="text-purple text-7xl">
          <FaGraduationCap />
        </p>
        <div className="pl-2">
          <p className="text-4xl font-semibold">LearnLab</p>
          <p className="text-xs font-semibold">GROW YOUR SKILLS</p>
        </div>
      </a>
      <div className="flex space-x-6 font-semibold">
        <Link to="/" className="hover:text-purple hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:text-purple hover:underline">
          About
        </Link>
        <Link to="/contactUs" className="hover:text-purple hover:underline">
          Contact Us
        </Link>
      </div>
      <div className="flex space-x-6 font-semibold">
        <a
          href="/login"
          className=" border-2 border-yellow bg-yellow hover:bg-purple hover:border-purple hover:text-white   px-6 py-3 rounded-full transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-100"
        >
          Log in
        </a>
        <a
          href="/signUp"
          className="border-2 border-yellow hover:bg-purple v hover:border-purple hover:text-white   px-5 py-3 rounded-full transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-100"
        >
          Sign up
        </a>
      </div>
    </div>
  );
};

export default LandingNavbar;
