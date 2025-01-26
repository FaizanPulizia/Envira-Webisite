import React from "react";
import teamBg from "../../assets/landing_sec_bg.jpeg"; // Replace with your background image
import teamMember1 from "../../assets/t1.jpeg"; // Replace with actual paths to team photos
import teamMember2 from "../../assets/t2.jpeg";
import teamMember3 from "../../assets/t3.jpeg";
import teamMember4 from "../../assets/t4.jpeg";

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Rohan Avalani", image: teamMember1 },
    { id: 2, name: "Dipesh Kadhiwala", image: teamMember2 },
    { id: 3, name: "Praful Patel", image: teamMember3 },
    { id: 4, name: "Souvik Panja", image: teamMember4 },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${teamBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-cyan-200 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#00BF63]">
          OUR <span className="text-[#1D4DD7]">TEAM</span>
        </h2>
        <div className="w-16 h-1 bg-[#00BF63] mx-auto my-4"></div>

        {/* Team Members */}
        <div className="grid grid-rows-2 grid-cols-2 gap-8 mt-8 md:mx-36">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              {/* Profile Image */}
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name */}
              <h3 className="mt-4 text-lg font-semibold text-black">
                {member.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
