import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/SideLogo.png";
import NavItems from "./NavItems";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  // const NavItems = [
  //   {
  //     name: "Home",
  //     link: "/",
  //   },
  //   {
  //     name: "Services",
  //     link: "/services",
  //   },
  //   {
  //     name: "About",
  //     link: "/about",
  //   },
  //   {
  //     name: "Contact",
  //     link: "/contact",
  //   },
  //   {
  //     name: "Blogs",
  //     link: "/blogs",
  //   },
  // ];
  return (
    <nav className="!py-5 relative bg-[#110D0E] text-white">
      <div className="flex items-center justify-between !mx-5 md:w-5/6 md:!mx-auto">
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            {showNav ? (
              <IoClose
                onClick={() => setShowNav(!showNav)}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={() => setShowNav(!showNav)}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
          <Link to={"/"}>
            <img
              src={logo}
              className="h-[60px] lg:h-[100px] rounded"
              alt=""
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Menus  */}
          <div className="hidden lg:flex gap-8">
            {NavItems.map((navItem, index) => (
              <Link
                key={index}
                to={navItem.link}
                className="font-semibold hover:text-[#CEB666] ease-linear duration-300"
              >
                {navItem.name}
              </Link>
            ))}
          </div>
          <Link
            to={"/book-appointment"}
            className="!px-4 !py-2 bg-[#CEB666] font-semibold text-white rounded shadow"
          >
            Book Now
          </Link>
        </div>
      </div>
      {/* Mobile Menus  */}
      {showNav && (
        <div className="absolute z-50 top-[60px] left-[15px] !p-4 bg-white text-black w-1/2 shadow rounded flex flex-col lg:hidden gap-4">
          {NavItems.map((navItem, index) => (
            <Link key={index} to={navItem.link} className="font-semibold">
              {navItem.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
