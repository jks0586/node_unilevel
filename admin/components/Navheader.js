import React, { useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import { FaUserAlt } from "react-icons/Fa";
import { ImHome, ImCart } from "react-icons/im";
import { MdContactPhone } from "react-icons/md";
import styles from "../styles/Product.module.css";

const MENU_LIST = [
  { text: <FaUserAlt />, href: "/" },
  { text: <ImHome />, href: "/" },
  { text: "Contact", href: "/contact" },
];
import { useRouter } from "next/router";
const Navheader = (props, adminprops) => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  //  console.log(props,'aaaaaa');
  const router = useRouter();
  const handleAdd = (e) => {
    e.preventDefault();
    router.push("/product/addProduct1");
  };

  // const aprops=[{'url':'test','text':'Add Product','type':'button'}];
  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo"></h1>
          </a>
        </Link>
        {props.adminprops !== undefined
          ? props.adminprops.map((item) =>
              item != undefined && item.type == "button" ? (
                <button className={styles.button} onClick={handleAdd}>
                  {item.text}
                </button>
              ) : (
                ""
              )
            )
          : ""}

        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={idx + ""}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
  // <div className={`${navActive ? "active" : ""} nav__menu-list`}>

  // {MENU_LIST.map((menu, idx) => (
  //     <div
  //      onClick={() => {
  //        setActiveIdx(idx);
  //        setNavActive(false);
  //      }}
  //      key={menu.text}
  //    >
  //     <NavItem active={activeIdx === idx} {...menu} />
  //    </div>
  //   ))}
  // </div>
};

export default Navheader;
