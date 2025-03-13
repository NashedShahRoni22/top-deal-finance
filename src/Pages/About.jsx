import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCar, FaUserAlt, FaHandHoldingUsd, FaFileAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaBuilding, FaChartLine, FaLock, FaWallet } from "react-icons/fa6";

export default function About() {
  return (
    <div className="container mx-auto !p-8">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row items-center !mb-16 !py-5 md:!py-10 gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800">
            About Top Deal Finance
          </h1>
          <p className="text-lg text-gray-600 !mt-8">
            <b>Varjeet Singh</b> is the dedicated owner of Top Deal Finance,
            where he brings years of industry experience and a deep commitment
            to providing personalized financial solutions. With a focus on home,
            car, personal, and investment mortgages, Varjeet has built a
            reputation as a trusted partner for individuals and families seeking
            the best loan deals. His approach is rooted in understanding the
            unique financial needs of each client, and he works tirelessly to
            find the right solutions that align with their goals. Varjeet’s
            leadership and expertise ensure that the loan process remains
            smooth, transparent, and stress-free for every client he serves.
          </p>
          <p className="text-lg text-gray-600 !mt-8">
            At Top Deal Finance, we pride ourselves on being a trusted and
            reliable partner for all your loan needs. With years of experience
            in the industry, we have built a reputation for helping individuals
            and families secure the best loan deals in the market. Our team of
            experts works with each client individually, understanding their
            unique financial needs and finding tailored solutions that fit their
            goals. We are committed to making the loan process as smooth and
            stress-free as possible.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="https://pacificfinance.com.au/wp-content/uploads/2021/06/PF-Commercial_0070-1024x727.jpg" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row-reverse items-center !mb-16 !py-5 md:!py-10 gap-8">
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
        <div className="flex flex-col md:flex-row items-center gap-8">
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
          <li className="flex items-center">
            <FaBuilding className="h-6 w-6 text-[#CEB666] !mr-3" />
            Trusted Financial Institutions
          </li>
          <li className="flex items-center">
            <FaWallet className="h-6 w-6 text-[#CEB666] !mr-3" />
            Easy Loan Management
          </li>
          <li className="flex items-center">
            <FaHandHoldingUsd className="h-6 w-6 text-[#CEB666] !mr-3" />
            Personalized Financial Support
          </li>
          <li className="flex items-center">
            <FaFileAlt className="h-6 w-6 text-[#CEB666] !mr-3" />
            Clear and Transparent Paperwork
          </li>
          <li className="flex items-center">
            <FaChartLine className="h-6 w-6 text-[#CEB666] !mr-3" />
            Financial Growth and Insights
          </li>
          <li className="flex items-center">
            <FaLock className="h-6 w-6 text-[#CEB666] !mr-3" />
            Secure and Safe Loan Options
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="text-center !py-5 md:!py-10 bg-gray-500 text-white rounded">
        <h2 className="text-3xl font-semibold !mb-4">
          Contact Us Today!
        </h2>
        <p className="text-lg !mb-6">
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
