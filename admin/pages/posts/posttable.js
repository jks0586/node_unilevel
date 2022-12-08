import React, { useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useRouter } from "next/router";
import styles from "../../styles/Product.module.css";
import axios from "axios";
import { deletePost } from "../../redux/actions/postAction";
import { useDispatch } from "react-redux";

const Posttable = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();

  const getRowId = (params) => params.data.id;

  const [rowData, setRowData] = useState([
    "title",
    "description",
    "firstName",
    "city",
  ]);

  const defaultColDef = {
    resizable: true,
  };

  // useEffect(() => {
  //   axios.get("http://localhost:5000/posts").then((res) => {
  //     setPosts(res.data);
  //     setRowData(res.data);
  //   });
  // });

  const handleAdd = (e) => {
    e.preventDefault();
    router.push("/posts/addposts");
  };

  const handleDelete = (id) => {
    alert("Are you sure you want to delete");
    dispatch(deletePost(id));
  };

  const handleEdit = (id) => {
    router.push("/posts/edit/" + id);
  };

  const onGridReady = useCallback((params) => {
    axios
      .get("http://localhost:5000/posts")
      .then((response) => {
        setRowData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [columnDefs] = useState([
    { field: "title", filter: "agTextColumnFilter" },
    { field: "description", filter: "agTextColumnFilter" },
    { field: "firstName", filter: "agTextColumnFilter" },
    { field: "city", filter: true },
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
        style={{ height: 500, width: 1000, margin: 250, alignItems: "center" }}
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

export default Posttable;
