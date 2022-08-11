import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-Blackish">
      {/* Container */}
      <div className="max-w-[1000px] md:px-20 mx-auto px-10 flex flex-col justify-center h-full">
        <p className="text-SkyBlue">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-200 hover:ml-[20px] duration-300">
          Patrick
        </h1>
        <h2 className="max-w-[600px] text-3xl sm:text-5xl font-semibold text-DarkSkyBlue hover:ml-[20px] duration-300">
          Aspiring Front End/Full Stack Developer
        </h2>
        <p className="py-4 max-w-[700px] text-gray-400">
          Welcome to my personal portfolio using React JS.
          <br /> I always walk through life as if I have something new to learn
          and I will.
        </p>
        <div>
          <button
            className="flex group border-2 px-4 py-2 my-2 items-center text-white hover:text-Blackish
           hover:bg-SkyBlue hover:border-SkyBlue hover:ml-[20px] duration-300"
          >
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
