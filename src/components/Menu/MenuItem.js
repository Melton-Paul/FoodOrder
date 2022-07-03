import React from "react";
import Button from "../UI/Button";
import styles from "./MenuItem.module.css";
import { CartContext } from "../../Context/CartContext";

export default function MenuItem(props) {
  const [amount, setAmount] = React.useState(0);

  const context = React.useContext(CartContext);

  function submitHandler(e) {
    e.preventDefault();
    if (amount === 0) {
      return;
    }
    context.addToCart({
      title: props.title,
      desc: props.desc,
      cost: props.cost,
      amount: +amount,
    });
  }
  function changeHandler(e) {
    if (e.target.value > 10 || e.target.value < 0) {
      return;
    }
    setAmount(e.target.value);
  }
  function blurHandler(e) {
    if (e.target.value === "") {
      setAmount(0);
    }
  }

  return (
    <>
      <div className={styles.menuItem}>
        <div className={styles["menuItem-labels"]}>
          <h2 className={styles["menuItem-title"]}>{props.title}</h2>
          <p className={styles["menuItem-desc"]}>{props.desc}</p>
          <p className={styles["menuItem-cost"]}>${props.cost}</p>
        </div>
        <form onSubmit={submitHandler}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0"
            max="10"
            value={amount}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
          <Button>
            <i className="fa fa-plus"></i>
            Add
          </Button>
        </form>
      </div>
      <hr />
    </>
  );
}
