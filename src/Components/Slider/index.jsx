import React, { useState } from "react";
import Experience from "../Experiences"; 
import Education from "../Education";
import Projects from "../Projects";

const SliderWithCenteredNav = () => {
  const [activePage, setActivePage] = useState(0); // 0: Experience, 1: Education, 2: Projects
  const pages = [<Experience />, <Education />, <Projects />];

  return (
    <div className="w-full flex flex-col h-full bg-gray-900">
      {/* Centered Navbar */}
      <nav className="flex items-center justify-center py-4 bg-gray-900 text-white">
        <ul className="flex space-x-12 mx-auto  py-4 px-4 md:px-40">
          {["Experience", "Education", "Projects"].map((label, index) => (
            <li key={index}>
              <a
                className={`text-coolGray-500 hover:text-orange-500 text-white text-xl lg:text-5xl text-bold hover:underline font-sans md:text-3xl ${
                  activePage === index ? "" : "text-orange-500"
                }`}
                onClick={() => setActivePage(index)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Slider Content */}
      <div className="relative overflow-hidden flex-grow h-full">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${activePage * 100}%)` }}
        >
          {pages.map((Page, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-screen h-full flex items-center justify-center bg-gray-900 shadow-lg"
            >
              {Page}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderWithCenteredNav;