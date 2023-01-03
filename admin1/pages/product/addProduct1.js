import { useRouter } from "next/router";
import React, { useState, useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/dashboard.module.css";
import Adminlayout from "../../components/Adminlayout";
import { addProduct } from "../../redux/actions/productAction";
//import CKeditor from "../../components/Editor";
import Loadable from "react-loadable"
//import dynamic from "next/dynamic";
import axios from "axios";
import { GLOBAL_CONSTANT } from "../../config/GlobalConstant";

const Editor = Loadable({
  //import your loader with the full name of the js file
  loader: () => import("../../components/Editor"),
  loading() {
    return <div>Loading...</div>
  }
  });
const addProduct11 = () => {
  //const Editor = dynamic(() => import("../../components/Editor"), { ssr: false });

  //secound method 
  
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
  const dataFetchCategory = useRef(false);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState([]);
  // const[categoryid, setcategoryId] = useState()
  const [userData, setUserData] = useState(initalState);
  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();
  const {
    quality,
    slug,
    quantity,
    price,
    image,
    name,
    stockquantity,
    specialprice,
    description,
  } = userData;
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  const [imgsSrc, setImgsSrc] = useState([]);

  //for edit data
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value, className, type, placeholder } = e.target;
    console.log(e.target.attributes, className);
    {
      setUserData({ ...userData, [name]: value });
    }
  }; 

  //For Single Image
  const handleFileChange = (e) => {
    e.preventDefault();
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
    }
  };

  //for category

  useEffect(() => {
    if (dataFetchCategory.current) return;
      dataFetchCategory.current = true;

    const getCategory = async () => {
      const res = await axios.get("http://localhost:5000/category");
     res.data.map((value,index)=>{
       setCategory(category => [...category, value]);
       
     });
       
     };
     getCategory();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length == 0 ||
      slug.length == 0 ||
      quality.length == 0 ||
      price.length == 0 ||
      quantity.length == 0 ||
      stockquantity.length == 0 ||
      specialprice.length == 0 ||
      description.length == 0 ||
      image.length == 0
    ) {
      setError(true);
    }
    if (
      name &&
      slug &&
      price &&
      quality &&
      quantity &&
      description &&
      stockquantity &&
      specialprice &&
      image
    ) {
      console.log(
        "name: ",
        name,
        "\nquantity: ",
        quantity,
        "\nslug: ",
        slug,
        "\nstockquantity: ",
        stockquantity,
        "\nprice: ",
        price,
        "\nspecialprice: ",
        specialprice,
        "\ndescription: ",
        description,
        "\nimage: ",
        image,
        "\nquality: ",
        quality
      );

      dispatch(addProduct(userData, router));

      // alert("Submit");
      // console.log(userData);
      // router.push("/product/producttable");
    }
  };
  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };
  // const aprops=[];

  // <Adminlayout adminprops={aprops}>

  return (
    <Adminlayout>
      <div className={styles.container}>
        <h1 className={styles.header}>Add Product</h1>
        <div>
          <form
            action="/multiple-upload"
            //  action="/Upload"
            className={styles.form}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div>
              <label htmlFor="Name">Name</label>
              <input
                type="name"
                id="Name"
                className="form-control"
                name="name"
                placeholder="Please Enter Your Product name."
                onChange={handleChange}
                {...(e) => setname(e.target.value)}
                value={name}
              />
              {error && name.length <= 0 ? (
                <label className={styles.validate}> Name can't be Empty</label>
              ) : (
                ""
              )}
            </div>
            <div>
            <label htmlFor="Slug">Slug</label>
              <input
                type="text"
                name="slug"
                id="slug"
                className="form-control"
                placeholder="Please Enter Your slug name."
                onChange={handleChange}
                value={slug}
              />
              {error && name.length <=  /(^[a-z0-9-]+$)/ ? (
                <label className={styles.validation}>Invalid slug: Only numbers, lowercase letters, and dashes are permitted.</label>
              ) : (
                ""
              )}
              </div>

            <div>
              <label htmlFor="quantity">quantity</label>
              <input
                type="number"
                id="quantity"
                className="form-control"
                name="quantity"
                placeholder="Please Enter Your  quantity"
                onChange={handleChange}
                {...(e) => setquantity(e.target.value)}
                value={quantity}
              />
              {error && quantity.length <= 0 ? (
                <label className={styles.validate}> title can't be Empty</label>
              ) : (
                ""
              )}
            </div>

            <div>
              <label htmlFor="stockquantity">stockquantity</label>
              <input
                type="number"
                id="stockquantity"
                className="form-control"
                name="stockquantity"
                placeholder="Please Enter Your  stockquantity"
                onChange={handleChange}
                {...(e) => setstockquantity(e.target.value)}
                value={stockquantity}
              />
              {error && stockquantity.length <= 0 ? (
                <label className={styles.validate}> title can't be Empty</label>
              ) : (
                ""
              )}
            </div>

            <label htmlFor="category">Category</label>
            
            <select
              name="category"
              className="form-control size"
              onChange={handleChange}
            >
              <option value="">--Select Category--</option>
              {
                (category.length > 0)?
                 category.map((value,index) => {
                return (
                    <option key={value._id} value={value._id}>
                      {value.name}
                    </option>
                );
              })
            :null
            
            
            }
            </select>

           

            <div>
              <label htmlFor="price">price</label>

              <input
                type="number"
                name="price"
                id="price"
                className="form-control"
                placeholder="Please Enter Your  price"
                onChange={handleChange}
                {...(e) => setprice(e.target.value)}
                value={price}
              />
              {error && price.length <= 0 ? (
                <label className={styles.validate}> title can't be Empty</label>
              ) : (
                ""
              )}
            </div>

            <div>
              <label htmlFor="specialprice">specialprice</label>

              <input
                type="number"
                name="specialprice"
                id="specialprice"
                className="form-control"
                placeholder="Please Enter Your  specialprice"
                onChange={handleChange}
                {...(e) => setspecialprice(e.target.value)}
                value={specialprice}
              />
              {error && specialprice.length <= 0 ? (
                <label className={styles.validate}> title can't be Empty</label>
              ) : (
                ""
              )}
            </div>

            <label htmlFor="quality">quality</label>
            <select
              id="quality"
              name="quality"
              className="form-control"
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

            <div>
              <div className="p-3 md:w-1/2 w-[360px] bg-white rounded-md">
                <span className="flex justify-center items-center text-[12px] mb-1 text-red-500"></span>
                <div className="h-32 w-full relative border-2 items-center rounded-md cursor-pointer bg-gray-300 border-gray-400 border-dotted">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="h-full w-full bg-green-200 opacity-0 z-10 absolute"
                    name="image[]"
                    multiple
                  />
                  <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
                    <div className="flex flex-col">
                      <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                      <span className="text-[12px]">{`Drag and Drop a file`}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {files.map((file, key) => {
                    return (
                      <div key={key} className="overflow-hidden relative">
                        <i
                          onClick={() => {
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

            {error && image.length <= 0 ? (
              <label className={styles.validate}>image can't be Empty</label>
            ) : (
              ""
            )}
            <label htmlFor="description">Description</label>
            <div>
             <Editor
                name="description"
                onChange={(data) => {
                  // const data = data;
                  console.log(data);
                  setUserData({ ...userData, description: data });
                  // onChange(data);
                }}
                editorLoaded={editorLoaded}
              />
              {JSON.stringify(data)}
            </div>

            {error && description.length <= 0 ? (
              <label className={styles.validate}>
                description can't be Empty
              </label>
            ) : (
              ""
            )}

            <input type="submit" value="submit" className="btn btn-info" />
          </form>
        </div>
      </div>
    </Adminlayout>
  );
};
// <textarea
//             id="text"
//             name="description"
//             rows="5"
//             placeholder="Please Enter Your Short Description"
//             onChange={handleChange}
//             value={description}
//           />
// <label htmlFor="description">Description</label>
// <div>
//   <CKeditor
//     name="description"
//     onChange={(data) => {
//       // const data = data;
//       console.log(data);
//       setUserData({ ...userData, description: data });
//       // onChange(data);
//     }}
//     editorLoaded={editorLoaded}
//   />
//   {JSON.stringify(data)}
// </div>

// {error && description.length <= 0 ? (
//   <label className={styles.validate}>
//     description can't be Empty
//   </label>
// ) : (
//   ""
// )}

export default addProduct1;