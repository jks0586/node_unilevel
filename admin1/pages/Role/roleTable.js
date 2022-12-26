import { useRouter } from "next/router";
import React, { useCallback, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import styles from "../../styles/Product.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { MdDelete, MdOutlineEdit } from "react-icons/md";
import Adminlayout from "../../components/Adminlayout";
import { deleteRole } from "../../redux/actions/roleAction";

const RoleTable = () => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [category, setCategory] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();

  const getRowId = (params) => params.data.id;

  const [rowData, setRowData] = useState(["slug", "name", "status"]);
  const defaultColDef = {
    flex: 1,
    sortable: true,
    resizable: true,
    cellClass: "cell-wrap-text",
    autoHeight: true,
    resizable: true,
  };

  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   router.push("/Categories/addcategory");
  // };

  const handleDelete = (id) => {
    alert("delete");
    dispatch(deleteRole(id));
  };

  const handleEdit = (id) => {
    router.push("/Role/edit/" + id);
  };

  const onGridReady = useCallback((params) => {
    axios
      .get("http://localhost:5000/role")
      .then((response) => {
        setRowData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [columnDefs] = useState([
    { field: "name", filter: "agTextColumnFilter" },
    { field: "slug", filter: true },
    { field: "status", filter: true },
    {
      headerName: "Action",
      field: "_id",
      cellRenderer: (params) => {
        return (
          <div>
            {" "}
            <button
              className={styles.icon}
              onClick={() => handleDelete(params.value)}
            >
              <MdDelete />{" "}
            </button>{" "}
            |{" "}
            <button
              className={styles.icon}
              onClick={() => handleEdit(params.value)}
            >
              <MdOutlineEdit />{" "}
            </button>
          </div>
        );
      },
    },
  ]);
  const aprops = [{ url: "addrole", text: "AddRole", type: "button" }];
  return (
    <>
      <Adminlayout adminprops={aprops}>
        <div style={containerStyle}>
          <div className="ag-theme-alpine" style={gridStyle}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              onGridReady={onGridReady}
              rowSelection="multiple"
              animateRows={true}
            ></AgGridReact>
          </div>
        </div>
      </Adminlayout>
    </>
  );
};

export default RoleTable;
