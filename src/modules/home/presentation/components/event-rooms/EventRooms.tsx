import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./EventRooms.css"

const EventRooms = () => {
  const eventRooms = [
    {
      id: 1,
      name: "Salón Estelar",
      description: "Ideal para conferencias y eventos corporativos.",
      image: "img/event-halls/HE-hotel-la-fontana-ID-00.webp",
      city: "Buenos Aires",
    },
    {
      id: 2,
      name: "Salón Ejecutivo",
      description: "Un espacio exclusivo para reuniones privadas.",
      image: "img/event-halls/HE-Salones-Cartagena.webp",
      city: "Córdoba",
    },
    {
      id: 3,
      name: "Gran Salón",
      description: "Perfecto para bodas y grandes celebraciones.",
      image: "img/event-halls/HE-Salones-Interncontinental-Cali.png",
      city: "Rosario",
    },
    {
      id: 4,
      name: "Gran Salón",
      description: "Perfecto para bodas y grandes celebraciones.",
      image: "img/event-halls/HE-Salones-Miraflores.webp",
      city: "Mendoza",
    },
    {
      id: 5,
      name: "Gran Salón",
      description: "Perfecto para bodas y grandes celebraciones.",
      image: "img/event-halls/HE-Salones-Paipa.webp",
      city: "Mar del Plata",
    },
    {
      id: 6,
      name: "Gran Salón",
      description: "Perfecto para bodas y grandes celebraciones.",
      image: "img/event-halls/HE-Salones-Santamar.webp",
      city: "San Miguel de Tucumán",
    },
  ];

  return (
    <div className="h-full bg-white py-12">
      {/* 🏷️ Título Principal */}
      <h1 className="text-center text-4xl font-bold text-gray-700 mb-4">
        Nuestros salones para eventos
      </h1>

      {/* 📜 Descripción */}
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-8">
        En Hoteles Estelar encontrarás la mejor opción para realizar tus eventos empresariales y sociales.
        Nuestras instalaciones, experiencia y servicio nos hacen el lugar ideal.
      </p>

      {/* 🎡 Swiper con Responsive */}
      <div className="w-full max-w-5xl mx-auto">
        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="relative w-full max-w-5xl mx-auto"
        >
          {eventRooms.map((room) => (
            <SwiperSlide key={room.id} className="flex flex-col items-center  shadow-lg rounded-xl overflow-hidden">
              <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
              <div className="text-center p-3">
                <h2 className="text-xl font-semibold text-gray-800">{room.name}</h2>
                <p className="text-gray-600 text-sm mt-1">{room.description}</p>
                <p className="text-gray-600 text-sm mt-1 font-semibold text-primary">{room.city}</p>
              </div>
            </SwiperSlide>
          ))}
          {/* Ajustamos la paginación */}
          {/* <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10">
            <div className="swiper-pagination"></div>
          </div> */}
        </Swiper>

      </div>
    </div>
  );
};

export default EventRooms;
