import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../shared/layout/MainLayout";
import Home from "../modules/home/presentation/Home";
import HotelPage from "@/modules/hotel/HotelPage";
import FAQSPage from "@/modules/FAQS/FAQSPage";
import B2BPage from "@/modules/B2B/B2BPage";
import AboutUsPage from "@/modules/AboutUs/AboutUsPage";
import RestaurantsPage from "@/modules/Restaurants/RestaurantsPage";
import HallsAndCentersPage from "@/modules/HallsAndCenters/HallsAndCentersPage";
import OffersPage from "@/modules/Offers/OffersPage";
import StarGuestPage from "@/modules/StarGuest/StarGuestPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "destinos/:pais/:ciudad/:hotelName", element: <HotelPage /> },
      { path: "ofertas", element: <OffersPage /> },
      { path: "salones-centros", element: <HallsAndCentersPage /> },
      { path: "huesped-siempre-estelar", element: <StarGuestPage /> },
      { path: "restaurantes", element: <RestaurantsPage /> },
      { path: "nosotros", element: <AboutUsPage /> },
      { path: "b2b", element: <B2BPage /> },
      { path: "faqs", element: <FAQSPage /> },
      { path: "*", element: <h1>404 Not Found</h1> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
