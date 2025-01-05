import React from "react";
import formalImage from '../../assets/Formal_Image.png'; // Ensure this path is correct

const About = () => {
    return (
        <section className="pt-10 pb-10  dark:bg-gray-900 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto text-left sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                            Hey 👋 I am <br className="block sm:hidden" /> <br />
                            <span className="text-yellow-400 dark:text-yellow-300">Yanice Sze</span>
                        </h2>

                        <p className="max-w-lg font-bold mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                            Front-end Software Developer with hands-on experiences in designing, developing, and testing software applications. 
                        </p>

                        <ul className="text-gray-300 mt-8 list-disc list-inside">
                            <li className="ml-2">Analytical and detail-oriented front-end software developer passionate about creating user-friendly software applications.</li>
                            <li className="ml-2">Proficient in JavaScript and React, with a strong foundation in agile methodologies and version control.</li>
                            <li className="ml-2">Demonstrated ability to solve complex software problems and deliver innovative solutions based on client needs.</li>
                            <li className="ml-2">Actively participate in open source projects and IT communities in order to keep up with industry advancements.</li>
                        </ul>

                        <p className="mt-8 text-xl text-gray-600 dark:text-gray-300">
                            <span className="relative inline-block">
                                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-700"></span>
                                <span className="relative font-semibold">Have a question?</span>
                            </span>
                            <br/>
                            Ask me on{" "}
                            <a
                                href="https://www.linkedin.com/in/yanice-sze-959013146"
                                target="_blank"
                                title=""
                                className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                            >
                                LinkedIn
                            </a>
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            className="absolute inset-x-0 bottom-[-10] -translate-x-1/2 left-1/2 "
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                            alt=""
                        />
                        <img
                            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                            src={formalImage}
                            alt="Yanice Sze"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
