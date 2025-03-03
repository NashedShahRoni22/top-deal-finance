import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCar, FaUserAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

export default function About() {
  return (
    <div className="container mx-auto !p-8">
      {/* Header Section */}
      <header className="text-center !mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          About Top Deal Finance
        </h1>
        <p className="text-lg text-gray-600 !mt-8">
          At Top Deal Finance, we pride ourselves on being a trusted and
          reliable partner for all your loan needs. With years of experience in
          the industry, we have built a reputation for helping individuals and
          families secure the best loan deals in the market. Our team of experts
          works with each client individually, understanding their unique
          financial needs and finding tailored solutions that fit their goals.
          We are committed to making the loan process as smooth and stress-free
          as possible.
        </p>
      </header>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row items-center !mb-16 !py-5 md:!py-10">
        <div className="md:w-1/2 !px-6 !mb-6 md:!mb-0">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600 !mt-4">
            At Top Deal Finance, we are dedicated to helping Australians secure
            the best possible loan deals. Whether you're buying your dream home,
            getting a new car, or need a personal loan, we have the experience
            and expertise to guide you through the process and help you make
            informed financial decisions.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Mission"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="!mb-16 !py-5">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 !px-6 !mb-6 md:!mb-0">
            <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
            <p className="text-lg text-gray-600">
              Our vision at Top Deal Finance is to empower Australians by
              providing easy access to the best loan options available. We aim
              to simplify the process of securing loans by offering personalized
              services that are tailored to meet the needs of each individual or
              business. By using the latest technology and market insights, we
              strive to offer faster, more competitive rates and help our
              clients make confident and informed financial decisions. We
              believe that by fostering strong relationships built on trust and
              transparency, we can contribute to a more financially secure
              future for all Australians.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Vision"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="!mb-16 !py-5 md:!py-10">
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

      {/* Why Choose Us Section */}
      <section className="!mb-16 !py-5 md:!py-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center !mb-6">
          Why Choose Top Deal Finance?
        </h2>
        <p className="text-lg text-gray-600 text-center !mb-8">
          We understand that navigating loan options can be overwhelming, so
          we’re here to make it simple. With our team of experts, personalized
          service, and access to the best loan deals in the market, we ensure
          you get the best terms and rates.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-lg text-gray-600">
          <li className="flex items-center">
            <GiReceiveMoney className="h-6 w-6 text-[#CEB666] !mr-3" />
            Expert Advice
          </li>
          <li className="flex items-center">
            <FaHome className="h-6 w-6 text-[#CEB666] !mr-3" />
            Tailored Loan Options
          </li>
          <li className="flex items-center">
            <FaCar className="h-6 w-6 text-[#CEB666] !mr-3" />
            Fast and Easy Process
          </li>
          <li className="flex items-center">
            <FaUserAlt className="h-6 w-6 text-[#CEB666] !mr-3" />
            Competitive Interest Rates
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="text-center !py-5 md:!py-10">
        <h2 className="text-3xl font-semibold text-gray-800 !mb-4">
          Contact Us Today!
        </h2>
        <p className="text-lg text-gray-600 !mb-6">
          Ready to secure your loan? Contact us now to speak with a loan
          specialist who can help you get started.
        </p>
        <Link
          to="/contact"
          className="inline-block !px-6 !py-2.5 bg-[#CEB666] text-white text-lg font-semibold rounded-lg hover:bg-gray-500 transition duration-300"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
