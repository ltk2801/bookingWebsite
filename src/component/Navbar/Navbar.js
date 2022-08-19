import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import datas from "../../data/navBar.json";
import styles from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <Card>
      <div className={styles.grid}>
        <div className={styles.title}>Booking Website</div>
        <div className={styles.btn}>
          <Button>
            <a href="/">Home</a>
          </Button>
          <Button>Register</Button>
          <Button>Login</Button>
        </div>
        <div className={styles.text}>
          {datas.map((item, index) => (
            <NavbarItem
              type={item.type}
              icon={item.icon}
              active={item.active}
              key={index.toString()}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
