import React from "react";

const FlipBoxSection = () => {
  return (
    <section className="bg-gradient-to-b from-green-100 via-white to-green-100 py-16">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
          <span className="text-[#00bf63]">BUSINESS</span>{" "}
          <span className="text-blue-800">MODELS</span>
        </h2>
        <div className="flex justify-center mt-2 mb-10">
          <div className="w-16 h-1 bg-red-500"></div>
        </div>

        {/* Models */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6">
          {/* First Image */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex text-xl font-semibold items-center justify-center p-2">
              <img
                src="src/assets/o1.png"
                alt="Description"
                className="w-auto h-auto md:w-auto md:h-auto"
              />
            </div>
            <img
              src="src/assets/—Pngtree—vector star icon_4231909.png"
              className="w-[40%]"
              alt=""
            />
          </div>

          {/* Line Between Images */}
          <div className="h-96 w-0.5 bg-gray-400 mx-4 hidden md:block"></div>

          {/* Second Image */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex text-xl font-semibold items-center justify-center p-2">
              <img
                src="src/assets/o2.png"
                alt="Description"
                className="w-auto h-auto md:w-auto md:h-auto"
              />
            </div>
            <img
              src="src/assets/—Pngtree—vector star icon_4231909.png"
              className="w-[40%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlipBoxSection;