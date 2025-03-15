import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../data/MenuItem";
import { ChevronDown, ChevronRight } from "lucide-react";

const DesktopMenu = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null); // Países
  const [openCityMenu, setOpenCityMenu] = useState(null); // Ciudades
  const [openHotelMenu, setOpenHotelMenu] = useState(null); // Hoteles
  const navigate = useNavigate();

  return (
    <ul className="hidden lg:flex gap-6 relative">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="relative"
          onMouseEnter={() => {
            setOpenSubmenu(index);
            setOpenCityMenu(null);
            setOpenHotelMenu(null);
          }}
          onMouseLeave={() => {
            setOpenSubmenu(null);
            setOpenCityMenu(null);
            setOpenHotelMenu(null);
          }}
          onClick={() => {
            if (item.path && item.subItems.length === 0) {
              navigate(item.path);
            }
          }}
        >
          <span className="flex items-end gap-1 hover:text-gray-300 text-xs font-semibold cursor-pointer ">
            {item.title}
            {item.subItems.length > 0 && <ChevronDown className="w-4 h-4" />}
          </span>

          {/* Submenú: Países */}
          {item.subItems.length > 0 && openSubmenu === index && (
            <div className="absolute top-full left-0 bg-white text-black shadow-lg w-48 p-2">
              {item.subItems.map((country, i) => (
                <div
                  key={i}
                  className="relative px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center justify-between gap-2 text-xs"
                  onMouseEnter={() => {
                    setOpenCityMenu(i);
                    setOpenHotelMenu(null);
                  }}
                >
                  {country.title}
                  {country.cities.length > 0 && <ChevronRight className="w-4 h-4" />}

                  {/* Submenú: Ciudades */}
                  {openCityMenu === i && (
                    <div className="absolute top-0 left-full bg-white text-black shadow-lg w-48 p-2">
                      {country.cities.map((city, j) => (
                        <div
                          key={j}
                          className="relative px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center justify-between gap-2 text-xs"
                          onMouseEnter={() => setOpenHotelMenu(j)}
                          onMouseLeave={() => setOpenHotelMenu(null)}
                        >
                          {city.title}
                          {city.hotels.length > 0 && <ChevronRight className="w-4 h-4" />}

                          {/* Submenú: Hoteles */}
                          {openHotelMenu === j && (
                            <div className="absolute top-0 left-full bg-white text-black shadow-lg w-48 p-2">
                              {city.hotels.map((hotel, k) => (
                                <div
                                  key={k}
                                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-xs"
                                  onClick={() => navigate(hotel.path)}
                                >
                                  {hotel.title}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
