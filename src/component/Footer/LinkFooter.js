import React from "react";
import styles from "./LinkFooter.module.css";
import datasFooter from "../../data/footer.json";
import Colfooter from "./Colfooter";

export default function LinkFooter() {
  console.log(datasFooter);
  return (
    <div className={styles.container}>
      <div>
        {datasFooter[0].col_values.map((value) => (
          <Colfooter value={value} />
        ))}
      </div>
      <div>
        {datasFooter[1].col_values.map((value) => (
          <Colfooter value={value} />
        ))}
      </div>
      <div>
        {datasFooter[2].col_values.map((value) => (
          <Colfooter value={value} />
        ))}
      </div>
      <div>
        {datasFooter[3].col_values.map((value) => (
          <Colfooter value={value} />
        ))}
      </div>
      <div>
        {datasFooter[4].col_values.map((value) => (
          <Colfooter value={value} />
        ))}
      </div>
    </div>
  );
}
