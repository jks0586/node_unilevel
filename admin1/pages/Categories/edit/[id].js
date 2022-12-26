import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataApi } from "../../../config/fetchData";
import { editCategory } from "../../../redux/actions/categoryAction";
import Adminlayout from "../../../components/Adminlayout";
import styles from "../../../styles/addProduct.module.css";
const editpost = () => {
  const pageroute = useRouter();
  const initalState = {
    name: "",
    status: "",
    description: "",
    image: "",
  };

  const [userData, setUserData] = useState(initalState);
  const { name, title, description, quality, image, status } = userData;
  const { post, auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, className, type, placeholder } = e.target;
    console.log(e.target.attributes, className);
    {
      setUserData({ ...userData, [name]: value });
    }
  };

  //use file
  const handleFileChange = (e) => {
    e.preventDefault();
    setUserData({ ...userData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pageroute.query.id != undefined) {
      dispatch(editCategory(pageroute.query.id, userData, router));
      alert("update");
      router.push("/Categories/categorytable");
    } else {
      dispatch(editCategory(userData, router));
      alert("update");
      // console.log(userData);
      router.push("/Categories/categorytable");
    }
  };
  useEffect(() => {
    if (pageroute.query.id != undefined) {
      let _id = pageroute.query.id;
      const fetchdata = getDataApi("category/" + _id).then((respose) => {
        setUserData({
          ...userData,
          ["name"]: respose.name,
          ["status"]: respose.status,
          ["description"]: respose.description,
          ["image"]: respose.image,
        });
        //setUserData(...userData,respose);
      });
    }
  }, [pageroute.query.id]);

  return (
    <Adminlayout>
      <div>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          enctype="multipart/form-data"
        >
          <h3>Add Category</h3>

          <input
            type="text"
            name="name"
            placeholder="Please Enter Your category name."
            onChange={handleChange}
            value={name}
          />


          <select
            id="status"
            name="status"
            onChange={handleChange}
            value={status}
          >
            <option value="">Select Status</option>
            <option value="Enable">True</option>
            <option value="Disable">False</option>
          </select>

         

          <input
            id="image"
            name="image"
            type="file"
            placeholder="Please Enter Your image"
            onChange={handleFileChange}
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

export default editpost;
