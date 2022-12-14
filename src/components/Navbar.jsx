import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-Blackish text-white">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="links hover:text-SkyBlue">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="links hover:text-SkyBlue">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="links hover:text-SkyBlue">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="links hover:text-SkyBlue">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger-menu */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-Grayish"
        }
      >
        <li className="mob-link py-6 text-4xl hover:text-SkyBlue">Home</li>
        <li className="mob-link py-6 text-4xl hover:text-SkyBlue">About</li>
        <li className="mob-link py-6 text-4xl hover:text-SkyBlue">Projects</li>
        <li className="mob-link py-6 text-4xl hover:text-SkyBlue">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="social-icons w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-gray-900">
            <a className="flex justify-between items-center w-full" href="/">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="social-icons w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full" href="/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="social-icons w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-emerald-600">
            <a className="flex justify-between items-center w-full" href="/">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="social-icons w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-stone-600">
            <a className="flex justify-between items-center w-full" href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
