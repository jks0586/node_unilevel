import React from "react";
import Adminlayout from "../components/Adminlayout";
import Product from "../components/Product";
import Navbar from "../components/Navbar"

const DashProduct = () => {
  return (
    <Adminlayout>
    <Navbar />
     <Product />
    </Adminlayout>
  );
};

export default DashProduct;
