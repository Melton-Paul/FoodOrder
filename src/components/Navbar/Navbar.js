import React from "react";
import styles from "./Navbar.module.css";
import { CartContext } from "../../Context/CartContext";

function Navbar(props) {
  const inCart = React.useContext(CartContext);

  return (
    <div className={styles.navbar}>
      <h1 className={styles["navbar-brand"]}>ReactMeals</h1>
      <div
        className={styles["navbar-button"]}
        onClick={() => inCart.setCartOpen(true)}
      >
        <i className="fa fa-sun"></i>
        <span>Your Cart</span>
        <span className={styles["navbar-button__cart"]}>
          {inCart.cart.length}
        </span>
      </div>
    </div>
  );
}
export default Navbar;
