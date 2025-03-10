import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-sm py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Sección de información legal */}
        <p className="text-center mb-4">
          En desarrollo de lo dispuesto en el artículo 17 de la Ley 679 de 2001, Hoteles Estelar advierte al turista que la explotación y el abuso sexual de menores de edad en el país son sancionados penal y administrativamente, conforme a las leyes vigentes. Prohíbase el expendio de bebidas embriagantes a menores de edad (Ley 124 de 1994). El exceso de alcohol es perjudicial para la salud (Ley 30 de 1986). En Colombia se protege la fauna y flora silvestre, evite su comercialización de forma ilegal (Ley 17 de 1981 y Ley 299 de 1996). En desarrollo con lo dispuesto en la Ley 1185 de 2008, en Colombia se prohíbe el tráfico ilegal de Bienes Culturales. Ley Antitabaco 1335 del 21 de julio de 2009.
        </p>

        {/* Sección de enlaces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-semibold text-lg mb-2">Términos legales</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Aviso Legal</a></li>
              <li><a href="#" className="hover:underline">Política de Tratamiento de Información</a></li>
              <li><a href="#" className="hover:underline">Hoteles Estelar RNT</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Línea Ética</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Hoteles Estelar</a></li>
              <li><a href="#" className="hover:underline">Corficolombiana</a></li>
              <li><a href="#" className="hover:underline">Grupo Aval</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Ayuda</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Contacto</a></li>
              <li><a href="#" className="hover:underline">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:underline">¿Cómo Pagar Tu Reserva Web?</a></li>
              <li><a href="#" className="hover:underline">FAQ’s</a></li>
            </ul>
          </div>
        </div>

        {/* Sección de redes sociales */}
        <div className="text-center mt-6">
          <h3 className="font-semibold text-lg mb-2">Síguenos</h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
          </div>
        </div>

        {/* Sección de ayuda */}
        <div className="text-center mt-6">
          <h3 className="font-semibold text-lg mb-2">¿Necesitas ayuda?</h3>
          <button className="bg-white text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
            Asesor Virtual
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
