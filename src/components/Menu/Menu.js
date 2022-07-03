import React from "react";
import Card from "../UI/Card";
import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";

export default function Menu(props) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://react-http-f2651-default-rtdb.firebaseio.com/menu.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const menuItems = data.map((menuItem) => (
    <MenuItem
      title={menuItem.title}
      desc={menuItem.desc}
      cost={menuItem.cost}
      key={menuItem.title}
    />
  ));
  return <Card className={styles.menu}>{menuItems}</Card>;
}
