export const menuItems = [
  {
    title: "Destinos",
    path: "/destinos",
    subItems: [
      {
        title: "Perú",
        path: "",
        cities: [
          {
            title: "Lima",
            path: "",
            hotels: [
              { title: "Hotel Lima Centro", path: "/destinos/peru/lima/hotel-lima-centro" },
              { title: "Hotel Miraflores", path: "/destinos/peru/lima/hotel-miraflores" },
            ],
          },
          {
            title: "Cusco",
            path: "",
            hotels: [
              { title: "Hotel Cusco Plaza", path: "/destinos/peru/cusco/hotel-cusco-plaza" },
              { title: "Hotel Sacsayhuamán", path: "/destinos/peru/cusco/hotel-sacsayhuaman" },
            ],
          },
          {
            title: "Arequipa",
            path: "",
            hotels: [
              { title: "Hotel Arequipa Colonial", path: "/destinos/peru/arequipa/hotel-arequipa-colonial" },
            ],
          },
        ],
      },
      {
        title: "Argentina",
        path: "",
        cities: [
          {
            title: "Buenos Aires",
            path: "",
            hotels: [
              { title: "Hotel Recoleta", path: "/destinos/argentina/buenos-aires/hotel-recoleta" },
              { title: "Hotel Palermo", path: "/destinos/argentina/buenos-aires/hotel-palermo" },
            ],
          },
          {
            title: "Mendoza",
            path: "",
            hotels: [
              { title: "Hotel Andes", path: "/destinos/argentina/mendoza/hotel-andes" },
            ],
          },
        ],
      },
    ],
  },
  { title: "Ofertas", path: "/ofertas", subItems: [] },
  { title: "Salones y Centros", path: "/salones-centros", subItems: [] },
  { title: "Huésped Siempre Estelar", path: "/huesped-siempre-estelar", subItems: [] },
  { title: "Restaurantes", path: "/restaurantes", subItems: [] },
  { title: "Nosotros", path: "/nosotros", subItems: [] },
  { title: "B2B", path: "/b2b", subItems: [] },
  { title: "FAQS", path: "/faqs", subItems: [] },
];
