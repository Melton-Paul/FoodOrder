import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CartContextProvider from "./Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);
