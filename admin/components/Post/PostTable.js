import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { useRouter } from "next/router";
import styles from "../../styles/Product.module.css";
import axios from "axios";
import { deletePost, getPost } from "../../redux/actions/postAction";
import { useDispatch } from "react-redux";

const Product = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();

  const getRowId = (params) => params.data.id;
  //const gridRef = useRef(); //for accessing Grid's API
  const [rowData, setRowData] = useState([
    "title",
    "description",
    "firstName",
    "city",
  ]); // Set rowData to Array of Objects, one Object per Row
  //const [tableData, setRowData] = useState(["title", "description"]);
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
    // alert(id)
    // alert("Are you sure you want to delete")
    // {
    //   console.log("are you delete");
    dispatch(deletePost(id));
    //   dispatch(getPost(posts));
    // }
  };

  const handleEdit = (id) => {
    router.push({
      pathname: "/posts/editpost",
  //query: { id: recipe._id },
    });
  };

  const onGridReady = useCallback((params) => {
    axios
      .get("http://localhost:5000/posts")
      .then((response) => {
        //console.log(response.data);
        // console.log(response.data.data);
        setRowData(response.data);
        //   displayOutput(response)
      })
      .catch((err) => console.log(err));

    // gridRef.current.api.sizeColumnsToFit({
    //     defaultMinWidth: 100,
    //     columnLimits: [{ key: 'country', minWidth: 900 }],
    //     });
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
            </button>
            {" "}
            | <button onClick={() => handleEdit(params.value)}>Edit </button>
          </>
        );
      },
    },

    // { field: "mobile", filter: "agNumberColumnFilter" },
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

export default Product;
