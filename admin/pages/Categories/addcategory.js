import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Adminlayout from "../../components/Adminlayout";
import { addCategory } from "../../redux/actions/categoryAction";
import styles from "../../styles/addProduct.module.css";

const Addcategory = () => {
  const initialState = {
    name: "",
    title: "",
    status: "",
    quality: "",
    image: "",
    description: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { name, title, description, status, quality, image } = userData;
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, className, type, placeholder } = e.target;
    {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      dispatch(addCategory(userData, router));
      alert("Submit");
      console.log(userData);
      router.push("/category");
    }
  };

  return (
    <Adminlayout>
      <div>
        <form className={styles.form} onSubmit={handleSubmit} enctype="multipart/form-data">
          <h3>Add Category</h3>

          <input
            type="text"
            name="name"
            placeholder="Please Enter Your category name."
            onChange={handleChange}
            value={name}
          />

          <input
            type="text"
            name="title"
            placeholder="Please Enter Your  title"
            onChange={handleChange}
            value={title}
          />

          <select
            id="status"
            name="status"
            onChange={handleChange}
            value={status}
          >
            <option value="">Select Status</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>

          <select
            id="quality"
            name="quality"
            onChange={handleChange}
            value={quality}
          >
            <option value="">Select Quality</option>
            <option value="Good">Good Quality</option>
            <option value="Not Good">Not Good</option>
          </select>

          <input
            id="image"
            name="image"
            type="file"
            placeholder="Please Enter Your image"
            onChange={handleChange}
            value={image}
          />

          <textarea
            id="text"
            name="description"
            rows="5"
            placeholder="Please Enter Your Description"
            onChange={handleChange}
            value={description}
          />

          <input type="submit" value="submit" />
        </form>
      </div>
    </Adminlayout>
  );
};

export default Addcategory;
