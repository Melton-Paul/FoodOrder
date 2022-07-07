import React, { useCallback } from "react";
import { CartContext } from "../../Context/CartContext";
import Button from "../UI/Button";
import CartItem from "./CartItem";
import UseInput from "../hooks/use-input";

export default function Checkout(props) {
  const context = React.useContext(CartContext);
  const {
    value: nameValue,
    hasError: nameError,
    changeHandler: nameHandler,
    blurHandler: nameBlur,
    reset: nameReset,
    isValid: nameValid,
  } = UseInput((value) => value.trim().length > 0);
  const {
    value: cardValue,
    hasError: cardError,
    changeHandler: cardHandler,
    blurHandler: cardBlur,
    reset: cardReset,
    isValid: cardValid,
  } = UseInput((value) => value > 0);
  const {
    value: securityValue,
    hasError: securityError,
    changeHandler: securityHandler,
    blurHandler: securityBlur,
    reset: securityReset,
    isValid: securityValid,
  } = UseInput((value) => value > 0);

  const [formData, setFormData] = React.useState({
    name: nameValue,
    creditNum: cardValue,
    security: securityValue,
    totalCost: context.totalCost,
  });

  const formValid = nameValid && cardValid && securityValid;

  function submitOrder(e) {
    e.preventDefault();
    if (!formValid) {
      return;
    }
    fetch("https://react-http-f2651-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({ user: formData, order: context.cart }),
    });
    securityReset();
    nameReset();
    cardReset();
    context.cartReset();
    setFormData({
      name: "",
      creditNum: 0,
      security: 0,
      totalCost: context.totalCost,
    });
  }

  const cartHtml =
    context.cart.length > 0 ? (
      context.cart.map((cartItem) => {
        return (
          <CartItem
            title={cartItem.title}
            cost={cartItem.cost}
            amount={cartItem.amount}
          />
        );
      })
    ) : (
      <p>No Items in your cart yet!</p>
    );

  return (
    <>
      {cartHtml}
      <form onSubmit={submitOrder}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="First and Last Name"
            value={nameValue}
            onChange={nameHandler}
            onBlur={nameBlur}
          />
          {nameError && <p>Please enter a valid name.</p>}
        </div>
        <div>
          <label htmlFor="creditNum">Credit Card </label>
          <input
            type="number"
            id="creditNum"
            name="creditNum"
            placeholder="5555 5555 5555 5555"
            value={cardValue}
            onChange={cardHandler}
            onBlur={cardBlur}
          />
          {cardError && <p>Please enter a valid card number.</p>}
        </div>
        <div>
          <label htmlFor="security">Security #</label>
          <input
            type="number"
            id="security"
            value={securityValue}
            onChange={securityHandler}
            onBlur={securityBlur}
            placeholder="555"
            name="security"
          />
          {securityError && <p>Please enter a valid security number.</p>}
        </div>
        <Button>Checkout</Button>
      </form>
      <p>Total Cost: ${context.totalCost}</p>
    </>
  );
}
