import React from "react";
import industryIcon from "../../assets/9.svg"; // Replace with actual paths
import siteSurveyIcon from "../../assets/10.svg";
import procurementIcon from "../../assets/11.svg";
import engineeringIcon from "../../assets/14.svg";
import omIcon from "../../assets/12.svg";
import approvalsIcon from "../../assets/13.svg";

const services = [
  {
    id: 1,
    title: "Industry and Policy Analysis",
    description: [
      "Industry power requirement and consumption pattern analysis",
      "State policy review to maximize benefits",
      "Project Evaluation Report",
    ],
    icon: industryIcon,
  },
  {
    id: 2,
    title: "Site Survey",
    description: ["Building Layout", "Electrical Plan", "Commercial Analysis"],
    icon: siteSurveyIcon,
  },
  {
    id: 3,
    title: "Procurement and Manufacturing",
    description: ["Specifications", "Inspection", "Quality Check"],
    icon: procurementIcon,
  },
  {
    id: 4,
    title: "Detailed Engineering and Design",
    description: [
      "Design Drawings and Shading analysis",
      "Electrical Layout",
      "Structure design and analysis",
    ],
    icon: engineeringIcon,
  },
  {
    id: 5,
    title: "O&M",
    description: ["Real time remote monitoring", "Regular maintenance"],
    icon: omIcon,
  },
  {
    id: 6,
    title: "Approvals and Commissioning",
    description: ["Government Approvals", "Energization of the Plant"],
    icon: approvalsIcon,
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-16 mb-20">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00bf63]">
            SERVICES <span className="text-[#1d4dd7]">OFFERED</span>
          </h2>
          <div className="w-16 h-1 bg-[#1d4dd7] mx-auto my-4"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center">
              {/* Icon */}
              {/* <div className="w-16 h-16 rounded-full border-2 border-blue-900 flex items-center justify-center mb-4"> */}
                <img src={service.icon} alt={service.title} className="w-[100rem] animate-flip-in" />
              {/* </div> */}

              {/* Card */}
              {/* <div className="bg-white shadow-lg rounded-md p-6 w-full max-w-xs">
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2 pl-4">
                  {service.description.map((item, index) => (
                    <li
                      key={index}
                      className="list-disc text-gray-600 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
