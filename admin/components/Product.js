import React, { useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { useRouter } from "next/router";
import styles from "../styles/Product.module.css";

const Product = () => {
  const router = useRouter();

  const getRowId = (params) => params.data.id;
  //const gridRef = useRef(); //for accessing Grid's API
  const [rowData, setRowData] = useState([""]); // Set rowData to Array of Objects, one Object per Row

  const defaultColDef = {
    resizable: true,
  };
  const handleAdd = (e) => {
    e.preventDefault();
    router.push("/production/addproduct");
  };

  const [columnDefs] = useState([
    { field: "Name", filter: "agTextColumnFilter" },
    { field: "Price", filter: "agNumberColumnFilter" },
    { field: "Category", filter: true },
    { field: "Discont", filter: "agNumberColumnFilter" },
    

    { field: "Action" },
  ]);

  return (
    <>
      <div
        className="ag-theme-alpine"
        style={{ height: 150, width: 1000, margin: 250, alignItems: "center" }}
      >
        <button className={styles.button} onClick={handleAdd}>
          Add-Product
        </button>
        <AgGridReact
          getRowId={getRowId}
          rowData={rowData}
          // rowData={tableData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          //onGridReady={onGridReady}
          rowSelection="multiple"
          animateRows={true}
        ></AgGridReact>
      </div>
    </>
  );
};

export default Product;
