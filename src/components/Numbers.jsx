import React from "react";
import CountUp from "react-countup";

const Numbers = () => {
  const stats = [
    { value: 8, suffix: "MW", label: "ENGINEERED" },
    { value: 16, suffix: "+", label: "STATES COVERED" },
    { value: 70000, suffix: "t", label: "CO2 EMISSIONS MITIGATED" },
    { value: 50000, suffix: "", label: "TREES SAVED", icon: "🌳" },
  ];

  return (
    <section className="bg-[#00bf63] text-white py-10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-evenly items-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`text-center px-6 opacity-0 animate-fade-in`}
            style={{
              animationDelay: `${index * 0.5}s`,
              animationFillMode: "forwards",
            }}
          >
            <div className="flex justify-center items-center">
              {stat.icon && <span className="text-red-500 text-3xl mr-2">{stat.icon}</span>}
              <CountUp
                start={0}
                end={stat.value}
                duration={2}
                suffix={stat.suffix}
                className="text-4xl font-bold"
              />
            </div>
            <p className="mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Numbers;
