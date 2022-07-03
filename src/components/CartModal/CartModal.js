import React from "react";
import Card from "../UI/Card";
import styles from "./CartModal.module.css";
import { CartContext } from "../../Context/CartContext";
import Checkout from "./Checkout";

export default function CartModal(props) {
  const context = React.useContext(CartContext);
  const [loading, setLoading] = React.useState(false);

  function submitOrder(userData) {
    console.log(userData);
    console.log(context.cart);
    fetch("https://react-http-f2651-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({ user: userData, order: context.cart }),
    });
  }

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
          <Checkout submitOrder={submitOrder} />
        </div>
      </Card>
    </>
  );
}
