import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";
import { editRecipe, getRecipes } from "../../redux/actions/recipeAction";
import styles from "../../styles/Recipe.module.css";

const Recipe = () => {
  const initalState = {
    category: "",
    address: "",
    city: "",
    title: "",
    text: "",
    age: "",
    mobile: "",
    lat: "00.00",
    lng: "00.00",
    img: [],
  };



  const [userData, setUserData] = useState(initalState);
  const { category, address, city, title, text, age, mobile, lng, lat, img } = userData;
  const { recipe, auth } = useSelector((state) => state);
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
    console.log("day1");
    if (img.length === 0) {
      console.log("day5");
      dispatch({
        type: GLOBAL_CONSTANT.ALERT,
        payload: { error: "Please add at least one image" },
      });
    } else {
      console.log("day6");
      dispatch(editRecipe(userData, router));
    }
  };

  const handleDelete = (index) => {
    const newArr = [...img];
    newArr.splice(index, 1);
    setUserData({ ...userData, ["img"]: newArr });
  };

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  useEffect(() => {
    if (recipe.recipes.length > 0) {
      const recipeId = recipe.recipes.filter(
        (recipe) => recipe._id === router.query.id
      );

      if (recipeId[0]) setUserData(recipeId[0]);
    }
  }, [recipe]);

  

  return (
  
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          {auth.token && <h3>Edit Recipe</h3>}

          <select
            id="category"
            name="category"
            onChange={handleChange}
            value={category}
          >
            <option value="call1">call1</option>
            <option value="call2">call2</option>
            <option value="call3">call3</option>
            <option value="call4">call4</option>
          </select>
          <input
            type="text"
            name="address"
            placeholder="Please Enter Your Address"
            onChange={handleChange}
            value={address}
          />
          <input
            type="text"
            name="city"
            placeholder="Please Enter Your City"
            onChange={handleChange}
            value={city}
          />
          <input
            type="number"
            name="mobile"
            placeholder="Please Enter Your Mobile"
            onChange={handleChange}
            value={mobile}
          />

          <input
            type="number"
            name="age"
            placeholder="Please Enter Your Age"
            onChange={handleChange}
            value={age}
          />

          <input
            type="text"
            name="title"
            placeholder="Please Enter Your Title"
            onChange={handleChange}
            value={title}
          />

          <textarea
            id="text"
            name="text"
            rows="5"
            placeholder="Please Enter Your Description"
            onChange={handleChange}
            value={text}
          />

          <input
            id="img"
            name="img"
            type="file"
            placeholder="Please Enter Your Description"
            onChange={handleChange}
          />

          <div>
            {img.map((imgage, index) => (
              <div key={index}>
                {imgage.url ? (
                  <img src={imgage.url} />
                ) : (
                  <img src={URL.createObjectURL(imgage)} />
                )}
                <span onClick={() => handleDelete(index)}>&times;</span>
              </div>
            ))}
          </div>

          <input
            type="submit"
            value="submit"
           
          
          />
        </form>
      </div>
    
  );
};

export default Recipe;
