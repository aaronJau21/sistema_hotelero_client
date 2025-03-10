import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const EventRooms = () => {
  const eventRooms = [
    {
      id: 1,
      name: "Salón Estelar",
      description: "Ideal para conferencias y eventos corporativos.",
      image: "img/event-halls/HE-hotel-la-fontana-ID-00.webp",
    },
    {
      id: 2,
      name: "Salón Ejecutivo",
      description: "Un espacio exclusivo para reuniones privadas.",
      image: "img/event-halls/HE-Salones-Cartagena.webp",
    },
    {
      id: 3,
      name: "Gran Salón",
      description: "Perfecto para bodas y grandes celebraciones.",
      image: "img/event-halls/HE-Salones-Interncontinental-Cali.png",
    },
    {
      id: 4,
      name: "Gran Salón",
      description: "Perfecto para bodas y grandes celebraciones.",
      image: "img/event-halls/HE-Salones-Miraflores.webp",
    },
    {
      id: 5,
      name: "Gran Salón",
      description: "Perfecto para bodas y grandes celebraciones.",
      image: "img/event-halls/HE-Salones-Paipa.webp",
    },
    {
      id: 6,
      name: "Gran Salón",
      description: "Perfecto para bodas y grandes celebraciones.",
      image: "img/event-halls/HE-Salones-Santamar.webp",
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
          className="rounded-xl shadow-lg"
        >
          {eventRooms.map((room) => (
            <SwiperSlide key={room.id} className="flex flex-col items-center p-2">
              <img src={room.image} alt={room.name} className="w-full h-64 object-cover rounded-xl" />
              <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">{room.name}</h2>
                <p className="text-gray-600 text-sm mt-1">{room.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventRooms;
