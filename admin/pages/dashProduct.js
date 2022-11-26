import React from "react";
import Adminlayout from "../components/Adminlayout";
import ProductTable from "../components/ProductTable";
import Navbar from "../components/Navbar";

const DashProduct = () => {
  return (
    <Adminlayout>
      <Navbar />
      <ProductTable />
    </Adminlayout>
  );
};

export default DashProduct;
