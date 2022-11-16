import React from "react";
import styles from "../styles/nabvar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <input id={styles.navtoggle} type="checkbox" />
        <div className={styles.logo}>
          FOOD<strong>MOOD</strong>
        </div>
        <ul className={styles.links}>
          <li>
            <a href="layout">Home</a>
          </li>
          <li>
            <a href="login">LOGIN</a>
          </li>

          <li>
            <a href="register">REGISTER</a>
          </li>
        </ul>
        <label htmlFor={styles.navtoggle} className={styles.iconburger}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </label>
      </nav>
    </>
  );
};

export default Navbar;
