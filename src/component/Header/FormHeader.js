import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./FormHeader.module.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";

export default function () {
  // Sử dụng useNavigate để chuyển trang
  let navigate = useNavigate();
  // Phần nâng cao
  const [enterdDate, setEnterdDate] = useState([
    {
      // Mặc định cở bản là thuê 1 ngày
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Chuyển đổi date thành ngày tháng năm
  const monthstart = enterdDate[0].startDate.toLocaleString("en-US", {
    month: "2-digit",
  });
  const daystart = enterdDate[0].startDate.toLocaleString("en-US", {
    day: "2-digit",
  });
  const monthend = enterdDate[0].endDate.toLocaleString("en-US", {
    month: "2-digit",
  });
  const dayend = enterdDate[0].endDate.toLocaleString("en-US", {
    day: "2-digit",
  });
  const year = enterdDate[0].startDate.getFullYear();

  // Sử dụng useState để lưu value
  const [enterdGoing, setEnterdGoing] = useState("Where are you going?");
  const [enterdFamale, setEnterdFamale] = useState(
    "1 adult · 0 children · 1 room "
  );

  //  Set chế độ on of cho calendar
  const [onCalendar, setOnCalendar] = useState(false);

  // Hàm khi ấn vào input calender
  const calendarChangeHandler = (event) => {
    setOnCalendar(!onCalendar);
    event.preventDefault();
  };

  // Lấy giá trị người dùng nhập vào
  const goingChangeHandler = (event) => {
    setEnterdGoing(event.target.value);
  };

  // Lấy giá trị nhập Famale
  const famaleChangeHandler = (event) => {
    setEnterdFamale(event.target.value);
  };

  // Bắt sự kiện khi ấn nút
  const searchHandler = (event) => {
    event.preventDefault();
    setEnterdGoing("");
    setEnterdFamale("");
    navigate("../Search", { replace: true });
  };

  return (
    <div>
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
            value={`${daystart}/${monthstart}/${year} to ${dayend}/${monthend}/${year} `}
            onClick={calendarChangeHandler}
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
      {onCalendar && (
        <div className={styles.calender}>
          <DateRange
            editableDateInputs={false}
            onChange={(item) => setEnterdDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={enterdDate}
          />
        </div>
      )}
    </div>
  );
}
