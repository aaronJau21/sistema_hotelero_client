const Navbar = () => {
  return (
    <nav className="w-full h-[60px] bg-[#0B2650] fixed top-0 left-0 z-50 shadow-md flex items-center px-6 text-white">
      <div className="text-xl font-bold">Estelar</div>

      <ul className="hidden md:flex ml-auto space-x-6">
        <li><a href="#" className="hover:text-gray-300 text-sm">Destinos</a></li>
        <li><a href="#" className="hover:text-gray-300 text-sm">Ofertas</a></li>
        <li><a href="#" className="hover:text-gray-300 text-sm">Salones y Centros</a></li>
        <li><a href="#" className="hover:text-gray-300 text-sm">Huésped Siempre Estelar</a></li>
        <li><a href="#" className="hover:text-gray-300 text-sm">Restaurantes</a></li>
        <li><a href="#" className="hover:text-gray-300 text-sm">Nosotros</a></li>
        <li><a href="#" className="hover:text-gray-300 text-sm">B2B</a></li>
        <li><a href="#" className="hover:text-gray-300 text-sm">FAQS</a></li>
      </ul>

      {/* Menú Responsive (Mobile) */}
      <button className="md:hidden ml-auto text-2xl">☰</button>
    </nav>
  );
};

export default Navbar;
