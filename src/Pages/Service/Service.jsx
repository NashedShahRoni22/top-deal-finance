import React from "react";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";

export default function Service() {
  return (
    <section className="!py-10 md:!py-20">
      <h2 className="text-3xl font-semibold text-gray-800 text-center !mb-6">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="!p-6 bg-white flex flex-col items-center rounded-lg shadow-md">
          <FaHome className="text-4xl text-[#CEB666] !mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800">Home Loans</h3>
          <p className="text-gray-600 !mt-2">
            Tailored solutions to help you buy your home with ease.
          </p>
        </div>
        <div className="!p-6 bg-white flex flex-col items-center rounded-lg shadow-md">
          <FaCar className="text-4xl text-[#CEB666] !mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800">Car Loans</h3>
          <p className="text-gray-600 !mt-2">
            Affordable rates for new or used vehicles.
          </p>
        </div>
        <div className="!p-6 bg-white flex flex-col items-center rounded-lg shadow-md">
          <FaUserAlt className="text-4xl text-[#CEB666] !mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800">
            Personal Loans
          </h3>
          <p className="text-gray-600 !mt-2">
            Flexible personal loans for various needs.
          </p>
        </div>
      </div>
    </section>
  );
}
