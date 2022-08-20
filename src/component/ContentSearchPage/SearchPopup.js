import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./SearchPopup.module.css";

export default function SearchPopup() {
  const [enteredDate, setEnteredDate] = useState("06/24/2022 to 06/24/2022");
  const [enteredAdult, setEnteredAdult] = useState("1");
  const [enteredChildren, setEnteredChildren] = useState("0");
  const [enteredRoom, setEnteredRoom] = useState("1");

  const dataChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const adultChangeHandler = (event) => {
    setEnteredAdult(event.target.value);
  };
  const childrenChangeHandler = (event) => {
    setEnteredChildren(event.target.value);
  };
  const roomChangeHandler = (event) => {
    setEnteredRoom(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    setEnteredDate("");
    setEnteredChildren("");
    setEnteredAdult("");
    setEnteredRoom("");
  };

  return (
    <div className={styles.container}>
      <h3>Search</h3>
      <form onSubmit={searchHandler}>
        <label>Destination</label>
        <input type="Text" />
        <label>Check-in Date</label>
        <input type="Text" value={enteredDate} onChange={dataChangeHandler} />
        <ul className={styles.options}>
          Options
          <li style={{ marginTop: 5 }}>
            <label>Min price per night</label>
            <input
              type="Number"
              style={{ width: "80px", height: "30px", margin: 0 }}
            />
          </li>
          <li>
            <label>Max price per night</label>
            <input
              type="Number"
              style={{ width: "80px", height: "30px", margin: 0 }}
            />
          </li>
          <li>
            <label>Adult</label>
            <input
              type="Number"
              style={{ width: "80px", height: "30px", margin: 0 }}
              value={enteredAdult}
              onChange={adultChangeHandler}
            />
          </li>
          <li>
            <label>Children</label>
            <input
              type="Number"
              style={{ width: "80px", height: "30px", margin: 0 }}
              value={enteredChildren}
              onChange={childrenChangeHandler}
            />
          </li>
          <li>
            <label>Room</label>
            <input
              type="Number"
              style={{ width: "80px", height: "30px", margin: 0 }}
              value={enteredRoom}
              onChange={roomChangeHandler}
            />
          </li>
        </ul>
        <Button type="Submit" className={styles.btn}>
          Search
        </Button>
      </form>
    </div>
  );
}
