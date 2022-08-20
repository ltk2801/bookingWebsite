import React from "react";
import styles from "./HeaderDp.module.css";
import Button from "../UI/Button";

export default function HeaderDp(props) {
  return (
    <div className={styles.container}>
      <div>
        <h3>{props.name}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        <span>{props.add}</span>
        <p className={styles.dis}>{props.distance}</p>
        <p className={styles.price}>{props.price}</p>
      </div>
      <div>
        <Button>Reserve or Book Now !</Button>
      </div>
    </div>
  );
}
