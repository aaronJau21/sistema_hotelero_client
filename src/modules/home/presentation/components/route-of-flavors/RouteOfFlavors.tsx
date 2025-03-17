import MainTitle from "@/shared/components/title/MainTitle";

const RouteOfFlavors = () => {
  const restaurants = [
    {
      id: 1,
      name: "Fiola Trattoria",
      description:
        "¡La calidez de Italia a un bocado de distancia! Ubicado en Hotel ESTELAR Calle 100, Calle 100 No. 14-46 Bogotá – Colombia.",
      image: "/img/route-of-flavours/HE-Restaunte-Fiola-Trattoria.webp",
    },
    {
      id: 2,
      name: "Gare 93 Restaurante",
      description:
        "New American is the New Black. Ubicado en el Hotel Estelar Parque de la 93, Calle 93 No. 11-19 Bogotá-Colombia.",
      image: "/img/route-of-flavours/HE-Restaurante-Gare-93-01.webp",
    },
    {
      id: 3,
      name: "Maki Bar",
      description:
        "Influencias orientales creadas para encantar tus sentidos. Ubicado en Estelar La Fontana, Av Calle 127 No. 15a-10 Bogotá-Colombia.",
      image: "/img/route-of-flavours/HE-Slider-Restaurantes-Bogota-03.webp",
    },
    {
      id: 4,
      name: "Plaza Café",
      description:
        "El placer de darle pausa al día para disfrutar la magia de una opción ligera. Ubicado en Estelar La Fontana, Av Calle 127 No. 15a-10 Bogotá-Colombia.",
      image: "/img/route-of-flavours/HE-Restaunte-Plaza-Cafe.webp",
    },
    {
      id: 5,
      name: "Maki Bar",
      description:
        "Influencias orientales creadas para encantar tus sentidos. Ubicado en Estelar La Fontana, Av Calle 127 No. 15a-10 Bogotá-Colombia.",
      image: "/img/route-of-flavours/HE-Restaurante-Kuzina-01.webp",
    },
    {
      id: 6,
      name: "Plaza Café",
      description:
        "El placer de darle pausa al día para disfrutar la magia de una opción ligera. Ubicado en Estelar La Fontana, Av Calle 127 No. 15a-10 Bogotá-Colombia.",
      image: "/img/route-of-flavours/HE-Restaunte-Tonnarello.webp",
    },
  ];

  return (
    <div className="h-full bg-gray-200 py-12">
      {/* 🏷️ Título Principal */}
      <MainTitle className="text-center text-4xl font-bold text-gray-700 mb-8">
        LA RUTA DE LOS SABORES
      </MainTitle>

      {/* 📌 Grid de Restaurantes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 ">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="flex flex-col items-center shadow-lg rounded-xl  overflow-hidden bg-white">
            {/* 📸 Imagen */}
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-[100px] object-cover"
            />
            <div className="text-center p-3">
              {/* 🏷️ Nombre */}
              <h2 className="mt-1 text-xl text-gray-800 text-center text-primary">
                {restaurant.name}
              </h2>
              {/* 📄 Descripción */}
              <p className="text-gray-600 text-center text-sm px-4 mt-2">
                {restaurant.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteOfFlavors;
