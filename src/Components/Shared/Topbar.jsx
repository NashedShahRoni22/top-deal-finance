import React from "react";
import logo from "../../assets/NavLogo.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Topbar() {
  return (
    <div className="bg-[#110D0C] text-white">
      <div className="!mx-5 md:w-5/6 md:!mx-auto flex justify-center md:justify-between items-center">
        <div className="hidden md:flex items-center gap-2">
          <MdEmail className="text-2xl" />
          test@test.com
        </div>
        <img src={logo} className="h-[120px]" alt="" />
        <div className="hidden md:flex items-center gap-2">
          <FaPhone className="text-2xl" />
          01345698741
        </div>
      </div>
    </div>
  );
}
