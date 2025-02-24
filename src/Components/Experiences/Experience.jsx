import React, { useState } from "react";
import experienceData from '../../Data/experience.json'; // Update the path as needed
import experienceDescription from '../../Data/exp-description.json'; // Update the path as needed

function Experience() {
  const [isOpen, setIsOpen] = useState(true); // Default to true for the first item
  const [selectedExperience, setSelectedExperience] = useState(0); // Set default selected experience to the first one

  const toggleDetails = (index) => {
    if (selectedExperience === index) {
      setIsOpen(!isOpen); // Toggle if the same experience is clicked
    } else {
      setIsOpen(true); // Open the clicked experience
      setSelectedExperience(index);
    }
  };

  return (
    <>
      {experienceData.map((experience, index) => {
        // Access the correct experience description
        const experienceDetail = experienceDescription[index]; // Adjusted to access the correct index

        return (
          <div className="w-full p-3 text-left" key={index}>
            <div className="p-10 bg-slate-800 border border-gray-800 rounded-3xl">
              <div className="flex flex-wrap items-center -m-4">
                <div className="w-full md:w-1/2 p-4">
                  <h2 className="font-heading mb-2 text-xl md:text-3xl text-white font-black tracking-tight">{experience.title}</h2>
                  <div className="flex items-center">
                      <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M5 2.5C3.61929 2.5 2.5 3.61929 2.5 5V15C2.5 16.3807 3.61929 17.5 5 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15V5C17.5 3.61929 16.3807 2.5 15 2.5H5ZM7 6.5H9V8.5H7V6.5ZM11 6.5H13V8.5H11V6.5ZM7 10.5H9V12.5H7V10.5ZM11 10.5H13V12.5H11V10.5Z" fill="#374151"/>
                      </svg>
                        <p className="text-gray-500 text-sm md:text-base font-bold">{experience.company}</p>
                    </div>
                  <div className="flex flex-wrap -m-3">
                    <div className="flex flex-wrap items-center w-auto p-3">
                      <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99935 1.66666C5.40768 1.66666 1.66602 5.40832 1.66602 9.99999C1.66602 14.5917 5.40768 18.3333 9.99935 18.3333C14.591 18.3333 18.3327 14.5917 18.3327 9.99999C18.3327 5.40832 14.591 1.66666 9.99935 1.66666ZM13.6243 12.975C13.5077 13.175 13.2993 13.2833 13.0827 13.2833C12.9743 13.2833 12.866 13.2583 12.766 13.1917L10.1827 11.65C9.54102 11.2667 9.06602 10.425 9.06602 9.68332V6.26666C9.06602 5.92499 9.34935 5.64166 9.69102 5.64166C10.0327 5.64166 10.316 5.92499 10.316 6.26666V9.68332C10.316 9.98332 10.566 10.425 10.8243 10.575L13.4077 12.1167C13.7077 12.2917 13.8077 12.675 13.6243 12.975Z" fill="#374151"></path>
                      </svg>
                      <p className="text-gray-500 text-sm md:text-base font-bold">{experience.employmentType}</p>
                    </div>
                    <div className="flex flex-wrap items-center w-auto p-3">
                      <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1829 7.04168C16.3079 3.19168 12.9496 1.45834 9.99959 1.45834C9.99959 1.45834 9.99959 1.45834 9.99126 1.45834C7.04959 1.45834 3.68292 3.18334 2.80792 7.03334C1.83292 11.3333 4.46626 14.975 6.84959 17.2667C7.73292 18.1167 8.86626 18.5417 9.99959 18.5417C11.1329 18.5417 12.2663 18.1167 13.1413 17.2667C15.5246 14.975 18.1579 11.3417 17.1829 7.04168ZM9.99959 11.2167C8.54959 11.2167 7.37459 10.0417 7.37459 8.59168C7.37459 7.14168 8.54959 5.96668 9.99959 5.96668C11.4496 5.96668 12.6246 7.14168 12.6246 8.59168C12.6246 10.0417 11.4496 11.2167 9.99959 11.2167Z" fill="#374151"></path>
                      </svg>
                      <p className="text-gray-500 text-sm md:text-base font-bold">{experience.location}</p>
                    </div>
                    <div className="flex flex-wrap items-center w-auto p-3">
                      <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18.182c-4.49 0-8.182-3.692-8.182-8.182S5.51 1.818 10 1.818 18.182 5.51 18.182 10 14.49 18.182 10 18.182zm-.818-12.727h1.636V10H9.091V8.455zm.818 10.909c-.818 0-1.636-.364-2.182-1.091l1.636-1.636c.364.364.818.818 1.273 1.091.455.273 1.091.818 1.818.818.818 0 1.636-.364 2.182-1.091l-1.636-1.636C11.818 13.636 11.091 14 10 14z" fill="#374151"></path>
                      </svg>
                      <p className="text-gray-500 text-sm md:text-base font-bold">{experience.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="flex flex-wrap md:justify-end -m-2">
                    <div className="w-full md:w-auto p-2">
                      <button 
                        onClick={() => toggleDetails(index)} 
                        className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-gray-700 focus:ring-4 focus:ring-gray-600 rounded-full"
                      >
                        {isOpen && selectedExperience === index ? "Hide Details" : "See Details"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {isOpen && selectedExperience === index && (
                <div className="mt-4 bg-gray-900 p-6 rounded-3xl shadow-lg border border-gray-900">
                  <h3 className="text-white font-bold text-base md:text-xl mb-2">Description:</h3>
                  <ul className="text-gray-300 text-sm md:text-base list-disc list-inside">
                    {experienceDetail?.responsibilities.map((item, idx) => (
                      <li key={idx} className="ml-2">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Experience;
