import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Venues from "./pages/Venues.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

const router = createBrowserRouter({
  routes: [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <App /> },
        {
          path: "venues",
          element: <Venues />,
        },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
