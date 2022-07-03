import React from "react";
import { CartContext } from "../../Context/CartContext";
import Button from "../UI/Button";
import CartItem from "./CartItem";

export default function Checkout(props) {
  const context = React.useContext(CartContext);
  const [formData, setFormData] = React.useState({
    name: "",
    creditNum: null,
    security: null,
    totalCost: context.totalCost,
  });
  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
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
      <form>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="First and Last Name"
            value={formData.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="creditNum">Credit Card </label>
          <input
            type="number"
            id="creditNum"
            name="creditNum"
            placeholder="5555 5555 5555 5555"
            value={formData.creditnum}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="security">Security #</label>
          <input
            type="number"
            id="security"
            value={formData.security}
            onChange={changeHandler}
            placeholder="555"
            name="security"
          />
        </div>
      </form>
      <p>Total Cost: ${context.totalCost}</p>
      <Button onClick={() => props.submitOrder(formData)}>Checkout</Button>
    </>
  );
}
