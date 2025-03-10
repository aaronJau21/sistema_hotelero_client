import { useState, useEffect } from "react";

const Hero = () => {
  const [imageSrc, setImageSrc] = useState("/img/banner/HE-Inicio-Banner-Principal-01.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc("/img/banner/HE-Inicio-Banner-Principal-Mobile-01.jpg");
      } else {
        setImageSrc("/img/banner/HE-Inicio-Banner-Principal-01.png");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <img src={imageSrc} alt="Banner" className="w-full" />
    </div>
  );
};

export default Hero;
