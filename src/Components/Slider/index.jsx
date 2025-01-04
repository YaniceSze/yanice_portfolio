import React, { useState, useCallback, useMemo, useTransition, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import Experience from "../Experiences";
import Education from "../Education";
import Projects from "../Projects";

const SliderWithInteractiveNav = () => {
  const [activePage, setActivePage] = useState(0);
  const [isPending, startTransition] = useTransition();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  const pages = useMemo(
    () => [
      { label: "Experience", component: <Experience /> },
      { label: "Education", component: <Education /> },
      { label: "Projects", component: <Projects /> },
    ],
    []
  );

  const handlePageClick = useCallback((index) => {
    startTransition(() => {
      setActivePage(index);
    });
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={sectionRef} className="w-full h-full flex flex-col bg-gray-700">
      {/* Centered Navbar */}
      <motion.nav
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="flex items-center justify-center py-4 bg-gray-700 text-white"
      >
        <ul className="flex overflow-x-auto space-x-4 md:space-x-12 px-4">
          {pages.map((page, index) => (
            <li key={index} className="flex-shrink-0">
              <button
                className={`text-base md:text-2xl font-semibold ${
                  activePage === index ? "text-orange-500 underline" : "text-coolGray-500" /* active nav button */
                }`}
                onClick={() => handlePageClick(index)}
              >
                {page.label}
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Dynamic Content */}
      <div className="relative flex-grow flex items-center justify-center p-4">
        <AnimatePresence mode="wait" initial={false}>
          {!isPending && (
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              {pages[activePage].component}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SliderWithInteractiveNav;