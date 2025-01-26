import React from "react";

const FAQs = () => {
  const faqs = [
    "What is Open Access?",
    "How will the Group Captive Power Scheme work?",
    "How does Open Access help power consumers to meet their sustainability and green initiative goals?",
  ];

  return (
    <section className="bg-white py-16 mb-20 px-6">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#00bf63]">
          FREQUENTLY <span className="font-normal text-[#1D4DD7]">ASKED</span>
        </h2>
        <div className="w-16 h-1 bg-[#1D4DD7] mx-auto my-4"></div>

        {/* FAQ List */}
        <ul className="mt-8 space-y-4 text-left max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <li key={index} className="flex items-start gap-2">
              {/* Red Bullet Icon */}
              <span className="text-blue-900 text-lg font-bold">&#9679;</span>
              {/* FAQ Text */}
              <p className="text-gray-700">{faq}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQs;
