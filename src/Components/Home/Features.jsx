import React from "react";
import {
  FaHandHoldingUsd,
  FaTags,
  FaMoneyCheckAlt,
  FaHeadset,
  FaLightbulb,
  FaSearchDollar,
} from "react-icons/fa";

export default function Features() {
  const brokerFeatures = [
    {
      title: "Quick Loan Approval",
      description:
        "We streamline the loan approval process so you can get approved faster. Enjoy a smooth and hassle-free experience.",
      icon: <FaHandHoldingUsd size={50} />,
    },
    {
      title: "Competitive Interest Rates",
      description:
        "Take advantage of some of the most competitive interest rates available. Save more over the long term with lower payments.",
      icon: <FaTags size={50} />,
    },
    {
      title: "Flexible EMI Plans",
      description:
        "Our EMI policies are designed with flexibility in mind. Customize your payment schedule to fit your financial needs and lifestyle.",
      icon: <FaMoneyCheckAlt size={50} />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our dedicated team is available around the clock to assist you at any stage of your mortgage journey. We’re here whenever you need us.",
      icon: <FaHeadset size={50} />,
    },
    {
      title: "Professional Guidance",
      description:
        "Get personalized advice from mortgage experts. We provide tailored solutions to ensure the best financial decisions for your future.",
      icon: <FaLightbulb size={50} />,
    },
    {
      title: "Clear and Transparent Process",
      description:
        "We believe in honesty and transparency. You won’t encounter hidden fees, and every step of the process is explained clearly.",
      icon: <FaSearchDollar size={50} />,
    },
  ];

  return (
    <div className="!py-8 md:!py-16">
      <h2 className="text-4xl md:text-6xl font-semibold text-center">
        What are you looking to do?
      </h2>

      {/* Mortgage Broker Features Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 !mt-8 md:!mt-16">
        {brokerFeatures.map((feature, index) => (
          <div
            key={index}
            className="!p-4 min-w-full shadow rounded"
          >
            <div className="text-[#CEB666]">{feature.icon}</div>
            <h5 className="font-semibold text-xl !my-2.5">{feature.title}</h5>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
