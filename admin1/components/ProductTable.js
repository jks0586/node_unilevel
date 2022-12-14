// import React, { useState, useMemo, useCallback } from "react";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { useRouter } from "next/router";
// import styles from "../styles/Product.module.css";
// import { useDispatch } from "react-redux";
// import { deleteProduct } from "../redux/actions/productAction";
// import axios from "axios";
// import Adminlayout from "../components/Adminlayout";
// import { MdDelete, MdOutlineEdit } from "react-icons/md";
// import parse from "html-react-parser";
// import { GLOBAL_CONSTANT } from "../config/GlobalConstant";

// const Product = () => {
//   const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
//   const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
//   const [category, setCategory] = useState([]);
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const getRowId = (params) => params.data.id;

//   const [rowData, setRowData] = useState([
//     "price",
//     "name",
//     "slug",
//     "quantity",
//     "description",
//     "specialprice",
//     "stockquantity",
//     "category",
//     "image",
//   ]);

//   const defaultColDef = {
//     flex: 1,
//     sortable: true,
//     resizable: true,
//     cellClass: "cell-wrap-text",
//     autoHeight: true,
//     // suppressSizeToFit: false
//     // responsive: true
//   };

//   // const handleAdd = (e) => {
//   //   e.preventDefault();
//   //   router.push("/product/addProduct1");
//   // };

//   const handleDelete = (id) => {
//     alert("delete");
//     dispatch(deleteProduct(id));
//   };

//   const handleEdit = (id) => {
//     router.push("/product/edit/" + id);
//   };

//   const onGridReady = useCallback((params) => {
    
//     axios
//       .get("http://localhost:5000/product",{headers: {
//         Authorization: localStorage.getItem(GLOBAL_CONSTANT.TOKEN)
//       }})
//       .then((response) => {
//         setRowData(response.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const [columnDefs] = useState([
//     { field: "name", filter: "agTextColumnFilter" },
//     { field: "price", filter: true },
//     { field: "category", filter: true },
//     { field: "slug", filter: true },
//     { field: "quantity", filter: true },
//     { field: "quality", filter: true },
//     { field: "stockquantity", filter: true },
//     { field: "specialprice", filter: true },
//     {
//       field: "description",
//       filter: true,
//       cellRenderer: (params) => {
//         return <div dangerouslySetInnerHTML={{ __html: params.value }}></div>;
//       },
//     },
//     {
//       field: "image",
//       filter: "agNumberColumnFilter",
//       cellRenderer: (params) => {
//         return <img src={params.value} width="50px" height="50px" />;
//       },
//     },
//     {
//       headerName: "Action",
//       field: "_id",
//       cellRenderer: (params) => {
//         return (
//           <div>
//             {" "}
//             <button
//               className={styles.icon}
//               onClick={() => handleDelete(params.value)}
//             >
//               <MdDelete />{" "}
//             </button>{" "}
//             |{" "}
//             <button
//               className={styles.icon}
//               onClick={() => handleEdit(params.value)}
//             >
//               <MdOutlineEdit />{" "}
//             </button>
//           </div>
//         );
//       },
//     },
//   ]);
//   // className={table table-striped table-bordered nowrap}
//   // <Adminlayout adminprops={aprops}>
//   const aprops = [
//     { url: "product/addProduct1", text: "AddProduct", type: "button" },
//   ];
//   return (
//     <>
//       <Adminlayout adminprops={aprops}>
//         <div style={containerStyle}>
//           <div className="ag-theme-alpine" style={gridStyle}>
//             <AgGridReact
//               rowData={rowData}
//               columnDefs={columnDefs}
//               defaultColDef={defaultColDef}
//               onGridReady={onGridReady}
//               rowSelection="multiple"
//               animateRows={true}
//             ></AgGridReact>
//           </div>
//         </div>
//       </Adminlayout>
//     </>
//   );
// };

// export default Product;
