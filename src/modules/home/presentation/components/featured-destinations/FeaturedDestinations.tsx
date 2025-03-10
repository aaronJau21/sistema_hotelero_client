import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import MainTitle from "../../../../../shared/components/title/MainTitle";
import MainButton from "../../../../../shared/components/buttons/MainButton";

const FeaturedDestinations = () => {
  const images = [
    "Destinos-Destacados-Colombia.webp",
    "Destinos-Destacados-Peru.webp",
    "Destinos-Destacados-Colombia.webp",
    "Destinos-Destacados-Peru.webp",
  ];

  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center bg-gray-200 p-2 gap-4">
      {/* Columna Izquierda */}
      <div className="w-full md:w-1/2 flex flex-col gap-8">
        <MainTitle>
          Destinos Destacados
        </MainTitle>
        <div className="flex flex-col gap-4">
          <p className="text-center text-md text-gray-700 p-2">
            El Placer de Descubrir Colombia y Perú con Hoteles Estelar
          </p>
          <MainButton>
              VER TODOS LOS DESTINOS →
          </MainButton>
        </div>
      </div>

      {/* Columna Derecha - Swiper Vertical Infinito */}
      <div className="w-full md:w-1/2 h-96 overflow-hidden">
        <Swiper
          direction="vertical"
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          speed={1600} // ⏩ Aumenta la duración del desplazamiento para suavidad
          autoplay={{
            delay: 0, // 🚀 Evita pausas
            disableOnInteraction: false,
          }}
          allowTouchMove={false} // ✋ Evita que el usuario interrumpa el movimiento
          modules={[Autoplay]}
          className="h-full"
        >
          {images.concat(images).map(
            (
              image,
              index // 🔄 Duplicamos imágenes para el loop
            ) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Destino ${index + 1}`}
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedDestinations;
