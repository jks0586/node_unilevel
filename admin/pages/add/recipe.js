import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";
import { addRecipe } from "../../redux/actions/recipeAction";
import styles from "../../styles/form.module.css";
import Adminlayout from "../../components/Adminlayout";
import Button from "react-bootstrap/Button";
const Recipe = () => {
  const initalState = {
    age: "",
    city: "",
    mobile: "",
    firstname: "",
    lat: "00.00",
    lng: "00.00",
    img: [],
  };
  const [userData, setUserData] = useState(initalState);
  const {
    category,
    address,
    city,
    title,
    text,
    age,
    mobile,
    firstname,
    lng,
    lat,
    img,
  } = userData;
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "img") {
      setUserData({ ...userData, [name]: [...img, e.target.files[0]] });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    if (img.length === 0) {
      dispatch({
        type: GLOBAL_CONSTANT.ALERT,
        payload: { error: "Please add at least one image" },
      });
    } else {
      alert("gggg");
      dispatch(addRecipe(userData, router));
    }
  };

  const handleDelete = (index) => {
    const newArr = [...img];
    newArr.splice(index, 1);
    setUserData({ ...userData, ["img"]: newArr });
  };

  return (
    <Adminlayout>
      <div className={styles.body}>
        <div className={styles.form}>
          <h1 className={styles.header}> Add Form</h1>
          <div className="center">
            <form className="form-horizontal" onSubmit={handleSubmit}>
              {auth.token && <h3>Add Recipe</h3>}

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

              <Button as="input" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </Adminlayout>
  );
};

export default Recipe;
