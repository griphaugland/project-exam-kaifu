import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Contact from "./pages/Contact";
import NotFoundPage from "./components/NotFoundPage";
import About from "./pages/About";
import Venues from "./pages/Venues";

const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
