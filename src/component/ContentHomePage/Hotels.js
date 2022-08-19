import React from "react";
import styles from "./Hotels.module.css";

export default function Hotels(props) {
  return (
    <div className={styles.hotel}>
      <img src={props.image_url} />
      <div>
        <a href="/Detail">{props.name}</a>
        <p>{props.city}</p>
        <h3>Starting from ${props.price}</h3>
        <span className={styles.point}>{props.rate}</span>{" "}
        <span>{props.type}</span>
      </div>
    </div>
  );
}
