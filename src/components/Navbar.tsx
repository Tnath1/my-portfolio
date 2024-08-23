// import React from "react";
import logo from "../assets/mylogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className=" flex flex-shrink-0 items-center">
        <img className="mx-2 w-16" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <FaLinkedin />
        <FaGithub />
        <FaXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
