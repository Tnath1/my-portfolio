
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import  {  useState } from "react";
import logo from "../assets/mylogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // Handle navigation with loading effect
  const handleNavigation = (path: string) => {
    setLoading(true); // Set loading to true

    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false); // Set loading to false
      navigate(path); // Navigate to the desired path
    }, 2000); // Adjust the timeout as needed
  };

  if (loading) {
    return <Loading />; // Show the loading component
  }
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className=" flex flex-shrink-0 items-center">
        <img
          onClick={() => handleNavigation("/")}
          className="mx-2 w-16 rounded-lg cursor-pointer"
          src={logo}
          alt="logo"
        />

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
