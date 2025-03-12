import { ReactNode } from "react";
import Navbar from "./components/nav-bar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main className="pt-[60px]">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};
