import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";
import MicaDetails from "./pages/MicaDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "products/:productId", Component: ProductDetail },
      { path: "quality", Component: Quality },
      { path: "contact", Component: Contact },
      { path: "mica-details", Component: MicaDetails },
    ],
  },
]);
