import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataApi } from "../../../config/fetchData";
import { editProduct } from "../../../redux/actions/productAction";
import Adminlayout from "../../../components/Adminlayout";
import styles from "../../../styles/addProduct.module.css";

const Edit = () => {
  const pageroute = useRouter();
  const initalState = {
    name: "",
    slug:"", 
    quality: "",
    quantity: "",
    stockquantity: "",
    price: "",
    specialprice: "",
    description: "",
    category: "",
    image: [],
  };
 
  const [userData, setUserData] = useState(initalState);
  const { name, slug, description, quality, image, quantity, stockquantity, price, specialprice } = userData;
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
      dispatch(editProduct(pageroute.query.id, userData, router));
      console.log(userData);
      alert("update");
      router.push("/product/producttable"); 
    } else {
      dispatch(editProduct(userData, router));
      alert("update");
      // console.log(userData);
      router.push("/product/producttable");
    }
  };
  useEffect(() => {
    if (pageroute.query.id != undefined) {
      let _id = pageroute.query.id;
      const fetchdata = getDataApi("product/" + _id).then((respose) => {
        setUserData({
          ...userData,
          ["name"]: respose.name,
          ["slug"]: respose.slug,
          ["description"]: respose.description,
          ["image"]: respose.image,
          ["quality"]: respose.quality,
          ["quantity"]: respose.quantity,
          ["specialprice"]: respose.specialprice,
          ["stockquantity"]: respose.stockquantity,
          ["price"]: respose.price,
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
          <h3>Add Product</h3>

          <input
            type="text"
            name="name"
            placeholder="Please Enter Your product  name."
            onChange={handleChange}
            value={name}
          />

          <input
          type="number"
          name="price"
          placeholder="Please Enter Your product price."
          onChange={handleChange}
          value={price}
        />

        <input
          type="number"
          name="specialprice"
          placeholder="Please Enter Your specialprice name."
          onChange={handleChange}
          value={specialprice}
        />

        <input
          type="number"
          name="quantity"
          placeholder="Please Enter Your product name."
          onChange={handleChange}
          value={quantity}
        />

        <input
        type="number"
        name="stockquantity"
        placeholder="Please Enter Your product name."
        onChange={handleChange}
        value={stockquantity}
      />


      <input
      type="text"
      name="slug"
      placeholder="Please Enter Your product name."
      onChange={handleChange}
      value={slug}
    />


          <select
            id="quality"
            name="quality"
            onChange={handleChange}
            value={quality}
          >
            <option value="">Select Status</option>
            <option value="Enable">Good</option>
            <option value="Disable">Not Good</option>
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

export default Edit;
