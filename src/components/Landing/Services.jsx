import React from "react";
import bgImg from "../../assets/bgsec.png";

const services = [
  {
    title: "ROOFTOP SOLAR",
    description:
      "Envira Energies offers fully integrated EPC solutions for rooftop solar, specializing in engineering, design, installation, and commissioning. We cater to government, commercial, institutional, and residential sectors, delivering efficient and reliable solar energy solutions tailored to diverse needs.",
    image: "src/assets/s1.jpeg",
    png: "src/assets/sp4.png",
  },
  {
    title: "OPEN ACCESS",
    description:
      "Envira Energies enables businesses to purchase solar power from the open market, providing a cost-effective alternative to grid electricity. With Open Access, corporates can meet the majority of their daytime energy needs sustainably, benefiting from lower tariffs and cleaner power solutions.",
    image: "src/assets/s2.jpeg",
    png: "src/assets/sp3.png",
  },
  {
    title: "FLOATING SOLAR",
    description:
      "Envira Energies brings you floating solar solutions that harness the power of the sun without utilizing valuable land. By utilizing unused water bodies, clients can save space while enjoying all the benefits of clean and efficient solar energy.",
    image: "src/assets/s3.jpeg",
    png: "src/assets/sp2.png",
  },
  {
    title: "SOLAR CARPORTS",
    description:
      "Envira Energies' solar carports combine functionality and sustainability, providing shade for parked vehicles while generating clean, renewable energy. They offer a smart, dual-purpose solution for commercial and sustainable benefits.",
    image: "src/assets/s4.jpeg",
    png: "src/assets/sp1.png",
  },
];

const Services = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/60  to-green-500/80"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl  text-[#1D4DD7]">
          <span className="text-[#00bf63] font-bold">ENVIRA</span> SERVICES
        </h2>
        <div className="flex justify-center mt-2 mb-10">
          <div className="w-16 h-1 bg-[#1D4DD7]"></div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transform transition duration-300 opacity-0 animate-flip-in"
              style={{
                animationDelay: `${index * 0.3}s`, // Staggered delay for each card
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-col p-6 justify-center items-center gap-2">
                <h3 className="text-xl font-semibold text-blue-900 flex items-center justify-center">
                  {service.title}
                </h3>
                {/* <img src={service.png} alt={service.title} className="w-20" /> */}
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
