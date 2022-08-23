import React from "react";
import Button from "../UI/Button";
import styles from "./SearchList.module.css";

export default function SearchList(props) {
  return (
    <div className={styles.container}>
      <img src={props.url} alt="img" />
      <div className={styles.text}>
        <h3>{props.name}</h3>
        <span>{props.distance} from center</span>
        <p className={styles.tag}>{props.tag}</p>
        <p>
          <strong>{props.description}</strong>
        </p>
        <span>{props.type}</span>
        {props.cancel && (
          <div className={styles.cancel}>
            <h4>Free cancellation</h4>
            <span>
              You can cancel later, so lock in this great price today!{" "}
            </span>
          </div>
        )}
      </div>
      <div className={styles.amount}>
        <div className={styles.pointFlex}>
          <h3>{props.ratetext}</h3>
          <span>{props.rate}</span>
        </div>
        <div className={styles.amountFlex}>
          <h1>${props.price}</h1>
          <span>Includes taxes and fees</span>
          <Button>See availability</Button>
        </div>
      </div>
    </div>
  );
}
