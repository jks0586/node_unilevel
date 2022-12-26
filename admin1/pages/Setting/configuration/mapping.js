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
                  <b>No of personal Referrals</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your personal Referrals"
                />
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
