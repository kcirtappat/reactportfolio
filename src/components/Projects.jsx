import React from "react";
import MiniProject from "../assets/miniproject.png";
import Portfolio1 from "../assets/portfolio2.png";
import Proj2 from "../assets/project2.png";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen bg-Blackish">
      <div className="max-w-[1000px] mx-auto px-20 flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold text-DarkSkyBlue pb-4 lg:text-5xl">
            Projects
          </p>
          <p className="text-gray-400">
            This are the examples of projects with other contributors
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${MiniProject})` }}
            className="group container rounded-md justify-center items-center mx-auto content-proj"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 pt-9 text-center">
              <span className="text-3xl font-bold text-Blackish">
                Mini Project
              </span>
              <div className="pt-8">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-Blackish font-bold text-lg hover:bg-black hover:text-white">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Portfolio1})` }}
            className="group container rounded-md justify-center items-center mx-auto content-proj"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 pt-7 text-center">
              <span className="text-3xl font-bold text-Blackish">
                Personal
                <br /> Portfolio
              </span>
              <div className="pt-1">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-Blackish font-bold text-lg hover:bg-black hover:text-white">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Proj2})` }}
            className="group container rounded-md justify-center items-center mx-auto content-proj"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 pt-9 text-center">
              <span className="text-3xl font-bold text-Blackish">
                Project 2
              </span>
              <div className="pt-8">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-Blackish font-bold text-lg hover:bg-black hover:text-white">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
