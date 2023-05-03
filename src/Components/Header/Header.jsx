import React from "react";
import styles from "./Header.module.css";
import logo from "../../../Assets/Reslogo.png";

function Header() {
  return (
    <>
      <div className={styles.HeaderContainer}>
        <img placeholder="Logo" src={logo} className={styles.logo} />
        <div>
          <ul className={styles.liitems} onClick={() => console.log("Clicked")}>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
