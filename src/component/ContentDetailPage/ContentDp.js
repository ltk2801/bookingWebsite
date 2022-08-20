import React from "react";
import styles from "./ContentDp.module.css";
import HeaderDp from "./HeaderDp";
import datas from "../../data/detail.json";
import ImgDp from "./ImgDp";
import FooterDp from "./FooterDp";

// Nội dung chính của detaiPage gồm 3 component, head , img và footer detail Page

export default function ContentDp() {
  console.log(datas);

  return (
    <div className={styles.container}>
      <HeaderDp
        name={datas.name}
        add={datas.address}
        distance={datas.distance}
        price={datas.price}
      />
      <div className={styles.img}>
        {datas.photos.map((value, index) => (
          <ImgDp img={value} key={index.toString()} />
        ))}
      </div>
      <FooterDp
        title={datas.title}
        description={datas.description}
        price={datas.nine_night_price}
      />
    </div>
  );
}
