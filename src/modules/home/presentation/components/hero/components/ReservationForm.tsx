import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Search } from "lucide-react";

const ReservationForm = () => {
  const [selectedHotel, setSelectedHotel] = useState("");
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [isHotelListOpen, setIsHotelListOpen] = useState(false);
  const [isTravelersPopoverOpen, setIsTravelersPopoverOpen] = useState(false);

  const hotels = ["Hotel Estelar Bogotá", "Hotel Estelar Cartagena", "Hotel Estelar Medellín"];

  const filteredHotels = hotels.filter((hotel) => hotel.toLowerCase().includes(inputValue.toLowerCase()));

  const menuRef = useRef<HTMLDivElement>(null);

  // Manejo de clics fuera del input de hoteles
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsHotelListOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mx-auto flex flex-col lg:flex-row gap-8 p-6 rounded-xl border border-gray-300 shadow-sm bg-white w-[400px] md:w-[600px] lg:w-auto ">

      {/* Selección de Hotel */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/2 flex flex-col gap-2" ref={menuRef}>
          <label className="text-sm font-bold">Selecciona un hotel:</label>
          <Input
            className="text-center  placeholder:text-xs"
            style={{ fontSize: "0.75rem" }}
            placeholder="Buscar un hotel..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setIsHotelListOpen(true);
            }}
            onFocus={() => setIsHotelListOpen(true)}
          />
          {isHotelListOpen && filteredHotels.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border rounded-md shadow-md mt-1 z-30">
              <div className="max-h-50 overflow-y-auto">
                {filteredHotels.map((hotel, index) => (
                  <div
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200 text-xs"
                    onClick={() => {
                      setSelectedHotel(hotel);
                      setInputValue(hotel);
                      setIsHotelListOpen(false);
                    }}
                  >
                    {hotel}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Check-in & Check-out */}
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <label className="text-sm font-bold">Check In / Check Out:</label>
          <div className="flex justify-center gap-4">
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
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <label className="text-sm font-bold">Viajeros:</label>
          <Popover open={isTravelersPopoverOpen} onOpenChange={setIsTravelersPopoverOpen}>
            <PopoverTrigger asChild>
              <Input
                readOnly
                className="cursor-pointer text-center w-full"
                value={`Adultos: ${adults}, Niños: ${children}`}
                onClick={() => setIsTravelersPopoverOpen(true)}
              />
            </PopoverTrigger>
            <PopoverContent className="w-full p-4">
              <div className="flex flex-col gap-4">
                {/* Adultos */}
                <div className="flex justify-between items-center gap-2">
                  <span className="text-sm">Adultos</span>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => setAdults(Math.max(0, adults - 1))}>
                      -
                    </Button>
                    <span className="text-sm">{adults}</span>
                    <Button variant="outline" size="sm" onClick={() => setAdults(adults + 1)}>
                      +
                    </Button>
                  </div>
                </div>
                {/* Niños */}
                <div className="flex justify-between items-center">
                  <span className="text-sm">Niños</span>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => setChildren(Math.max(0, children - 1))}>
                      -
                    </Button>
                    <span className="text-sm">{children}</span>
                    <Button variant="outline" size="sm" onClick={() => setChildren(children + 1)}>
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>

          </Popover>
        </div>

        {/* Código de Descuento */}
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <label className="text-sm font-bold">Código de descuento:</label>
          <Input
            className="text-center placeholder:text-xs"
            placeholder="Ingresa tu código"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
        </div>
      </div>

      {/* Botón de Buscar */}
      <div className="w-full lg:w-[100px]">
        <Button
          className="w-full h-full p-4 md:p-6 flex-grow transition-all duration-200 hover:scale-102 active:scale-98"
          onClick={() => console.log({ selectedHotel, checkIn, checkOut, adults, children, discountCode })}
        >
          <Search className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ReservationForm;
