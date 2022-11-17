import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/addProduct.module.css";
import { addPost } from "../../redux/actions/postAction";
import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";
const Addproduct = () => {
  const initalState = {
    age: "",
    city: "",
    mobile: "",
    firstname: "",

    // img: [],
  };
  const [userData, setUserData] = useState(initalState);
  const { city, title, text, age, mobile, firstname } = userData;
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // if (name === "img") {
    //   setUserData({ ...userData, [name]: [...img, e.target.files[0]] });
    // } else
    {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    // if (img.length === 0) {
    //   dispatch({
    //     type: GLOBAL_CONSTANT.ALERT,
    //     payload: { error: "Please add at least one image" },
    //   });
    // } else
    {
      dispatch(addPost(userData, router));
      alert("Submit");
      console.log(userData);
      //router.push("/post");
    }
  };

  // const handleDelete = (index) => {
  //   const newArr = [...img];
  //   newArr.splice(index, 1);
  //   setUserData({ ...userData, ["img"]: newArr });
  // };

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">FirstName</label>
          <input
            type="text"
            name="firstname"
            className="form-control"
            placeholder="Please Enter Your Name"
            onChange={handleChange}
            value={firstname}
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <select
            className="form-control"
            id="city"
            name="city"
            onChange={handleChange}
            value={city}
          >
            <option value="call1">Select City</option>
            <option value="Aligarh">Aligarh</option>
            <option value="Kanpur">Kanpur</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>

        <div>
          <label htmlFor="city">Number</label>
          <input
            type="number"
            className="form-control"
            name="mobile"
            placeholder="Please Enter Your Mobile"
            onChange={handleChange}
            value={mobile}
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            placeholder="Please Enter Your Age"
            onChange={handleChange}
            value={age}
          />
        </div>

        <div>
          <label htmlFor="text">Description</label>
          <textarea
            type="text"
            className="form-control"
            id="text"
            name="text"
            rows="7"
            placeholder="Please Enter Your Description"
            onChange={handleChange}
            value={text}
          />
        </div>
        <br />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Addproduct;
