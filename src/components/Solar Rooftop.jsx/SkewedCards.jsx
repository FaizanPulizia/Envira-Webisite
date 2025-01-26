import React from "react";

const skewedCards = [
  {
    id: 1,
    text: "Solar electricity less than Rs 3 per unit",
  },
  {
    id: 2,
    text: "3 to 4 year payback on average",
  },
  {
    id: 3,
    text: "Collateral-free solar loan",
  },
];

const SkewedCards = () => {
  return (
    <section className="py-10 px-6 animate-fade-down">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
        {skewedCards.map((card) => (
          <div
            key={card.id}
            className="relative bg-[#1D4DD7] text-white py-6 px-8 text-center transform -skew-x-12 "
          >
            {/* Content */}
            <div className="transform -skew-x-12">
              <p className="text-lg font-bold">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkewedCards;
