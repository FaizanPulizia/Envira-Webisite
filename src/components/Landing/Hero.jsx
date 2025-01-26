import React from "react";
import bgVideo from "../../assets/Landing Video.mp4"; // Replace with the path to your video file
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden font-sans">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="container relative z-10 h-full flex flex-col justify-center items-start px-6 text-white">
        <h1 className="text-4xl sm:text-6xl font-bold animate-fade-left">
          Harnessing the Power of <br />{" "}
          <span className="text-green-500">Nature</span>
        </h1>
        <button
          onClick={() => navigate("/about")}
          className="mt-6 px-6 py-3 bg-white hover:bg-[#00bf63] animate-fade-right text-[#00bf63] hover:text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Learn More
        </button>
      </div>

      {/* Scroll Down Arrow */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 animate-fade-down"
        onClick={scrollToNextSection}
      >
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

export default HeroSection;