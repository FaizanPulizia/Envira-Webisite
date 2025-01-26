import React from "react";
import client1 from "../../assets/c1.jpeg"; // Replace with actual paths to client logos
import client2 from "../../assets/c1.jpeg";
import client3 from "../../assets/c1.jpeg";
import client4 from "../../assets/c1.jpeg";
import client5 from "../../assets/c1.jpeg";

const Clients = () => {
  const clients = [
    { id: 1, logo: client1, alt: "Client 1" },
    { id: 2, logo: client2, alt: "Client 2" },
    { id: 3, logo: client3, alt: "Client 3" },
    { id: 4, logo: client4, alt: "Client 4" },
    { id: 5, logo: client5, alt: "Client 5" },
  ];

  return (
    <section className="bg-white py-16 mb-20">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#00Bf63]">
          OUR <span className="text-[#1D4DD7]">KEY CLIENTS</span>
        </h2>
        <div className="w-16 h-1 bg-[#1D4DD7] mx-auto my-4"></div>

        {/* Client Logos */}
        <div className="flex flex-wrap md:flex-row items-center justify-center gap-6 mt-8">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={`flex justify-center items-center transition duration-300 p-4 rounded-lg opacity-0 ${
                index % 2 === 0 ? "animate-fade-up" : "animate-fade-down"
              }`}
              style={{
                animationDelay: `${index * 0.2}s`, // Staggered animation delay
                animationFillMode: "forwards", // Ensures the element stays visible after animation
              }}
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
