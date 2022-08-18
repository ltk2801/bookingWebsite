import React from "react";
import styles from "./NavbarItem.module.css";

export default function (props) {
  const icons = "fa" + " " + props.icon;
  const active = props.active;
  //   console.log(active);

  return (
    <div className={styles.item}>
      <div className={active ? styles.border : ""}>
        <i className={icons}></i>
        <span>{props.type} </span>
      </div>
    </div>
  );
}
