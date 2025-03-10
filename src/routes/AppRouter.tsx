import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../shared/layout/MainLayout";
import Home from "../modules/home/presentation/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "login", element: <Login /> },
      // { path: "register", element: <Register /> },
      // { path: "profile", element: <Profile /> },
      { path: "*", element: <h1>404 Not Found</h1> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}