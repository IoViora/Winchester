import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import NavbarContextProvider from "./contexts/NavbarContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartContextProvider>
      <ProductContextProvider>
        <AuthContextProvider>
          <NavbarContextProvider>
            <App />
          </NavbarContextProvider>
        </AuthContextProvider>
      </ProductContextProvider>
    </CartContextProvider>
  </BrowserRouter>
);
