import React from "react";
import caseStudy1 from "../../assets/solns.jpg"; // Replace with actual image paths
import caseStudy2 from "../../assets/solns.jpg";
import caseStudy3 from "../../assets/solns.jpg";

const caseStudies = [
  {
    id: 1,
    title: "Merchem Limited",
    description:
      "Merchem Limited is a leading manufacturer of rubber processing chemicals in APAC region. Avco Energy installed a 350 KWP...",
    image: caseStudy1,
    link: "#",
  },
  {
    id: 2,
    title: "Ajanta Shoes",
    description:
      "AVCO Energy installs a 650 KW Rooftop Solar Plant for Ajanta Shoes, one of India's leading shoe brands operating out of...",
    image: caseStudy2,
    link: "#",
  },
  {
    id: 3,
    title: "Koppern Maco",
    description:
      "Koppern Maco is one of India's leading engineering service providers working across Railways...",
    image: caseStudy3,
    link: "#",
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-gray-50 py-16 mb-20 px-6">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
            CASE <span className="text-red-500">STUDIES</span>
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto my-4"></div>
        </div>

        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              {/* Image */}
              <img
                src={study.image}
                alt={study.title}
                className="h-48 w-full object-cover"
              />
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">{study.title}</h3>
                <p className="text-gray-600 mt-2">{study.description}</p>
                <a
                  href={study.link}
                  className="inline-block mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
