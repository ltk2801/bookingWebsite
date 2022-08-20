import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import FormHeader from "./FormHeader";
import styles from "./Header.module.css";

// Header gồm các thẻ và 1 componen FormHeader

export default function Header() {
  return (
    <Card>
      <div className={`${styles.container} ${styles.textHeader}`}>
        <h1>A lifetime of discounts? It's Genius. </h1>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <Button>Sign in / Register</Button>
      </div>
      <div className={`${styles.container} ${styles.form}`}>
        <FormHeader />
      </div>
    </Card>
  );
}
