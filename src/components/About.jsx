import React from "react";
import Picture from "../assets/profilepic.jpg";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaSass } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";

const About = () => {
  return (
    <div name="about" className="w-full h-full text-white bg-Blackish">
      <div className="flex flex-col-reverse justify-center items-center md:flex-row md:px-16 px-4 mx-auto h-screen">
        <div className="max-w-[1000px] px-8 mx-auto space-y-4">
          <p className="text-3xl font-bold text-center md:text-4xl lg:text-5xl text-DarkSkyBlue">About</p>
          <p className="mx-auto">I personally take this opportunity to join bootcamp of KodeGo to
            pursue my career in Web Development and also to excel my skills and
            creativity on Web Designing. Currently, Im focused on responsive web
            design applications.</p>
          <p className="text-1xl font-bold text-center md:text-2xl lg:text-2xl text-DarkSkyBlue">
            Programming Languages & Tools
          </p>
          <ul className="flex justify-center">
            <li className="fa-icons">
              <AiFillHtml5 />
            </li>
            <li className="fa-icons">
              <FaCss3Alt />
            </li>
            <li className="fa-icons">
              <BsFillBootstrapFill />
            </li>
            <li className="fa-icons">
              <FaSass />
            </li>
            <li className="fa-icons">
              <DiJavascript1 />
            </li>
            <li className="fa-icons">
              <FaReact />
            </li>
          </ul>
        </div>
        <div className="my-4">
          <img src={Picture} className="max-w-[200px] lg:max-w-[200px] md:max-w-[200px] sm:max-w-[200px]" alt="me" />
        </div>
      </div>
      {/* Flex Container */}
      {/* <div
        className="container flex flex-col-reverse md:flex-row
        items-center justify-center px-12 mx-auto space-y-0 md:space-y-12 h-full text-white bg-Blackish"
      > */}
      {/* Left Item */}
      {/* <div className="flex flex-col">
          <p className="text-4xl font-bold text-DarkSkyBlue  lg:text-5xl text-center">
            About
          </p>
          <p className="max-w-lg p-6 text-gray-400">
            I personally take this opportunity to join bootcamp of KodeGo to
            pursue my career in Web Development and also to excel my skills and
            creativity on Web Designing. Currently, Im focused on responsive web
            design applications.
          </p>

          <p className="text-2xl mb-6 md:text-3xl text-DarkSkyBlue lg:text-3xl text-center">
            Programming Languages & Tools
          </p> */}
      {/* Used Language */}
      {/* <ul className="flex shadow-md">
            <li className="fa-icons">
              <AiFillHtml5 size={45} />
            </li>
            <li className="fa-icons">
              <FaCss3Alt size={45} />
            </li>
            <li className="fa-icons">
              <BsFillBootstrapFill size={45} />
            </li>
            <li className="fa-icons">
              <FaSass size={50} />
            </li>
            <li className="fa-icons">
              <DiJavascript1 size={50} />
            </li>
            <li className="fa-icons">
              <FaReact size={40} />
            </li>
          </ul>
        </div> */}
      {/* Image */}
      {/* <div className="flex flex-col px-10">
          <img
            src={Picture}
            className="max-w-[200px] lg:max-w-[300px] rounded-full my-6"
            alt="Profile Pic"
            style={{ width: "300px" }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default About;
