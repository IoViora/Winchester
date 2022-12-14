import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import AboutUsPage from "../pages/AboutUsPage";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import ContactUsPage from "../pages/ContactUsPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";
const MainRoutes = () => {
  // const {user} =useAuth()
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/notFound", element: <NotFound />, id: 2 },
    { link: "/contactus", element: <ContactUsPage />, id: 3 },
    { link: "/aboutus", element: <AboutUsPage />, id: 4 },
    { link: "/auth", element: <AuthPage />, id: 5 },
    { link: "/cart", element: <CartPage />, id: 6 },
    { link: "/adproduct", element: <AdminPage />, id: 7 },
    { link: "*", element: <NotFoundPage />, id: 8 },
    { link: "/products", element: <ProductsPage />, id: 9 },
    { link: "/products/:id", element: <ProductDetailsPage />, id: 10 },
    { link: "/edit/:id", element: <EditProductPage />, id: 11 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
