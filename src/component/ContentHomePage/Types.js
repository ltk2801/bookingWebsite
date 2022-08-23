import React from "react";
import styles from "./Types.module.css";

export default function Types(props) {
  return (
    <div className={styles.type}>
      <img src={props.image} alt="img" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.count}</p>
      </div>
    </div>
  );
}
