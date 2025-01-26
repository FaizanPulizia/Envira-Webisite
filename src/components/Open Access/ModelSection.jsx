import React from "react";

const models = [
  {
    id: 1,
    title: "CAPTIVE CAPEX MODEL",
    description:
      "Envira Energies provides a tailored Captive Capex Model that enables businesses to invest in renewable energy infrastructure with minimal upfront costs. Partnering with major Independent Power Producers (IPPs), we offer a comprehensive, turnkey solution covering project planning, design, installation, and maintenance. This model allows companies to generate on-site energy through renewable sources like solar and wind, ensuring long-term savings, energy independence, and sustainability. With our expertise and strong partnerships, we deliver efficient solutions that help businesses reduce reliance on traditional power sources.",
    points: [
      "Full Control over Land and Assets: The Captive Capex Model lets businesses own both land and energy assets, ensuring long-term energy independence and financial benefits. By investing in on-site renewable systems, companies gain control over their energy strategy while supporting sustainability and maximizing tax advantages.",
      "Turnkey Solution with End-to-End Service: Envira Energies, in partnership with major IPPs, offers a complete, end-to-end solution that covers project planning, design, installation, and ongoing maintenance. This seamless approach ensures that businesses can rely on a hassle-free, efficient energy solution from start to finish.",
      "Energy Independence and Sustainability: The Captive Capex Model empowers businesses to generate their own energy through renewable sources like solar and wind, providing long-term cost savings and reducing dependency on traditional power grids. This supports sustainability goals and enhances energy security for the future.",
    ],
  },
  {
    id: 2,
    title: "GROUP CAPTIVE MODEL",
    description:
      "The Group Captive Model allows multiple businesses to jointly invest in renewable energy systems, sharing costs and benefits while gaining energy independence and sustainability. Envira Energies provides a tailored solution, facilitating partnerships, project design, financing, installation, and long-term maintenance. By partnering with major IPPs, we deliver a seamless, integrated approach that helps businesses reduce reliance on traditional energy sources and achieve their sustainability goals.",
    points: [
      "Shared Investment and Cost Distribution: The Group Captive Model allows multiple businesses to pool their resources, sharing the financial investment in renewable energy systems. This collaborative approach reduces individual capital burdens while maximizing the benefits of clean energy.",
      "Energy Independence and Sustainability: By collectively investing in renewable energy sources like solar or wind, businesses can achieve energy independence, reduce dependence on traditional grids, and meet sustainability goals through clean, cost-effective energy solutions.",
      "Comprehensive Turnkey Solution: Envira Energies provides end-to-end services, including project design, installation, financing, and long-term maintenance. Our partnerships with major IPPs ensure a seamless, integrated solution that delivers reliable, renewable energy for all participating businesses.",
    ],
  },
];

const ModelSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="flex flex-col gap-12 px-6">
        {models.map((model, index) => (
          <React.Fragment key={model.id}>
            <div className="flex flex-row space-y-6 justify-evenly items-center">
              {/* Title */}
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-[#00bf63]">
                  {model.title.split(" ")[0]} {model.title.split(" ")[1]}{" "}
                  <span className="text-[#1D4DD7] font-normal">
                    {model.title.split(" ")[2]}
                  </span>
                </h2>

                {/* Description */}
                <p className="text-gray-600 max-w-[30rem] text-lg font-normal">
                  {model.description}
                </p>
              </div>

              {/* Points */}
              <ul className="space-y-10 pl-4 max-w-96">
                {model.points.map((point, idx) => (
                  <li key={idx} className="text-gray-600 leading-relaxed">
                    <span className="text-[#00bf63] font-bold text-lg">
                      {point.split(":")[0]}:
                    </span>{" "}
                    <br />
                    <span>{point.split(":")[1]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider Line */}
            {index < models.length - 1 && (
              <hr className="border-[#00bf63] my-12 mx-auto w-3/4" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ModelSection;