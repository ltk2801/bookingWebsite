import React from "react";
import styles from "./ContentSp.module.css";
import SearchListItem from "./SearchListItem";
import SearchPopup from "./SearchPopup";

// Nội dung chính của SearchPage gồm 2 component SearchPopup và SearchListItem

export default function ContentSp() {
  return (
    <div className={styles.container}>
      <SearchPopup />
      <SearchListItem />
    </div>
  );
}
