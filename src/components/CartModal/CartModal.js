import React from "react";
import Card from "../UI/Card";
import styles from "./CartModal.module.css";
import { CartContext } from "../../Context/CartContext";
import Checkout from "./Checkout";

export default function CartModal(props) {
  const context = React.useContext(CartContext);

  return (
    <>
      <div
        onClick={() => context.setCartOpen(false)}
        className={styles["cartModal-background"]}
      ></div>
      <Card className={styles.cartModal}>
        <div className={styles["cartModal-header"]}>
          <h1>Cart</h1>
          <p className={styles.btn} onClick={() => context.setCartOpen(false)}>
            X
          </p>
        </div>
        <div className={styles["cartModal-body"]}>
          <Checkout />
        </div>
      </Card>
    </>
  );
}
