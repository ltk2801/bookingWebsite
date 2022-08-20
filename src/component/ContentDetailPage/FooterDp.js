import React from "react";
import styles from "./FooterDp.module.css";
import Button from "../UI/Button";

export default function FooterDp(props) {
  return (
    <div className={styles.container}>
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className={styles.price}>
        <h3>Perfect for a 9-night stay!</h3>
        <p>
          Located in the real heart of krakow, this property has an excellent
          location score of 9.8!
        </p>
        <h2>
          <strong>${props.price}</strong> (9 nights){" "}
        </h2>
        <Button>Reserve or Book Now !</Button>
      </div>
    </div>
  );
}
