import React, { useState } from "react";
import styles from "../styles/Nabvar.module.css";

const Layout = () => {
  return (
    <div>
      <div className={styles.form}>
        <div className="form-group">
          <h1 className={styles.header}>Hello Site</h1>

          <div className="center"></div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
