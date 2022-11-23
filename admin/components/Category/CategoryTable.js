import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import styles from "../../styles/Product.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../redux/actions/categoryAction";

const CategoryTable = () => {
  const [category, setCategory] = useState([]); 
  const router = useRouter();
  const dispatch = useDispatch();

  const getRowId = (params) => params.data.id;

  const [rowData, setRowData] = useState([
    "title",
    // "description",
    "name",
    "status",
    // "quality",
    "image",
  ]);
  const defaultColDef = {
    resizable: true, 
  };

  const handleAdd = (e) => {
    e.preventDefault();  
    router.push("/Categories/addcategory");
  };

  const handleDelete = (id) => {
    alert("delete")
    dispatch(deleteCategory(id));
  };

  const handleEdit = (id) => {
  router.push('/Categories/edit/'+id);
  };


  const onGridReady = useCallback((params) => {
    axios
      .get("http://localhost:5000/category")
      .then((response) => {
        setRowData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [columnDefs] = useState([
    { field: "name", filter: "agTextColumnFilter" },
    // { field: "quality", filter: "agNumberColumnFilter" },
    { field: "title", filter: true },
    { field: "status", filter: true },
    // { field: "description", filter: true },
    { field: "image", filter: "agNumberColumnFilter" },
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
          // getRowId={getRowId}
          rowData={rowData}
          //rowData={tableData}
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

export default CategoryTable;
