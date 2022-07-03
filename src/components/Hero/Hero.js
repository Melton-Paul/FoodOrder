import React from "react";
import styles from "./Hero.module.css";
import meals from "./meals.jpg";
import Card from "../UI/Card";

export default function Hero(props) {
  return (
    <div className={styles.hero}>
      <img className={styles["hero-img"]} src={meals} alt="" />
      <Card className={styles["hero-heading"]}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious <br /> lunch or dinner at home
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by <br />
          experienced chefs!
        </p>
      </Card>
    </div>
  );
}
