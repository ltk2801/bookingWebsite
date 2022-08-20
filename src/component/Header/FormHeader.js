import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./FormHeader.module.css";
import { DateRange } from "react-date-range";

export default function () {
  // Phần nâng cao
  const [enterdDate, setEnterdDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [enterdGoing, setEnterdGoing] = useState("Where are you going?");
  const [enterdCalendar, setEnterdCalendar] = useState(
    "08/18/2022 to 08/20/2022"
  );
  const [enterdFamale, setEnterdFamale] = useState(
    "1 adult · 0 children · 1 room "
  );

  // Lấy giá trị người dùng nhập vào
  const goingChangeHandler = (event) => {
    setEnterdGoing(event.target.value);
  };

  // Lấy giá trị khi người dùng nhập Age
  const calendarChangeHandler = (event) => {
    setEnterdCalendar(event.target.value);
  };

  // Đặt lại thằng error là null, không có thì sẽ không hiện thị ErorModal
  const famaleChangeHandler = (event) => {
    setEnterdFamale(event.target.value);
  };

  // Bắt sự kiện khi ấn nút
  const searchHandler = (event) => {
    event.preventDefault();
    setEnterdGoing("");
    setEnterdCalendar("");
    setEnterdFamale("");
    location.replace("http://localhost:3000/Search");
  };

  return (
    <div>
      {/* <DateRange
        editableDateInputs={false}
        onChange={(item) => setEnterdDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={enterdDate}
      /> */}
      <form onSubmit={searchHandler} className={styles.formHeader}>
        <div>
          <label htmlFor="going">
            <i className="fa fa-bed"></i>
          </label>
          <input
            type="text"
            id="going"
            value={enterdGoing}
            onChange={goingChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="calendar">
            <i className="fa fa-calendar"></i>
          </label>
          <input
            type="text"
            id="calendar"
            value={enterdCalendar}
            onChange={calendarChangeHandler}
            onClick={() => {
              console.log("hi");
            }}
          />
        </div>
        <div>
          <label htmlFor="famale">
            <i className="fa fa-female"></i>
          </label>
          <input
            type="text"
            id="famale"
            value={enterdFamale}
            onChange={famaleChangeHandler}
          />
        </div>
        <div>
          <Button type="submit">Search</Button>
        </div>
      </form>
    </div>
  );
}
