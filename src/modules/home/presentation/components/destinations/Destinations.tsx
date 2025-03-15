import MainButton from "../../../../../shared/components/buttons/MainButton";
import MainTitle from "../../../../../shared/components/title/MainTitle";

const Destinations = () => {
  const data = [
    {
      id: 1,
      image: "Destinos-Destacados-Colombia.webp",
      title: "Colombia",
      hotelNumbers: 22,
    },
    {
      id: 2,
      image: "Destinos-Destacados-Peru.webp",
      title: "Perú",
      hotelNumbers: 3,
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center items-center bg-white p-2">
      <div className="w-full flex flex-col items-center gap-8">
        {/* Título */}
        <MainTitle>DESTINOS</MainTitle>

        {/* Contenedor de imágenes */}
        <div className="w-full flex justify-center items-center flex-col lg:flex-row  gap-6">
          {data.map((destination) => (
            <div key={destination.id} className="relative h-60">
              {/* Imagen */}
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Texto y Botón dentro de la imagen */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-40 rounded-xl gap-3">
                <p className="text-white text-2xl font-semibold">
                  {destination.title}
                </p>
                <MainButton>
                  {destination.hotelNumbers} Hoteles →
                </MainButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
