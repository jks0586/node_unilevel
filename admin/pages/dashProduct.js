import React from "react";
import Adminlayout from "../components/Adminlayout";
import ProductTable from "../components/ProductTable";

import Header from "../components/Header";

const DashProduct = () => {
  return (
    <div>
      <Header />
      <ProductTable />
      {/* // <Adminlayout>
    <Navbar />
      <ProductTable />
    // </Adminlayout> */}
    </div>
  );
};

export default DashProduct;
