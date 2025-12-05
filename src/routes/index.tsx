import { useRoutes } from "react-router-dom";
import Landing from "@/pages/Landing";
import AboutUs from "@/sections/AboutUs";
import Layout from "@/layout/Layout";

export default function AppRoutes() {
  const allRoutes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/about-us", element: <AboutUs /> },
      ],
    },
  ];
  return useRoutes(allRoutes);
}
