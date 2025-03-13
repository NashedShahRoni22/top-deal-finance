import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#110D0E] text-white !py-8 md:!py-16 ">
      <div className="!mx-5 md:w-5/6 md:!mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Newsletter Section */}
          <div className="newsletter space-y-4 md:w-1/2">
            <h3 className="md:text-xl text-[#CEB666] font-semibold text-center md:text-left">
              Subscribe to our Newsletter
            </h3>
            <form
              action="#"
              method="POST"
              className="flex justify-center md:justify-start !mt-5"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="!px-4 !py-2 border border-[#CEB666] text-white mb-3 rounded-l focus:outline-none"
              />
              <button
                type="submit"
                className="cursor-pointer bg-[#CEB666] border border-[#CEB666] text-white !px-4 !py-2 rounded-r hover:bg-white hover:text-[#CEB666] font-semibold transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="md:w-1/2 flex flex-col gap-5 md:flex-row justify-between flex-1">
            {/* Quick Links Section */}
            <div className="quick-links space-y-4">
              <h4 className="md:text-xl text-[#CEB666] font-semibold text-center md:text-left">
                Quick Links
              </h4>
              <ul className="space-y-2 !mt-4 text-center md:text-left">
                <li>
                  <Link
                    to="/"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    Secvices
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Icons Section */}
            <div className="social-icons space-y-4">
              <h4 className="md:text-xl text-[#CEB666] font-semibold text-center md:text-left">
                Follow Us
              </h4>
              <div className="flex justify-center md:justify-start gap-5 space-x-4 !mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#CEB666] transition duration-300"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#CEB666] transition duration-300"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#CEB666] transition duration-300"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="!mt-12 text-center text-sm">
          <p>&copy; 2025 Top Deal Finance. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
