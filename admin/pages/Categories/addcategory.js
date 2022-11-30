import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Adminlayout from "../../components/Adminlayout";
import { addCategory } from "../../redux/actions/categoryAction";
import styles from "../../styles/addProduct.module.css";

const Addcategory = () => {
  const initalState = {
    name: "",
    quality: "",
    title: "",
    status: "",
    Shortdescription: "",
    image: [],
  };

  const [error, setError] = useState(false);
  const [userData, setUserData] = useState(initalState);
  const { quality, status, title, Shortdescription, image, name } = userData;
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState();

  

  const handleChange = (e) => {
    const { name, value, className, type, placeholder } = e.target;
    console.log(e.target.attributes, className);
    {
      setUserData({ ...userData, [name]: value });
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "image") {
  //   setUserData({ ...userData, [name]: [...image, e.target.files[0]] });
  //   } else {
  //     setUserData({ ...userData, [name]: value });
  //   }
  //  };

  const handleFileChange = (e) => {
    e.preventDefault();
    setUserData({ ...userData, image: e.target.files[0] });
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length == 0 ||
      quality.length == 0 ||
      title.length == 0 ||
      status.length == 0 ||
      description.length == 0 ||
      image.length == 0
    ) {
      setError(true);
    }
    if (name && title && quality && status && Shortdescription && image) {
      console.log(
        "name: ",
        name,
        "\ntitle: ",
        title,
        "\nstatus: ",
        status,
        "\ndescription: ",
        description,
        "\nimage: ",
        image,
        "\nquality: ",
        quality
      );
      
      dispatch(addCategory(userData, router));
      
      alert("Submit");
      console.log(userData);
      router.push("/category");
    }
  };
  const removeSelectedImage = () => {
    setSelectedImage();
};

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
            {...(e) => setname(e.target.value)}
            value={name}
          />
          {error && name.length <= 0 ? (
            <label className={styles.validate}> Name can't be Empty</label>
          ) : (
            ""
          )}

          <input
            type="text"
            name="title"
            placeholder="Please Enter Your  title"
            onChange={handleChange}
            {...(e) => settitle(e.target.value)}
            value={title}
          />
          {error && title.length <= 0 ? (
            <label className={styles.validate}> title can't be Empty</label>
          ) : (
            ""
          )}
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
          {error && status.length <= 0 ? (
            <label className={styles.validate}>status can't be Empty</label>
          ) : (
            ""
          )}

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
          {error && quality.length <= 0 ? (
            <label className={styles.validate}>quality can't be Empty</label>
          ) : (
            ""
          )}

          <input
            id="image"
            name="image"
            type="file"
            placeholder="Please Enter Your image"
            onChange={handleFileChange}
          />
          
          {selectedImage && (
            <div style={styles.preview}>
              <img
                src={URL.createObjectURL(selectedImage)}
                style={styles.image}
                alt="Thumb"
              />
              <button onClick={removeSelectedImage} style={styles.delete}>
                Remove This Image
              </button>
            </div>
          )}
        
        
     
          {error && image.length <= 0 ? (
            <label className={styles.validate}>image can't be Empty</label>
          ) : (
            ""
          )}
        

          <textarea
            id="text"
            name="Short Description"
            rows="5"
            placeholder="Please Enter Your Short Description"
            onChange={handleChange}
            value={description}
          />
          {error && description.length <= 0 ? (
            <label className={styles.validate}>
              description can't be Empty
            </label>
          ) : (
            ""
          )}

          <input type="submit" value="submit" />
        </form>
        
      </div>
    </Adminlayout>
  );
};

export default Addcategory;


// <div>
// {image.map((imgage, index) => (
//   <div key={index}>
//     {imgage.url ? (
//       <img src={imgage.url} />
//<img src={"http://localhost:5000/uploads\\1669187386955-image.png"} />
//     ) : (
//       <img src={URL.createObjectURL(image)} />
//     )}
//     <span onClick={() => handleDelete(index)}>&times;</span>
//   </div>
// ))}
// </div>