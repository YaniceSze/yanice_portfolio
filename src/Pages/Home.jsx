import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "../Components/About";
import Hero from "../Components/Hero";
import Experiences from "../Components/Experiences";
import Education from "../Components/Education";
import Contact from "../Components/Contact";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

function Home() {
  // Add the useEffect hook to trigger the animations
  useEffect(() => {
    gsap.utils.toArray(".animateSection").forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 50, scale: 0.85, rotation: -1 }, // Starting values
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: section,  // Trigger the animation when this element enters the viewport
            start: "top 75%",  // Animation starts when top of the section reaches 75% of the viewport
            end: "bottom 25%", // Animation ends when bottom of the section reaches 25% of the viewport
            toggleActions: "play none none none",  // Only play the animation once
          },
        }
      );
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);  // Empty dependency array to ensure the hook runs only once

  return (
    <div>
      {/* Add the class 'animateSection' to apply the animation to Hero and AboutUs sections */}
      <div className="animateSection">
        <Hero/>
      </div>
      <div className="animateSection">
        <About />
      </div>
      <div className="animateSection">
        <Experiences />
      </div>
      <div className="animateSection">
        <Education/>
      </div>
      <div className="animateSection">
        <Contact/>
      </div>
    </div>
  );
}

export default Home;
