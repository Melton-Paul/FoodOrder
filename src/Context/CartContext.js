import React from "react";
const CartContext = React.createContext();

export default function CartContextProvider(props) {
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [totalCost, setTotalCost] = React.useState(0);
  console.log(cart);

  function addToCart(item) {
    setCart((prev) => {
      if (prev.some((cartItem) => cartItem.title === item.title)) {
        console.log("found");
        return prev.map((cartItem) => {
          return cartItem.title === item.title
            ? {
                ...cartItem,
                amount: Number(cartItem.amount) + Number(item.amount),
              }
            : cartItem;
        });
      } else {
        return [...prev, item];
      }
    });
  }

  React.useEffect(() => {
    let total = 0;
    cart.forEach((cartObj) => {
      total += cartObj.cost * cartObj.amount;
    });
    setTotalCost(total);
  }, [cart]);

  function cartReset() {
    setCart([]);
    setTotalCost(0);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, cartOpen, setCartOpen, totalCost, cartReset }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
export { CartContext };
