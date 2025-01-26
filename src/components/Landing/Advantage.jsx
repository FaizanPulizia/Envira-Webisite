import React from "react";
import indiaMap from "../../assets/adv.png"; // Replace with your map image path

const advantages = [
  {
    title: "COMPREHENSIVE SOLUTION",
    description:
      "Offering end-to-end services, from project evaluation and design to installation, operation, and maintenance, ensuring seamless execution and reliability.",
  },
  {
    title: "FLEXIBLE FINANCING OPTIONS",
    description:
      "Providing tailored financing models like CAPEX and RESCO to meet diverse client needs and budgets.",
  },
  {
    title: "COST EFFICIENCY",
    description:
      "Delivering solutions that significantly reduce energy costs while maximizing returns on investment.",
  },
  {
    title: "SUSTAINIBILITY FOCUS",
    description:
      "Committed to enabling clean and renewable energy adoption, contributing to a greener, more sustainable future.",
  },
];

const Advantage = () => {
  return (
<section className=" bg-gradient-to-br from-green-400 via-lime-400 to-cyan-200 py-16 pb-32">
<div className="container flex flex-col md:flex-row items-center justify-between  px-6 lg:flex lg:items-center lg:gap-16">
        {/* Map Section */}
        <div className="relative w-full  ">
          <img src={indiaMap} alt="India Map" className="w-full md:-mt-96 animate-fade-scale" />
          {/* Map Markers */}
         
        </div>

        {/* Advantage Details */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 text-left animate-slide-right">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D4DD7]">
            <span className="text-[#00bf63]">ENVIRA</span>{" "}
            <span className="text-[#1D4DD7]">EDGE</span>
          </h2>
          <div className="w-16 h-1 bg-[#1D4DD7] my-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-blue-900">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
