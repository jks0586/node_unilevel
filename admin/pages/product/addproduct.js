import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Adminlayout from "../../components/Adminlayout";
import { addProduct } from "../../redux/actions/productAction";
import styles from "../../styles/addProduct.module.css";
import JoditEditor from "jodit-react";
import { Terminal } from "xterm";

const Addproduct = () => {
  const initalState = {
    name: "",
    quality: "",
    quantity: "",
    price: "",
    description: "",
    image: [],
  };

  const [error, setError] = useState(false);
  const [userData, setUserData] = useState(initalState);
  const { quality, quantity, price, image, name, description } = userData;
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState();
  const [imgsSrc, setImgsSrc] = useState([]);
  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();
  // const editor = useRef(null);
  // const [content, setContent] = useState("");

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

  //   const handleFileChange = (e) => {
  //     for (const file of e.target.files) {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file);
  //       reader.onload = () => {
  //         setImgsSrc((imgs) => [...imgs, reader.result]);
  //       };
  //       reader.onerror = () => {
  //         console.log(reader.error);
  //  }
  // }
  //       e.preventDefault();
  //      setUserData({ ...userData, image: e.target.files[0] });
  //      if (e.target.files && e.target.files.length > 0) {
  //      setSelectedImage(e.target.files[0]);
  //     }
  //   };

  const handleFileChange = (e) => {
    e.preventDefault();
    setMessage("");
    let file = e.target.files;
    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        setMessage("only images accepted");
      }
    }
    setUserData({ ...userData, image: e.target.files[0] });
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[""]);
    }
  };

  // useEffect(() => {
  //   const initTerminal = async () => {
  //     const { Terminal } = await import("xterm");
  //     const term = new Terminal();
  //     // Add logic with `term`
  //   };
  //   initTerminal();
  // }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length == 0 ||
      quality.length == 0 ||
      quantity.length == 0 ||
      price.length == 0 ||
      description.length == 0 ||
      image.length == 0
    ) {
      setError(true);
    }
    if (name && quantity && quality && price && image) {
      console.log(
        "name: ",
        name,
        "\nprice: ",
        price,
        "\nquality: ",
        quality,
        "\ndescription: ",
        description,
        "\nimage: ",
        image,
        "\nquantity: ",
        quantity
      );

      dispatch(addProduct(userData, router));

      alert("Submit");
      console.log(userData);
      router.push("/dashProduct");
    }
  };

  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };

  //   const contentFieldChanaged = (data) => {

  //     setPost({ ...post, 'content': data })

  // }

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
            placeholder="Please Enter Your product name."
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
            type="number"
            name="quantity"
            placeholder="Please Enter Your  quantity"
            onChange={handleChange}
            {...(e) => setquantity(e.target.value)}
            value={quantity}
          />
          {error && quantity.length <= 0 ? (
            <label className={styles.validate}> quantity can't be Empty</label>
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
          <>
            <div>
              <div className="p-3 md:w-1/2 w-[100px] bg-white rounded-md">
                <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                  {message}
                </span>
                <div className="h-32 w-full relative border-2 items-center rounded-md cursor-pointer bg-gray-300 border-gray-400 border-dotted">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="h-full w-full bg-green-200 opacity-0 z-10 absolute"
                    multiple="multiple"
                    name="files[]"
                  />
                  <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
                    <div className="flex flex-col">
                      <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                      <span className="text-[12px]">{`Drop a file`}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {files.map((file, key) => {
                    return (
                      <div key={key} className="overflow-hidden relative">
                        <i
                          handleFileChange={() => {
                            removeImage(file.name);
                          }}
                          className="mdi mdi-close absolute right-1 hover:text-white cursor-pointer"
                        ></i>
                        <img
                          className="h-20 w-20 rounded-md"
                          src={URL.createObjectURL(file)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
          {error && image.length <= 0 ? (
            <label className={styles.validate}>image can't be Empty</label>
          ) : (
            ""
          )}

          <input
            type="number"
            name="price"
            placeholder="Please Enter Your  price"
            onChange={handleChange}
            {...(e) => setprice(e.target.value)}
            value={price}
          />
          {error && price.length <= 0 ? (
            <label className={styles.validate}> price can't be Empty</label>
          ) : (
            ""
          )}

          <textarea
            id="text"
            name="description"
            rows="5"
            placeholder="Please Enter Your Description"
            onChange={handleChange}
            value={description}
          />
          {/* <div>
            <JoditEditor ref={editor} value={content} onChange={handleChange} />
          </div> */}
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

export default Addproduct;
