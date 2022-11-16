import React from "react";
import Adminlayout from "../../components/Adminlayout";
import { addPost } from "../../redux/actions/postAction";
import styles from "../../styles/addProduct.module.css";

const Addproduct = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
     
  //   console.log(userData);

  //   if (img.length === 0) {
  //     dispatch({
  //       type: GLOBAL_CONSTANT.ALERT,
  //       payload: { error: "Please add at least one image" },
  //     });
  //   } else {
  //     alert('gggg');
  //     dispatch(addPost(userData, router));
  //   }
  // };



  return (
    <Adminlayout>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
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
