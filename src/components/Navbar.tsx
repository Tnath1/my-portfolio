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
        <img className="mx-2 w-16 rounded-lg" src={logo} alt="logo" />
        {/* <h2 className="">AU</h2> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <FaLinkedin className="cursor-pointer" />
        <FaGithub className="cursor-pointer" />
        <FaXTwitter className="cursor-pointer" />
        <FaInstagram className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
