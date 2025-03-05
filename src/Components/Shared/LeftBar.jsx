import React from "react";
import { GoSignOut } from "react-icons/go";
import { FaCalendarAlt, FaEnvelope, FaPlusCircle, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LeftBar({ setShow }) {
  const menus = [
    {
      name: "Appointments",
      link: "/admin",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Contact Message",
      link: "/admin/contact_message",
      icon: <FaEnvelope />,
    },
    {
      name: "Add Service",
      link: "/admin/add_service",
      icon: <FaPlusCircle />,
    },
    {
      name: "Manage Service",
      link: "/admin/manage_service",
      icon: <FaCogs />,
    },
  ];

  return (
    <section className="shadow-xl min-h-screen bg-blue-500 sticky top-0 text-white">
      <div className="!p-5 flex flex-col !space-y-4">
        {menus.map((m, i) => (
          <Link
            to={m.link}
            key={i}
            onClick={() => setShow(false)}
            className="flex items-center !space-x-3 text-lg !py-2 !px-4 hover:bg-blue-700 rounded transition-all"
          >
            <span className="text-xl">{m.icon}</span>
            <span>{m.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex justify-center absolute bottom-4 min-w-full">
        <Link
          className="!px-4 !py-2 text-sm bg-red-500 text-white w-fit rounded shadow flex items-center gap-2"
          to="/"
          onClick={() => localStorage.removeItem("smfAccessToken")}
        >
          <GoSignOut className="text-xl" /> Log Out
        </Link>
      </div>
    </section>
  );
}
