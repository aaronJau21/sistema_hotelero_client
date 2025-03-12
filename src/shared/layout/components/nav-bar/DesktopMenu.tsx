import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuItems } from "./MenuItem";

const DesktopMenu = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null); // Países
  const [openCityMenu, setOpenCityMenu] = useState(null); // Ciudades
  const [openHotelMenu, setOpenHotelMenu] = useState(null); // Hoteles
  const navigate = useNavigate();

  return (
    <ul className="hidden md:flex ml-auto space-x-6 relative">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="relative"
          onMouseEnter={() => {
            setOpenSubmenu(index);
            setOpenCityMenu(null); // Cierra submenús anteriores
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
          <span className="hover:text-gray-300 text-sm cursor-pointer">{item.title}</span>

          {/* Submenú: Países */}
          {item.subItems.length > 0 && openSubmenu === index && (
            <div className="absolute top-full left-0 bg-white text-black shadow-lg w-48 p-2">
              {item.subItems.map((country, i) => (
                <div
                  key={i}
                  className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onMouseEnter={() => {
                    setOpenCityMenu(i);
                    setOpenHotelMenu(null); // Evita que los hoteles se abran al mismo tiempo
                  }}
                >
                  {country.title}

                  {/* Submenú: Ciudades */}
                  {openCityMenu === i && (
                    <div className="absolute top-0 left-full bg-white text-black shadow-lg w-48 p-2">
                      {country.cities.map((city, j) => (
                        <div
                          key={j}
                          className="relative px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          onMouseEnter={() => setOpenHotelMenu(j)}
                          onMouseLeave={() => setOpenHotelMenu(null)}
                        >
                          {city.title}

                          {/* Submenú: Hoteles */}
                          {openHotelMenu === j && (
                            <div className="absolute top-0 left-full bg-white text-black shadow-lg w-48 p-2">
                              {city.hotels.map((hotel, k) => (
                                <div
                                  key={k}
                                  className="px-4 py-2 hover:bg-gray-300 cursor-pointer"
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
