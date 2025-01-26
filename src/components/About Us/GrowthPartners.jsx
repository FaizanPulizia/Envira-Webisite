import React from "react";
import client1 from "../../assets/g1.jpeg"; // Replace with actual paths to client logos
import client2 from "../../assets/g2.png";
import client3 from "../../assets/g3.png";
import client4 from "../../assets/g4.png";
import client5 from "../../assets/g5.jpeg";
import client6 from "../../assets/g6.png";

const GrowthPartners = () => {
  const clients = [
    { id: 1, logo: client1, alt: "Client 1" },
    { id: 2, logo: client2, alt: "Client 2" },
    { id: 3, logo: client3, alt: "Client 3" },
    { id: 4, logo: client4, alt: "Client 4" },
    { id: 5, logo: client5, alt: "Client 5" },
    { id: 6, logo: client6, alt: "Client 6" },
  ];

  return (
    <section className="bg-gray-100 py-16 pb-32">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#00bf63]">
          GROWTH <span className="text-[#1D4DD7]">PARTNERS</span>
        </h2>
        <div className="w-16 h-1 bg-[#1D4DD7] mx-auto my-4"></div>

        {/* Client Logos */}
        <div className="flex flex-col items-center justify-center gap-8 mt-8">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-6">
            {clients.slice(0, 3).map((client, index) => (
              <div
                key={client.id}
                className="flex justify-center items-center transition duration-300 w-48 p-4 rounded-lg opacity-0 animate-fade-up"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: "forwards",
                }}
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="h-auto w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-6">
            {clients.slice(3, 6).map((client, index) => (
              <div
                key={client.id}
                className="flex justify-center items-center transition duration-300 w-48 p-4 rounded-lg opacity-0 animate-fade-down"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: "forwards",
                }}
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="h-auto w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthPartners;