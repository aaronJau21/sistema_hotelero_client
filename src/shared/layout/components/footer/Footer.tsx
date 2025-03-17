import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Facebook, FacebookIcon, Instagram, InstagramIcon, MessageSquareMore, Twitter, TwitterIcon } from "lucide-react";

const Footer = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Se activa solo una vez
    threshold: 0.5, // Se activa cuando el 50% del elemento es visible
  });

  return (
    <footer className="bg-primary text-white text-sm px-4 sm:px-6 py-4 flex flex-col gap-12">
      <div className="flex flex-col items-center p-4 md:p-14">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-[#617695] rounded-xl p-6 w-full max-w-4xl">
          <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-xl p-6 py-10">
            <div className="text-6xl text-primary font-bold">
              {inView && <CountUp start={0} end={25} duration={2.5} />}
            </div>
            <p className="text-gray-400 font-bold text-center">HOTELES EN COLOMBIA Y PERÚ</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-xl p-6 py-10">
            <div className="text-6xl text-primary font-bold">
              {inView && <CountUp start={0} end={2965} duration={3} />}
            </div>
            <p className="text-gray-400 font-bold text-center">HABITACIONES</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-xl p-6 py-10">
            <div className="text-6xl text-primary font-bold">
              {inView && <CountUp start={0} end={32} duration={2.5} />}
            </div>
            <p className="text-gray-400 font-bold text-center">RESTAURANTES</p>
          </div>
        </div>
      </div>

      {/* Sección de información legal */}
      <div className="flex flex-col items-center lg:flex-row  gap-6 px-6">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div className="text-2xl font-bold">Estelar</div>
          <p className="text-center">
            En desarrollo de lo dispuesto en el artículo 17 de la Ley 679 de 2001, Hoteles Estelar advierte al turista que la explotación y el abuso sexual de menores de edad en el país son sancionados penal y administrativamente, conforme a las leyes vigentes. Prohíbase el expendio de bebidas embriagantes a menores de edad (Ley 124 de 1994). El exceso de alcohol es perjudicial para la salud (Ley 30 de 1986). En Colombia se protege la fauna y flora silvestre, evite su comercialización de forma ilegal (Ley 17 de 1981 y Ley 299 de 1996). En desarrollo con lo dispuesto en la Ley 1185 de 2008, en Colombia se prohíbe el tráfico ilegal de Bienes Culturales. Ley Antitabaco 1335 del 21 de julio de 2009.
          </p>
        </div>

        {/* Sección de enlaces */}
        <div className="lg:w-1/2 grid grid-cols-1 grid-xs-3 gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg text-center">Términos legales</h3>
            <ul className="list-disc list-outside space-y-1 pl-5">

              <li><a href="#" className="hover:underline">Aviso Legal</a></li>
              <li><a href="#" className="hover:underline">Política de Tratamiento de Información</a></li>
              <li><a href="#" className="hover:underline">Hoteles Estelar RNT</a></li>
              <li><a href="#" className="hover:underline">Línea Ética – Hoteles Estelar</a></li>
              <li><a href="#" className="hover:underline">Línea Ética – Corficolombiana</a></li>
              <li><a href="#" className="hover:underline">Línea Ética – Grupo Aval</a></li>
              <li><a href="#" className="hover:underline">Política Menores De Edad</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg text-center">Ayuda</h3>
            <ul className=" space-y-1 pl-10">
              <li><a href="#" className="hover:underline">Contacto</a></li>
              <li><a href="#" className="hover:underline">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:underline">¿Cómo Pagar Tu Reserva Web?</a></li>
              <li><a href="#" className="hover:underline">FAQ’s</a></li>
            </ul>
          </div>

          {/* Sección de redes sociales */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg text-center">Síguenos</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de ayuda */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-evenly gap-2 ">
        <h3 className="font-semibold text-lg">¿Necesitas ayuda?</h3>
        <div>
          <MessageSquareMore />
        </div>
        <div className="font-semibold text-lg">
          Asesor Virtual
        </div>
      </div>

      {/* Sección de líneas de contacto */}
      <div className="mx-auto flex flex-col gap-2 border-y-3 py-6 ">

        {/* Contenedor en columna por defecto, en fila desde sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-md">
          {/* Primer bloque */}

          <div className="flex flex-col gap-4 sm:border-r-3 pr-10">
            <h3 className="font-semibold text-lg">Líneas de Contacto Estelar</h3>
            <p>Línea gratuita en Colombia: 01 8000 97 8000</p>
            <p>En Bogotá: (601) 608 8080 – (601) 743 3777</p>
            <p>Línea WhatsApp para ventas: +57 3166926704</p>
          </div>

          {/* Segundo bloque */}
          <div className="flex flex-col gap-4 sm:mt-11">
            <p>Línea gratuita en Perú: 0800 25555</p>
            <p>En Lima: (51-1) 200 5555</p>
            <p>Usuarios Claro y Movistar desde su celular: #680</p>
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="text-center text-lg">
        <p>Todos los derechos reservados &copy; Hoteles Estelar 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
