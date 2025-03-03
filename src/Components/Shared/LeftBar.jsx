import React from "react";
import { GoSignOut } from "react-icons/go";
import { Link } from "react-router-dom";

export default function LeftBar({ setShow }) {
  const menus = [
    {
      name: "Appointments",
      link: "/admin",
    },
    {
      name: "Contact Message",
      link: "/admin/contact_message",
    },
    {
      name: "Add Service",
      link: "/admin/add_service",
    },
    {
      name: "Manage Service",
      link: "/admin/manage_service",
    },
  ];
  return (
    <section className="shadow-xl min-h-screen bg-gray-400 sticky top-0">
      <div className="!p-5 flex flex-col">
        {menus.map((m, i) => (
          <Link
            to={m.link}
            key={i}
            onClick={() => setShow(false)}
            className="text-xl !p-2.5 min-w-full text-center md:text-left"
          >
            {m.name}
          </Link>
        ))}
      </div>
      <div className="flex justify-center absolute bottom-4 min-w-full">
        <Link
          className="!px-4 !py-2 text-sm bg-red-500 text-white w-fit rounded shadow flex gap-2 items-center"
          to="/"
          onClick={() => localStorage.removeItem("smfAccessToken")}
        >
          {" "}
          <GoSignOut className="text-xl" /> Log Out
        </Link>
      </div>
    </section>
  );
}
