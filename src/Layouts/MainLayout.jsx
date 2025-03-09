import React from "react";
import Navbar from "../Components/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Topbar from "../Components/Shared/Topbar";

export default function MainLayout() {
  return (
    <section>
      {/* <Topbar /> */}
      <Navbar />
      <div className="!mx-5 md:w-5/6 md:!mx-auto">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}
