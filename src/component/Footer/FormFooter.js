import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./FormFooter.module.css";
import Button from "../UI/Button";

export default function () {
  const inputHandler = (event) => {
    setEnterdEmail(event.target.value);
  };
  const [enterdEmail, setEnterdEmail] = useState("Your Email");

  return (
    <Card>
      <div className={styles.container}>
        <h1>Save time, save money!</h1>
        <h4>Sign up and we'll send the best deals to you</h4>
        <form>
          <input type="text" value={enterdEmail} onChange={inputHandler} />
          <Button>Subcribe</Button>
        </form>
      </div>
    </Card>
  );
}
