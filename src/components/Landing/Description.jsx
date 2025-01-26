import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Description = () => {  const navigate = useNavigate();

  return (
    <section id="next-section" className="bg-white py-16">
      <div className="container mx-auto text-center px-6">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl  text-gray-800">
          <span className="text-[#00bf63] font-bold">WE ARE</span> <span className="text-[#1D4DD7]">ENVIRA</span>
        </h2>
        <div className="flex justify-center mt-2">
          <div className="w-16 h-1 bg-[#1D4DD7]"></div>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-lg leading-relaxed  md:px-40 opacity-0 animate-fade-up">
        Envira Energies is a leading provider of distributed solar solutions in India, offering end-to-end services from project design to operation and maintenance. With flexible financing options like CAPEX and RESCO, we help businesses reduce energy costs while advancing sustainability. Our reliable, innovative solutions empower a cleaner and more energy-efficient future.        </p>

        {/* Button */}
        <button onClick={() => navigate("/contact")} className="mt-8 px-8 py-3 border-2 border-[#00bf63] text-[#00bf63] hover:bg-[#00bf63] hover:text-white font-semibold rounded-lg transition duration-300 opacity-0 animate-fade-down">
          TALK TO US
        </button>
      </div>
    </section>
  );
};

export default Description;
