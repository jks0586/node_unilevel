import React, { useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Product = () => {
  const getRowId = (params) => params.data.id;

  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const defaultColDef = {
    resizable: true,
  };

  const [columnDefs] = useState([
    { field: "make" },
    { field: "Name" },
    { field: "Price" },
    { field: "Category" },
    { field: "Discont" },
  ]);

  return (
    <>
      <button variant="contained" color="primary">
        Add Product
      </button>

      <div
        className="ag-theme-alpine"
        style={{ height: 200, width: 900, align: "center" }}
      >
        <AgGridReact
          getRowId={getRowId}
          rowData={rowData}
          // rowData={tableData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          //onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </>
  );
};

export default Product;
