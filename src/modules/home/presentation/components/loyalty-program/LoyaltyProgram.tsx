import MainTitle from "../../../../../shared/components/title/MainTitle";

const LoyaltyProgram = () => {
  return (
    <div className="w-full h-full p-2">
      <div className="w-full h-full relative">
        {/* Imagen de fondo */}
        <img
          src="Hoteles-Estelar-HSE-Banner-Viernes-de-Escape.jpg"
          alt="Hoteles-Estelar-HSE-Banner-Viernes-de-Escape"
          className="w-full h-[700px] object-cover rounded-2xl"
        />

        {/* Contenido sobre la imagen */}
        <div className=" absolute inset-0 flex flex-col  justify-center text-white bg-black/50 rounded-2xl p-6 ">
          <div className="w-full lg:w-1/2">
            <MainTitle className="text-left">PROGRAMA DE LEALTAD</MainTitle>
            <div className="flex flex-col  gap-6">
              <div className="flex flex-col  gap-4">
                <p className="text-md">
                  Huésped Siempre Estelar es el programa de lealtad de Hoteles
                  Estelar, creado para premiar la fidelidad de sus clientes. Al
                  unirte de manera gratuita, podrás disfrutar de beneficios
                  exclusivos como:
                </p>
                <p className="text-md">
                  1. Acumular estrellas en cada estadía para canjearlas en tu
                  próxima visita
                </p>
                <p className="text-md">
                  2. Acumular estrellas en cada estadía para canjearlas en tu
                  próxima visita
                </p>
                <p className="text-md">
                  3. Disfrutar de beneficios especiales en eventos en
                  restaurantes
                </p>
              </div>

              {/* Botones */}
              <div className="flex flex-col justify-start items-start sm:flex-row gap-4">
                <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
                  SUSCRÍBETE →
                </button>
                <button className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600">
                  INGRESA →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;
