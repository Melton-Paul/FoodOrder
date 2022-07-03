import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import CartModal from "./components/CartModal/CartModal";
import ReactDOM from "react-dom";
import { CartContext } from "./Context/CartContext";

export default function App() {
  const context = React.useContext(CartContext);
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      {context.cartOpen &&
        ReactDOM.createPortal(
          <CartModal />,
          document.getElementById("cartModalRoot")
        )}
      ;
    </>
  );
}
