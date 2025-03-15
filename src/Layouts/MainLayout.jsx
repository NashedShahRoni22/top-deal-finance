import React, { useEffect } from "react";
import Navbar from "../Components/Shared/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Shared/Footer";

export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <section>
      <Navbar />
      <div className="!mx-5 md:w-5/6 md:!mx-auto">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}
