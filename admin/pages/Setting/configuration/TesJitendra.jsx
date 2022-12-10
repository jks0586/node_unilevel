import React from "react";
import styles from "../../../styles/Table.module.css";
import Link from "next/link";

const TesJitendra = () => {
  return (
    <div className={styles.div}>
      <Link href="register">
        <a>Register</a>
      </Link>
      <Link href="forget">
        <a>Forget</a>
      </Link>
    </div>
  );
};

export default TesJitendra;
