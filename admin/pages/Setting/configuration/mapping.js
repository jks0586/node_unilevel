import Link from "next/link";
import React from "react";
import Adminlayout from "../../../components/Adminlayout";
import HeaderSettings from "../../../components/Header";
import Settings from "../../../components/Settings";
import styles from "../../../styles/Recipe.module.css";
const Mapping = () => {
  return (
    <Adminlayout>
      <div className="container">
        <Settings />
        <div className="w-full flex">
          <HeaderSettings />
          <div className={styles.div}>
            <div className="w-100">
              <form className={styles.loginform}>
                <label>
                  <b>Name First</b>
                </label>
                <input type="text" placeholder="Enter your Name" />
                <br />
                <label>
                  <b>UserName</b>
                </label>
                <input type="Email" placeholder="Enter your Email" />
                <br />
                <label>
                  <b>UserName</b>
                </label>
                <input type="Email" placeholder="Enter your Email" />
                <br />
                <label>
                  <b>Password</b>
                </label>
                <input type="Password" placeholder="Enter your Password" />
                <label>
                  <b>Password</b>
                </label>
                <input type="Password" placeholder="Enter your Password" />
                <br />
                <div className={styles.button}>
                  <input type="submit" value="Save" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Adminlayout>
  );
};

export default Mapping;
