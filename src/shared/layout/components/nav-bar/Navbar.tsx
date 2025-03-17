

import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full h-[60px] bg-primary fixed top-0 left-0 z-50 shadow-md flex items-center justify-between px-6 text-white">
      <button onClick={() => navigate("/")} className="text-xl font-bold cursor-pointer">
        Estelar
      </button>
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
