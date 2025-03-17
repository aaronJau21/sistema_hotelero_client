import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../data/MenuItem";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";

const MobileMenu = () => {
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const [isSheetOpen, setIsSheetOpen] = useState(false); // Estado para controlar el Sheet

  // Función para expandir/cerrar un menú
  const toggleMenu = (key: string) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Función para navegar y cerrar el menú
  const handleNavigate = (path: string) => {
    navigate(path);
    setIsSheetOpen(false); // Cierra el modal después de la navegación
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger className="lg:hidden ml-auto text-2xl" onClick={() => setIsSheetOpen(true)}>
        ☰
      </SheetTrigger>
      <SheetContent side="left" className="bg-[#0B2650] text-white p-4">
        <DialogTitle className="text-lg font-semibold">Menu</DialogTitle>
        <DialogDescription className="text-sm text-gray-300"></DialogDescription>

        <ul className="flex flex-col mt-4">
          {menuItems.map((item, index) => (
            <li key={index} className="border-t border-gray-600">
              <div
                className="flex items-center justify-between cursor-pointer p-3 hover:bg-gray-800 rounded"
                onClick={() => (item.subItems.length === 0 ? handleNavigate(item.path) : toggleMenu(item.title))}
              >
                <span>{item.title}</span>
                {item.subItems.length > 0 && (openMenus[item.title] ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
              </div>

              {/* Submenús expandibles */}
              {openMenus[item.title] && (
                <ul className="pl-4 space-y-1 border-t border-gray-700">
                  {item.subItems.map((country, i) => (
                    <li key={i} className="border-t border-gray-700">
                      <div
                        className="flex items-center justify-between cursor-pointer p-3 hover:bg-gray-700 rounded"
                        onClick={() => (country.cities.length === 0 ? handleNavigate(country.path) : toggleMenu(country.title))}
                      >
                        <span>{country.title}</span>
                        {country.cities.length > 0 && (openMenus[country.title] ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                      </div>

                      {/* Ciudades expandibles */}
                      {openMenus[country.title] && (
                        <ul className="pl-4 space-y-1 border-t border-gray-600">
                          {country.cities.map((city, j) => (
                            <li key={j} className="border-t border-gray-600">
                              <div
                                className="flex items-center justify-between cursor-pointer p-3 hover:bg-gray-600 rounded"
                                onClick={() => (city.hotels.length === 0 ? handleNavigate(city.path) : toggleMenu(city.title))}
                              >
                                <span>{city.title}</span>
                                {city.hotels.length > 0 && (openMenus[city.title] ? <ChevronUp size={14} /> : <ChevronDown size={14} />)}
                              </div>

                              {/* Hoteles (Redirigen al hacer clic) */}
                              {openMenus[city.title] && (
                                <ul className="pl-4 space-y-1 border-t border-gray-500">
                                  {city.hotels.map((hotel, k) => (
                                    <li
                                      key={k}
                                      className="cursor-pointer p-3 hover:bg-gray-500 rounded border-t border-gray-500"
                                      onClick={() => handleNavigate(hotel.path)}
                                    >
                                      {hotel.title}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
