import React from "react";
import Citis from "./Citis";
import styles from "./ContentHp.module.css";
import datasCity from "../../data/city.json";
import datasType from "../../data/type.json";
import datasHotel from "../../data/hotel_list.json";
import Types from "./Types";
import Hotels from "./Hotels";

// Nội dung chính của HomePage gồm 3 component Citis và Types và Hotels

export default function ContentHp() {
  return (
    <div className={styles.container}>
      <div className={styles.citis}>
        {datasCity.map((item, index) => (
          <Citis
            name={item.name}
            subText={item.subText}
            image={item.image}
            key={index.toString()}
          />
        ))}
      </div>
      <h1 style={{ margin: "2rem 0" }}> Browse by property type </h1>
      <div className={styles.types}>
        {datasType.map((item, index) => (
          <Types
            name={item.name}
            count={item.count}
            image={item.image}
            key={index.toString()}
          />
        ))}
      </div>
      <h1 style={{ margin: "2rem 0 " }}> Homes guests love </h1>
      <div className={styles.hotels}>
        {datasHotel.map((item, index) => (
          <Hotels
            city={item.city}
            image_url={item.image_url}
            name={item.name}
            price={item.price}
            rate={item.rate}
            type={item.type}
            key={index.toString()}
          />
        ))}
      </div>
    </div>
  );
}
