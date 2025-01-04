import React, { useEffect, useState } from 'react';
import educationData from '../../Data/education.json';

const Education = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        setEducation(educationData.education);
    }, []);

    return (
        <section className="relative bg-gray-800 overflow-hidden">
            <div className="container px-4 mx-auto">
                {/* Title Section */}
                <div className="text-center py-8">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl text-white font-extrabold leading-tight">
                        My Academics
                    </h1>
                </div>

                {education.map((edu) => (
                    <div
                        key={edu.institution}
                        className="flex flex-col lg:flex-row gap-12 justify-between py-16"
                    >
                        {/* Logo Section */}
                        <div className="w-full bg-white lg:w-1/2 flex justify-center items-center">
                            <div className="max-w-md bg-white lg:max-w-lg">
                                <img
                                    className="shadow-md rounded-2xl bg-white max-w-full max-h-96 object-contain"
                                    src={edu.logo}
                                    alt={`${edu.institution} Logo`}
                                />
                            </div>
                        </div>

                        {/* Academic Details Section */}
                        <div className="w-full text-left bg-gray-700 rounded-lg lg:w-1/2 p-6">
                            <div className="max-w-md lg:max-w-xl mx-auto">
                                <div className="mb-12">
                                    <h1 className="text-3xl text-amber-500 md:text-4xl xl:text-5xl text-rhino-700 font-bold mb-3 leading-none">
                                        {edu.institution}
                                    </h1>
                                    <p className="text-rhino-300 text-lg font-normal mb-6">
                                        {edu.location}
                                    </p>
                                    {edu.programs.map((program, index) => (
                                        <div key={index} className="mb-6">
                                            <h2 className="text-2xl text-rhino-700 font-semibold mb-1">
                                                {program.title}
                                            </h2>
                                            <p className="text-rhino-300 text-lg mb-1">
                                                {program.duration}
                                            </p>
                                            {program.gpa && (
                                                <p className="text-rhino-300 text-lg">{program.gpa}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <hr/>
                                <div>
                                    <h3 className="text-lg font-semibold mt-10 mb-2">
                                        Description:
                                    </h3>
                                    <ul className="list-disc list-inside text-rhino-300 text-lg">
                                        {edu.description.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;