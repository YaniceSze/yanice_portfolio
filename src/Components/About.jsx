import React from "react";
import formalImage from '../assets/Formal.png'; // Ensure this path is correct

const About = () => {
    return (
        <section className="pt-10 pb-20 bg-gray-50 dark:bg-gray-900 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                            Hey 👋 I am <br className="block sm:hidden" /> <br />
                            <span className="text-yellow-400 dark:text-yellow-300">Santosh Bohara</span>
                        </h2>

                        <p className="max-w-lg mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                            Experienced Software QA Engineer with 7+ years, specializing in test automation for both web and mobile applications. Demonstrated expertise in building robust automation frameworks that have increased test coverage by up to 90%, significantly improving software quality and reducing release cycles. 
                        </p>

                        <p className="max-w-lg mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Adept at leading QA teams, optimizing testing processes, and delivering measurable results through enhanced automation. Seeking to leverage my expertise in a challenging role to drive quality initiatives and deliver high-impact software solutions.
                        </p>

                        <p className="mt-8 text-xl text-gray-600 dark:text-gray-300">
                            <span className="relative inline-block">
                                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-700"></span>
                                <span className="relative font-semibold">Have a question?</span>
                            </span>
                            <br className="block sm:hidden" />
                            Ask me on{" "}
                            <a
                                href="https://www.linkedin.com/in/santosh-bohara-4b04a0140/"
                                title=""
                                className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                            >
                                LinkedIn
                            </a>
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            className="absolute inset-x-0 bottom-0 -translate-x-1/2 left-1/2"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                            alt=""
                        />
                        <img
                            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                            src={formalImage}
                            alt="Santosh Bohara"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
