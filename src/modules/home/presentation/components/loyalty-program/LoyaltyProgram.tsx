
const LoyaltyProgram = () => {
  return (
    <div className="w-full h-full p-4">
      <div className="w-full h-full relative">
        {/* Imagen de fondo */}
        <img
          src="Hoteles-Estelar-HSE-Banner-Viernes-de-Escape.jpg"
          alt="Hoteles-Estelar-HSE-Banner-Viernes-de-Escape"
          className="w-full h-[700px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-full object-cover rounded-2xl"
        />

        {/* Contenido sobre la imagen */}
        <div className="absolute inset-0 flex flex-col justify-center text-white rounded-2xl"
          style={{
            background: "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4))",
          }}>
          <div className="w-full lg:w-1/2 px-5 md:px-10 lg:px-20">
            {/* <MainTitle className="mb-5"></MainTitle> */}
            <div className="relative flex flex-col items-start mb-5">
              <h1 className="p-2 text-3xl font-semibold text-white">
                PROGRAMA DE LEALTAD
              </h1>
              <div className="w-[25%] h-[2.5px] mt-2 rounded-full bg-white" />
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-md">
                  Huésped Siempre Estelar es el programa de lealtad de Hoteles
                  Estelar, creado para premiar la fidelidad de sus clientes. Al
                  unirte de manera gratuita, podrás disfrutar de beneficios
                  exclusivos como:
                </p>
                <p className="text-md font-semibold">
                  1. Acumular estrellas en cada estadía para canjearlas en tu
                  próxima visita
                </p>
                <p className="text-md font-semibold">
                  2. Acumular estrellas en cada estadía para canjearlas en tu
                  próxima visita
                </p>
                <p className="text-md font-semibold">
                  3. Disfrutar de beneficios especiales en eventos en
                  restaurantes
                </p>
              </div>

              {/* Botones */}
              <div className="flex flex-col justify-start items-start sm:flex-row gap-4">
                <button className="px-6 py-3 bg-white border-2 border-primary text-primary rounded-3xl hover:bg-blue-600">
                  SUSCRÍBETE →
                </button>
                <button className="px-6 py-3 bg-white border-2 border-primary text-primary rounded-3xl hover:bg-blue-600">
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
