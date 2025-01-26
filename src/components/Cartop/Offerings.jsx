import React from "react";
import carportImage from "../../assets/o1.jpg"; // Replace with actual paths to SVG images
import canopyImage from "../../assets/o2.jpg";
import bikeShedImage from "../../assets/o3.jpg";

const offerings = [
  {
    id: 1,
    title: "Solar Carports",
    description:
      "One Parking Structure, Many Benefits. Ideal to make optimum use of existing land space for greener initiatives with commercial benefits.",
    image: carportImage,
  },
  {
    id: 2,
    title: "Solar Canopies",
    description:
      "Innovative product with specialized customized structures that turn non-productive land into solar power plants that pay for itself.",
    image: canopyImage,
  },
  {
    id: 3,
    title: "Solar Bike and Cycle Sheds",
    description:
      "Flexible solar structures ideal for corporates, colleges and campuses to reap the dual benefits of solar structures.",
    image: bikeShedImage,
  },
];

const Offerings = () => {
  return (
    <section className="bg-gray-50 py-16 mb-20">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#00bf63]">
          OUR <span className="text-blue-900">OFFERINGS</span>
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto my-4"></div>

        {/* Offering Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          {offerings.map((offering) => (
            <div
              key={offering.id}
              className="flex flex-col items-center  p-6 transition duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={offering.image}
                alt={offering.title}
                className="w-96 object-contain animate-fade-down"
              />
              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 animate-fade-up">
                {offering.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mt-2 animate-fade-up">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
