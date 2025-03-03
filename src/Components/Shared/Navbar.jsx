import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/LogoMark.png"

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const NavItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav className="!py-5 relative border-b-2">
      <div className="flex items-center justify-between">
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
          <img src={logo} className="h-[40px] rounded" alt="" />
        </div>
        {/* Desktop Menus  */}
        <div className="hidden lg:flex gap-8">
          {NavItems.map((navItem, index) => (
            <Link key={index} to={navItem.link} className="font-semibold">
              {navItem.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link className="!px-4 !py-2 bg-[#CEB666] font-semibold text-white rounded shadow">
            Get Started
          </Link>
        </div>
      </div>
      {/* Mobile Menus  */}
      {showNav && (
        <div className="absolute z-50 top-[50px] !p-4 bg-white w-1/2 shadow rounded flex flex-col lg:hidden gap-4">
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
