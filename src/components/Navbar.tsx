
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
    setLoading(true); 
    setTimeout(() => {
      setLoading(false); 
      navigate(path); 
    }, 2000); 
  };

  if (loading) {
    return <Loading />; 
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
