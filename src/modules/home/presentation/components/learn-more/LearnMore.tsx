import MainButton from "../../../../../shared/components/buttons/MainButton";
import MainTitle from "../../../../../shared/components/title/MainTitle";

const LearnMore = () => {
  return (
    <div className="w-full bg-gray-200 flex flex-col lg:flex-row p-4">
      <div className="lg:w-1/2 flex flex-col justify-center items-center p-4">
        <div className="mb-5">
          <MainTitle>Hoteles Estelar, el placer de descubrir Colombia y Perú</MainTitle>
        </div>
        <div className="p-2 text-center lg:text-left">
          En Hoteles Estelar contamos con más de 50 años de experiencia en la industria hotelera, siempre comprometidos con la excelencia y con un equipo que trabaja bajo los más altos estándares de servicio. Nuestra promesa de valor, «El Placer de Descubrir», refleja el enfoque en brindar una hospitalidad auténtica y 100% colombiana.
        </div>
        <div>
          <MainButton>CONOCE MÁS →</MainButton>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-wrap gap-2 p-2">
        <img className="object-cover w-full lg:w-[calc(50%-4px)] h-[150px] rounded-2xl" src="https://www.hotelesestelar.com/wp-content/uploads/2024/09/Imagen-2-scaled.webp" alt="" />
        <img className="object-cover w-full lg:w-[calc(50%-4px)] h-[150px] rounded-2xl" src="https://www.hotelesestelar.com/wp-content/uploads/2024/09/Background-scaled.webp" alt="" />
        <img className="object-cover w-full lg:w-full h-[150px] rounded-2xl" src="https://www.hotelesestelar.com/wp-content/uploads/2024/09/Imagen-4-scaled.webp" alt="" />
      </div>
    </div>

  );
};

export default LearnMore;
