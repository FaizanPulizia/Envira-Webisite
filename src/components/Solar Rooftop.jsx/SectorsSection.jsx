import React from "react";
import commercialIcon from "../../assets/i1.png"; // Replace with actual image paths
import residentialIcon from "../../assets/i2.png";
import governmentIcon from "../../assets/i3.png";

const sectors = [
  {
    id: 1,
    title: "Commercial and Industrial",
    description:
      "We collaborate with businesses to assess their energy requirements, sustainability goals, and operational demands. Our customized solar energy systems are designed to lower electricity costs while driving environmental responsibility. Many of our partners have achieved significant savings of 35-55% in their energy expenses, enhancing both efficiency and sustainability.",
    points: [
      "FREE project evaluation report and site survey",
      "Power consumption analysis and study",
      "In-house O&M",
      "24-48 Hour Service guarantee",
    ],
    icon: commercialIcon,
  },
  {
    id: 2,
    title: "Residential",
    description:
      "At Envira Energies, our dedicated residential team focuses on meeting the energy needs of homeowners. We conduct a thorough assessment of your roof, available space, and local policies to design the most efficient and cost-effective solar energy solution for your home.",
    points: [
      "Designed specialized solar kits for residential purposes",
      "10-12 days installation",
      "24-48 Hour service guarantee",
    ],
    icon: residentialIcon,
  },
  {
    id: 3,
    title: "Government",
    description:
      "At Envira Energies, we work closely with government bodies and institutions to design and implement large-scale solar energy projects. From schools and railways to offices and other government buildings, our expertise ensures efficient, MW-scale installations that support sustainable development and align with India’s renewable energy goals.",
    points: [
      "Empanelments with multiple state nodal agencies",
      "Strong liaisoning",
    ],
    icon: governmentIcon,
  },
];

const SectorsSectionWithCustomOrder = () => {
  return (
    <section className="bg-white py-16 md:px-28 px-6">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00bf63]">
          INDUSTRIES <span className="text-blue-900 font-normal">WE SERVE</span>
          </h2>
          {/* <div className="w-16 h-1 bg-red-500 mx-auto my-4"></div> */}
        </div>

        {/* Sectors */}
        <div className="space-y-12">
          {sectors.map((sector, index) => (
            <div
              key={sector.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index === 1 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="flex justify-center">
                {/* <div className="w-32 h-32 rounded-full border-2 border-green-500 flex items-center justify-center"> */}
                  <img
                    src={sector.icon}
                    alt={sector.title}
                    className="w-[200rem] animate-fade-left"
                  />
                {/* </div> */}
              </div>

              {/* Description */}
              <div className={`md:px-20 animate-fade-right ${
                index === 1 ? "pl-4" : ""
              }`}>
                <h3 className="text-3xl font-bold text-black mb-4">
                  {sector.title}
                </h3>
                <p className="text-black text-lg leading-relaxed mb-4">
                  {sector.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSectionWithCustomOrder;
