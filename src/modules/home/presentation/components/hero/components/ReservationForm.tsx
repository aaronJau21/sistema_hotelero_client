import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

const ReservationForm = () => {
  const [selectedHotel, setSelectedHotel] = useState("");
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const hotels = ["Hotel Estelar Bogotá", "Hotel Estelar Cartagena", "Hotel Estelar Medellín"];
  const filteredHotels = hotels.filter((hotel) =>
    hotel.toLowerCase().includes(inputValue.toLowerCase())
  );

  const menuRef = useRef<HTMLDivElement>(null);

  // Manejo de clics fuera del input y la lista
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mx-auto flex flex-col xl:flex-row gap-4 p-6 rounded-xl shadow-lg bg-white  ">

      {/* Selección de Hotel */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full" ref={menuRef}>
          <label htmlFor="">Selecciona un hotel:</label>
          <Input
            className="text-center"
            placeholder="Buscar un hotel..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
          />
          {isOpen && filteredHotels.length > 0 && (
            <div className="absolute w-full bg-white border rounded-md shadow-md mt-1 z-10">
              {filteredHotels.map((hotel, index) => (
                <div
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setSelectedHotel(hotel);
                    setInputValue(hotel);
                    setIsOpen(false);
                  }}
                >
                  {hotel}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Check-in & Check-out */}
        <div className="flex flex-col space-x-2">
          <label htmlFor="">Check In / Check Out:</label>
          <div className="flex gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">{checkIn ? format(checkIn, "dd/MM/yyyy") : "Check-in"}</Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">{checkOut ? format(checkOut, "dd/MM/yyyy") : "Check-out"}</Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>


      {/* Viajeros */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col">
          <label htmlFor="">Viajeros:</label>
          <div className="flex gap-2  items-center">
            <span>Adultos</span>
            <Button variant="outline" onClick={() => setAdults(Math.max(1, adults - 1))}>-</Button>
            <span>{adults}</span>
            <Button variant="outline" onClick={() => setAdults(adults + 1)}>+</Button>
            <span>Niños</span>
            <Button variant="outline" onClick={() => setChildren(Math.max(0, children - 1))}>-</Button>
            <span>{children}</span>
            <Button variant="outline" onClick={() => setChildren(children + 1)}>+</Button>
          </div>
        </div>

        {/* Código de Descuento */}
        <div>
          <label htmlFor="">Código de descuento:</label>
          <Input className="text-center" placeholder="Ingresa tu código" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} />
        </div>
      </div>

      {/* Botón de Buscar */}
      <div className="w-full flex xl:w-[100px]">
        <Button className="w-full" onClick={() => console.log({ selectedHotel, checkIn, checkOut, adults, children, discountCode })}>
          Buscar
        </Button>
      </div>

    </div>
  );
};

export default ReservationForm;
