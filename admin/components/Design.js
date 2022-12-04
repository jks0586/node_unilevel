import React from "react";
import styles from "../styles/NDesign.module.css";
import { ImHome, ImCart } from "react-icons/im";
import { FaUserAlt } from "react-icons/Fa";
import { useRouter } from "next/router";
import { MdAddShoppingCart, MdContactMail } from "react-icons/md";

const Navbar = (props, adminprops) => {
  const router = useRouter();

  const handleAdd = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    router.push(e.target.value);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <input id={styles.navtoggle} type="checkbox" />
        <div className={styles.logo}>
          Product<strong></strong>
        </div>
        <ul className={styles.links}>
          {/* <li>
            <a href="/">
              <ImHome />
            </a>
          </li> */}
          {/* <li>
            <a href="login">Contact</a>
          </li> */}
          {props.adminprops !== undefined
            ? props.adminprops.map((item) =>
                item != undefined && item.type == "button" ? (
                  <button value={item.url}  className={styles.button} onClick={handleAdd}>
                    {item.text}
                  </button>
                ) : (
                  ""
                )
              )
            : ""}
          <li>
            <a href="privacy">
              {/* <MdContactMail /> */}
              {/* <MdAddShoppingCart /> */}
            </a>
          </li>
          <li>
            <a href="/">
              <FaUserAlt />
            </a>
          </li>
          <li>
            <a href="/">
              <ImHome />
            </a>
          </li>
        </ul>
        <label htmlFor={styles.navtoggle} className={styles.icon}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </label>
      </nav>
    </>
  );
};

export default Navbar;
