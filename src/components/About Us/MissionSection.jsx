import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Mission */}
        <div className="flex flex-col items-center justify-center px-6 md:pr-12 border-r-2 border-blue-200 ">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00bf63]">
            OUR <span className="text-[#1D4DD7]">MISSION</span>
          </h2>
          <div className="w-16 h-1 bg-[#00bf63] my-4"></div>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Our mission is simple: to power the world sustainably. We strive to make renewable energy accessible, reliable, and affordable for all, contributing to global efforts to combat climate change and reduce dependency on fossil fuels.
          </p>
        </div>

        {/* Right Column: Core Values */}
        <div className="px-6 md:pl-12 space-y-8">
          {/* Reliability */}
          <div>
            <h3 className="text-xl font-bold text-[#00bf63]">RELIABILITY</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            We leverage the latest advancements in renewable energy technologies to deliver cutting-edge solutions that meet evolving energy needs.
            </p>
          </div>

          {/* Dedication */}
          <div>
            <h3 className="text-xl font-bold text-[#00bf63]">EXPERTISE</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            From design to deployment, our experienced team ensures seamless execution and long-term support, providing end-to-end solutions.
            </p>
          </div>

          {/* Innovation */}
          <div>
            <h3 className="text-xl font-bold text-[#00bf63]">SUSTAINIBILITY</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Sustainability is more than just a goal for us—it's our driving purpose, reflected in every project we undertake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
