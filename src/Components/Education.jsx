import React, { useEffect, useState } from 'react';
import educationData from '../Data/education.json';

const Education = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        setEducation(educationData.education);
    }, []);

    return (
        <section className="py-10 bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="py-16 px-8 bg-gray-900 border border-gray-800 rounded-3xl">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-12 md:max-w-4xl mx-auto text-center">
                            <span className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">Education</span>
                            <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight">My Educational Background</h2>
                        </div>
                        <div className="max-w-5xl mx-auto">
                            <div className="flex flex-wrap -m-5 mb-10">
                                {education.map((edu) => (
                                    <div key={edu.institution} className="w-full p-5">
                                        <div className="flex flex-wrap h-full bg-gray-800 overflow-hidden rounded-3xl">
                                            <div className="w-full md:w-1/2 flex bg-white justify-center items-center"> {/* Centering the logo */}
                                                <img 
                                                    className="max-w-full max-h-52 object-contain" // Maintain aspect ratio and set max height
                                                    src={edu.logo} 
                                                    alt={`${edu.institution} Logo`} 
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="md:max-w-lg p-10 h-full">
                                                    <div className="flex flex-col justify-between h-full">
                                                        <div className="flex-initial mb-8">
                                                            <h3 className="font-heading text-2xl text-white font-black">{edu.institution}</h3>
                                                            <p className="text-white">{edu.location}</p>
                                                            {edu.programs.map((program, index) => (
                                                                <div key={index} className="mt-4">
                                                                    <h4 className="text-white">{program.title}</h4>
                                                                    <p className="text-white">{program.gpa ? program.gpa : ""}</p>
                                                                    <p className="text-white">{program.duration}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
