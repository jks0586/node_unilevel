import React from "react";
import styles from "../styles/Product.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Product1 = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete")) {
      dispatch(deleteRecipe());
      dispatch(getRecipes());
    }
  };

  // const handleEdit = () => {
  //   router.push({
  //     pathname: "/production/editproduct",
      
  //   });
  // };
  // <button className={styles.button} onClick={() => handleEdit()}>Edit</button>
  // <button className={styles.button}  onClick={() => handleDelete()}>Delete</button>
  const handleAdd = (e) => {
    e.preventDefault();
    router.push("/production/addproduct");
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.addItem}>
          <button className={styles.button} onClick={handleAdd}>
            Add-Product
          </button>
        </div>

        <table className={styles.table} border="2" align="center">
          <thead className={styles.tableRowHeader}>
            <tr>
              <th className={styles.tableHeader}>Product Name</th>
              <th className={styles.tableHeader}>Product Price</th>
              <th className={styles.tableHeader}>Select Category</th>
              <th className={styles.tableHeader}>Discount</th>
              <th className={styles.tableHeader}>Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.tableCell}></td>
              <td className={styles.tableCell}></td>
              <td className={styles.tableCell}>
               
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product1;
