import React from "react";
import capexImage from "../../assets/sol1.jpeg"; // Replace with actual image paths
import opexImage from "../../assets/solns.jpg"; // Replace with actual image paths
import capexIcon from "../../assets/solns.jpg"; // Replace with actual icon paths
import opexIcon from "../../assets/solns.jpg"; // Replace with actual icon paths

const solutions = [
  {
    id: 1,
    title: "CAPEX",
    description: [
      "Full system ownership for long-term savings",
      "Tax benefits like accelerated depreciation",
      "Reduced electricity costs",
      "Custom energy solutions",
      "High ROI with 25+ years of efficiency",
    ],
    icon: capexIcon,
    image: capexImage,
  },
  {
    id: 2,
    title: "OPEX/RESCO",
    description: [
      "Zero upfront investment",
      "Pay only for the energy consumed (per unit)",
      "Provider handles system ownership and maintenance",
      "Long-term savings with predictable energy costs",
      "Hassle-free transition to renewable energy",
    ],
    icon: opexIcon,
    image: opexImage,
  },
];

const SolarSolutions = () => {
  return (
    <section className=" py-16 px-6 pb-28">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00bf63]">
            SOLAR POWER <span className="text-[#1D4DD7] font-normal">SOLUTIONS</span>
          </h2>
          <div className="w-16 h-1 bg-[#1D4DD7] mx-auto my-4"></div>
        </div>

        {/* Grid Layout */}
        <div className="flex flex-col gap-12 items-center">
          {/* Left Side: Image + Description */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-72">
            <div className="flex justify-center items-center">
              <img
                src={solutions[0].image}
                alt={solutions[0].title}
                className="w-full max-w-md rounded-md shadow-lg animate-slide-left"
              />
            </div>
            <div className="flex flex-col  justify-center">
              <div className="flex items-center mb-4">
                {/* <img
                  src={solutions[0].icon}
                  alt={solutions[0].title}
                  className="w-8 h-8 mr-4"
                /> */}
                <h3 className="text-xl md:text-3xl font-bold text-blue-900 animate-[fade-in_1s_ease-in]">
                {solutions[0].title}
                </h3>
              </div>
              <ul className="space-y-2 pl-4">
                {solutions[0].description.map((point, idx) => (
                  <li
                    key={idx}
                    className="list-disc  text-sm md:text-lg sm:text-base animate-[fade-in_1s_ease-in]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Image + Description */}
          <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-60">
            <div className="flex justify-center items-center">
              <img
                src={solutions[1].image}
                alt={solutions[1].title}
                className="w-full max-w-md rounded-md shadow-lg animate-slide-right"
              />
            </div>
            <div className="flex flex-col  justify-center">
              <div className="flex items-center mb-4">
                {/* <img
                  src={solutions[1].icon}
                  alt={solutions[1].title}
                  className="w-8 h-8 mr-4"
                /> */}
                <h3 className="text-xl md:text-3xl font-bold text-blue-900 animate-[fade-in_1s_ease-in]">
                {solutions[1].title}
                </h3>
              </div>
              <ul className="space-y-2 pl-4">
                {solutions[1].description.map((point, idx) => (
                  <li
                    key={idx}
                    className="list-disc  text-sm md:text-lg sm:text-base animate-[fade-in_1s_ease-in]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSolutions;
