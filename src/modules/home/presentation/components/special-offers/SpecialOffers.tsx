import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainTitle from "../../../../../shared/components/title/MainTitle";
import MainButton from "../../../../../shared/components/buttons/MainButton";

const offers = [
  { id: 1, image: "banners-web-Compensar.jpg", title: "Descuento exclusivo" },
  {
    id: 2,
    image: "Hoteles-Estelar-Banner-Book.jpg",
    title: "Reserva con beneficios",
  },
  {
    id: 3,
    image: "Hoteles-Estelar-SEMANA-COMPENSAR.jpg",
    title: "Semana especial",
  },
  {
    id: 4,
    image: "Hoteles-Estelar-Semana-Siempre-Estelar.jpg",
    title: "Promoción imperdible",
  },
  {
    id: 5,
    image: "Hoteles-Estelar-Semana-Siempre-Estelar.jpg",
    title: "Promoción imperdible",
  },
];

const SpecialOffers = () => {
  return (
    <div className="bg-white flex p-2 flex-col gap-6">
      <MainTitle>OFERTAS ESPECIALES</MainTitle>

      {/* Contenedor del slider con tamaño máximo */}
      <div className="w-full max-w-[1280px] mx-auto ">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          speed={750}
          navigation={true}
          pagination={{ clickable: true }}
          className="w-full"
          watchOverflow={false} // Forzar que se muestren siempre las flechas
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id} className="relative">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 rounded-2xl">
                <h2 className="text-lg font-bold">{offer.title}</h2>
                <button className="mt-2 px-4 py-2 bg-[#181A1B] hover:bg-blue-600 rounded-lg text-[#96C4F0]">
                  Ver más
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <MainButton>VER TODAS LAS OFERTAS</MainButton>
    </div>
  );
};

export default SpecialOffers;
