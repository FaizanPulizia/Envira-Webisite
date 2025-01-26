import React from "react";
import benefitImage3 from "../../assets/ct1.jpeg"; // Import images properly
import benefitImage2 from "../../assets/ct2.png";
import benefitImage1 from "../../assets/ct3.jpeg";

const benefits = [
  {
    id: 1,
    title: "Dual Purpose Infrastructure",
    description:
      "Solar carports provide shade and protection for vehicles while generating clean, renewable energy. This dual functionality maximizes the use of available space, especially in parking lots or open areas.",
    image: benefitImage1,
  },
  {
    id: 2,
    title: "Reduced Energy Costs",
    description:
      "Solar carports generate electricity from sunlight, reducing dependence on traditional energy sources. This leads to significant savings on electricity bills over time, especially for businesses or properties with high energy demands.",
    image: benefitImage2,
  },
  {
    id: 3,
    title: "Energy Independence and Resilience",
    description:
      "Solar carports can be integrated with battery storage systems, providing backup power during outages and reducing reliance on the grid. This ensures energy availability when it’s most critical, offering peace of mind and long-term resilience.",
    image: benefitImage3,
  },
];

const Benefits = () => {
  return (
    <section className="bg-gray-50 py-16 pb-32">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#00bf63]">
          THE <span className="text-blue-900">BENEFITS</span>
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto my-4"></div>

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
                className={`object-cover rounded-full animate-fade-down ${
                  benefit.id === 2 ? "w-[90%]" : benefit.id === 3 ? "md:mt-11":""
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
