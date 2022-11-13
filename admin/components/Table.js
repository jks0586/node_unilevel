import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteRecipe, getRecipes } from "../redux/actions/recipeAction";
import styles from "../styles/Table.module.css";
import UseTable from "./UseTable";

const Table = ({ data, rowsPerPage }) => {
  const [page] = useState(1);

  // console.log(data, rowsPerPage);
  const router = useRouter();
  const dispatch = useDispatch();
  const { slice } = UseTable(data, page, rowsPerPage);

  const handleDelete = (recipe) => {
    if (confirm("Are you sure you want to delete")) {
      dispatch(deleteRecipe(recipe));
      dispatch(getRecipes(recipe));
    }
  };

  const handleEdit = (recipe) => {
    router.push({
      pathname: "/edit/recipe",
      query: { id: recipe._id },
    });
  };

  const handleAdd = (e) => { 
    e.preventDefault();
    router.push("/add/recipe");
  };

  // const handleclick = (id) => {
  //   router.push({
  //     pathname: "/recipe",
  //     query: { id: id },
  //   });
  // };

  return (
    <>
    <div className={styles.body}>
     <div className={styles.addItem}>
        <button className={styles.button} onClick={handleAdd}>
          Add
        </button>
      </div>
      <table className={styles.table} border="2" align="center">
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>City</th>
            <th className={styles.tableHeader}>Adress</th>
            <th className={styles.tableHeader}>Text</th>
            <th className={styles.tableHeader}>age</th>
            <th className={styles.tableHeader}>mobile</th>
            
            
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => ( 
            <tr className={styles.tableRowItems} key={el._id}>
              <td
                className={styles.tableCell}
                onClick={() => handleclick(el._id)}
                style={{ cursor: "pointer" }}
              >
                {el.title}
              </td>
              <td className={styles.tableCell}>{el.category}</td>
              <td className={styles.tableCell}>
                <button
                  className={styles.button}
                  onClick={() => handleEdit(el)}
                >
                  Edit
                </button>
                <button
                  className={styles.button}
                  onClick={() => handleDelete(el)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Table;
