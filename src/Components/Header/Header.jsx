import React from "react";
import styles from "./Header.module.css";
import logo from "../../../Assets/Reslogo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className={styles.HeaderContainer}>
        <Link to="/">
          <img placeholder="Logo" src={logo} className={styles.logo} />
        </Link>
        <div>
          <ul className={styles.liitems}>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
