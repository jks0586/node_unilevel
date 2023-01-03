import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Loadable from "react-loadable";
import axios from "axios";
import Adminlayout from "../../components/Adminlayout";

const Editor = Loadable({
  loader: () => import("../../components/Editor"),
  loading() {
    return <div>Loading...</div>;
  },
});

const addProduct1 = () => {
  return (
    <Adminlayout>
      <div className={styles.container}>
        <h1 className={styles.header}>Add Product</h1>
        <div></div>
      </div>
    </Adminlayout>
  );
};

export default addProduct1;
