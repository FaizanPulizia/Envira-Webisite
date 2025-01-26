import React from "react";
import bgImage from "../../assets/oabg2.jpeg"; // Replace with your background image path

const Hero = () => {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById("next-section-about");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1D4DD7]  to-[#00bf63] opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start text-left px-10">
        <div className="text-white max-w-7xl">
          <div className="border-l-4 border-[#00bf63] pl-4">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold animate-slide-down">
            Open Access is a commitment to providing free, immediate, and unrestricted access to high-quality research and knowledge. By removing financial, legal, and technical barriers, we empower individuals and institutions to share and engage with academic content, fostering a global exchange of ideas. This approach ensures that research can be accessed by anyone, anywhere, contributing to the advancement of science, education, and innovation.</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 animate-fade-down" onClick={scrollToNextSection}>
        <svg
          className="w-6 h-6 text-white animate-bounce cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
