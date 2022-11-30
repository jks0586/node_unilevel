import React from "react";
import styles from "../styles/Header.module.css";
import { FaUserAlt } from "react-icons/Fa";
const Header = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <input id={styles.navtoggle} type="checkbox" />

        <ul className={styles.links}>
          <li>
            <a className={styles.icon}>
              <FaUserAlt />
            </a>
          </li>
          <li>
            <a href="contact"></a>
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

export default Header;
