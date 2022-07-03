import React from "react";

export default function CartItem(props) {
  const cost = Number(props.amount) * Number(props.cost);
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Qty: {props.amount}</p>
      <p>Price: {cost}</p>
    </div>
  );
}
