import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "./../index";
import { FaXTwitter } from "react-icons/fa6";

type Contact = {
  address: string;
  phoneNo: string;
  email: string;
};

const Contact = () => {
  return (
    <div className=" max-w-[1200px] mx-auto border-t  border-neutral-800 pb-8">
      <h2 className="my-10 text-center text-3xl uppercase"> Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4"> {CONTACT.address} </p>
        <p className="my-4"> {CONTACT.phoneNo} </p>
        <p className="border-b border-neutral-800 pb-10 "> {CONTACT.email}</p>
      </div>
      <footer className="flex justify-between p-8 items-center">
        <p> Arome Ukpoju&copy;2024</p>
        <div className="flex gap-4">
          <FaLinkedin className="cursor-pointer" />
          <FaGithub className="cursor-pointer" />
          <FaXTwitter className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </footer>
    </div>
  );
};

export default Contact;
