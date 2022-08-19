import React from "react";
import styles from "./Citis.module.css";

export default function Citis(props) {
  return (
    <div className={styles.city}>
      <img src={props.image} />
      <div>
        <h1>{props.name}</h1>
        <p>{props.subText}</p>
      </div>
    </div>
  );
}
