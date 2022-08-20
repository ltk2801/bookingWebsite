import React from "react";
import styles from "./SearchListItem.module.css";
import SearchList from "./SearchList";
import datas from "../../data/search.json";

export default function SearchListItem() {
  return (
    <div className={styles.container}>
      {datas.map((value, index) => (
        <SearchList
          name={value.name}
          distance={value.distance}
          tag={value.tag}
          description={value.description}
          type={value.type}
          url={value.image_url}
          ratetext={value.rate_text}
          rate={value.rate}
          price={value.price}
          cancel={value.free_cancel}
          key={index.toString()}
        />
      ))}
    </div>
  );
}
