import React from "react";
import benefitImage3 from "../../assets/fs1.jpeg"; // Import images properly
import benefitImage2 from "../../assets/fs2.jpeg";
import benefitImage1 from "../../assets/fs3.jpeg";

const benefits = [
  {
    id: 1,
    title: "No Land Requirement",
    description:
      "Floating solar uses water bodies as a base rather than land. This allows maximum utilization of otherwise unused water bodies, and helps clients save on thier valuable land space for the project.",
    image: benefitImage1,
  },
  {
    id: 2,
    title: "Higher Energy Yield",
    description:
      "The underlying water bodies, keeps the solar panels at a lower temperature in comparison to the traditional ground mount and rooftop solar systems. This directly leads to higher yield.",
    image: benefitImage2,
  },
  {
    id: 3,
    title: "Flexible Solar Plant Design",
    description:
      "Floating solar allows for great flexibility in the solar plant design to maximize generation as per the accurate tilt angle and placement of solar plants based on the direction of the sun path.",
    image: benefitImage3,
  },
];

const Benefits = () => {
  return (
    <section className="bg-gray-50 py-16 pb-32">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#00bf63]">
          THE <span className="text-[#1d4dd7]">BENEFITS</span>
        </h2>
        <div className="w-16 h-1 bg-[#1d4dd7] mx-auto my-4"></div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col items-center justify-center space-y-4 px-4"
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className={`object-cover  animate-fade-down ${
                  benefit.id === 2 ? "w-[90%]" : benefit.id === 3 ? "w-[60%]" : benefit.id === 1 ? "md:mb-16":"" 
                  
                }`}
              />

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 animate-fade-up"
              
              >
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed animate-fade-up">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
