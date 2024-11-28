import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";
//import About from "./components/About";
//import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const apiRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Body /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true, // Handles revalidation after 4xx/5xx responses
      v7_partialHydration: true,           // Enables partial hydration
      v7_normalizeFormMethod: true,        // Normalizes formMethod casing
    },
  }
);
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={apiRouter} />);

