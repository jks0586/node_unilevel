import React from "react";
import Adminlayout from "../../components/Adminlayout";
import styles from "../../styles/addProduct.module.css";

const Addproduct = () => {
  return (
    <Adminlayout>
      <div>
        <form className={styles.form}>
          <h3>Add Product</h3>

          <input
            type="text"
            name="product name."
            placeholder="Please Enter Your product name."
          />

          <input
            type="number"
            name="Price"
            placeholder="Please Enter Your Product Price"
          />

          <select id="category" name="category">
            <option value="">Select Category</option>
            <option value="Shopping Products">Shopping Products</option>
            <option value="Specialty products">Specialty Products</option>
            <option value="Consumer Product">Consumer Product</option>
            <option value="Industrial Product">Industrial Product</option>
          </select>

          <input
            type="number"
            name="discount"
            placeholder="Please Enter Your Discount"
          />

          <textarea
            id="text"
            name="text"
            rows="5"
            placeholder="Please Enter Your Comments"
          />

          <input
            id="img"
            name="img"
            type="file"
            placeholder="Please Enter Your Description"
          />

          <input type="submit" value="submit" />
        </form>
      </div>
    </Adminlayout>
  );
};

export default Addproduct;
