import { useState, useEffect } from "react";
import ReservationForm from "./components/ReservationForm";

const Hero = () => {
  const [imageSrc, setImageSrc] = useState("/img/banner/HE-Inicio-Banner-Principal-01.png");

  useEffect(() => {
    const handleResize = () => {
      setImageSrc(
        window.innerWidth <= 768
          ? "/img/banner/HE-Inicio-Banner-Principal-Mobile-01.jpg"
          : "/img/banner/HE-Inicio-Banner-Principal-01.png"
      );
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-[700px] md:h-[500px]">
      <img
        src={imageSrc}
        alt="Banner"
        className="w-full h-full object-center object-cover md:object-[center_top]"
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <ReservationForm />
      </div>
    </div>
  );
};

export default Hero;
