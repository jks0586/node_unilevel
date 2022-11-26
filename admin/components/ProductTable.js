import React, { useCallback, useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useRouter } from "next/router";
import styles from "../styles/Product.module.css";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/productAction";
import axios from "axios";

const Product = () => {
  const [category, setCategory] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();

  const getRowId = (params) => params.data.id;
 
  const [rowData, setRowData] = useState(["price", "name", "quality", "quantity", "description","image"]);
  const defaultColDef = {
    resizable: true,
  };

  const handleAdd = (e) => {
    e.preventDefault();
    router.push("/product/addproduct");
  };

  const handleDelete = (id) => {
    alert("delete");
    dispatch(deleteProduct(id)); 
  };

  const handleEdit = (id) => {
    router.push("/product/edit/" + id);
  };

  const onGridReady = useCallback((params) => {
    axios
      .get("http://localhost:5000/product")
      .then((response) => {
        setRowData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [columnDefs] = useState([
    { field: "name", filter: "agTextColumnFilter" },
    { field: "price", filter: true },
    { field: "quality", filter: true },
    { field: "quantity", filter: true },
    { field: "description", filter: true },
    {
      field: "image",
      filter: "agNumberColumnFilter",
      cellRenderer: (params) => {
        return <img src={params.value} width="50px" height="50px" />;
      },
    },
    {
      headerName: "Action",
      field: "_id",
      cellRenderer: (params) => {
        return (
          <>
            {" "}
            <button onClick={() => handleDelete(params.value)}>
              Delete{" "}
            </button>{" "}
            | <button onClick={() => handleEdit(params.value)}>Edit </button>
          </>
        );
      },
    },
  ]);

  return (
    <>
      <div
        className="ag-theme-alpine"
        style={{ height: 200, width: 1000, margin: 250, alignItems: "center" }}
      >
        <button className={styles.button} onClick={handleAdd}>
          Add-Product
        </button>

        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          rowSelection="multiple"
          animateRows={true}
        ></AgGridReact>
      </div>
    </>
  );
};

export default Product;
