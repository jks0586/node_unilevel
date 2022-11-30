import React from "react";
import styles from "../styles/Header.module.css";
import { FaUserAlt } from "react-icons/Fa";
import Link from "next/link";
import style from "../styles/design.module.css"
const Header = () => {
  return (
    <>
    <nav>
    <a className="Link logo" href="#">Company Logo/Image</a>
    <div class="rightSection">
    <a className="selected Link" href="h">Home</a>
    <a className="Link" href="#">Contact Us</a>
    <a className="Link" href="#">About Us</a>
    <a className="Link" href="#">More Info</a>
    <a className="Link" href="#">Register</a>
    </div>
    </nav>
    </>
  );
};

export default Header;
