import { useRouter } from "next/router";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import styles from "../../styles/Product.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";


const CategoryTable = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();  


  const getRowId = (params) => params.data.id;
  const [rowData, setRowData] = useState([
    "name",
    "title",
    "image",
    "description",
    "status",
    "quality",
  ]);  
 
  const defaultColDef = {
    resizable: true,
  };

  const handleAdd = (e) => {
    e.preventDefault();
    router.push("/Categories/addcategory");
  };

  const [columnDefs] = useState([
    { field: "Name", filter: "agTextColumnFilter" },
    { field: "title", filter: "agNumberColumnFilter" },
    { field: "quality", filter: true },
    { field: "status", filter: true },
    { field: "image", filter: true },
    { field: "Description", filter: "agNumberColumnFilter" },
    { field: "Action" },
  ]);

  return (
    <>
      <div
        className="ag-theme-alpine"
        style={{ height: 150, width: 1000, margin: 250, alignItems: "center" }}
      >
        <button className={styles.button} onClick={handleAdd}>
          Add-Category
        </button>
        <AgGridReact
          getRowId={getRowId}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          animateRows={true}
        ></AgGridReact>
      </div>
    </>
  );
};

export default CategoryTable;
