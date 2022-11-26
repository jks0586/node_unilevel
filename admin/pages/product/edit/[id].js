import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editProduct } from '../../../redux/actions/productAction';
import Adminlayout from '../../../components/Adminlayout';
import styles from "../../../styles/addProduct.module.css"
import { getDataApi } from '../../../config/fetchData';
const editpost = () => {
    const pageroute=useRouter();
    const initalState = {
        name: "",
        quality: "", 
        quantity: "",
        price: "",
        image: "",
      };
    
      const [userData, setUserData] = useState(initalState);
      const { name, title, quantity, quality, image, price } = userData;
      const { post, auth } = useSelector((state) => state);
      const dispatch = useDispatch();
      const router = useRouter()
    
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

        if (pageroute.query.id!=undefined) {
            dispatch(editProduct(pageroute.query.id, userData,router));
            alert("update");
            router.push("/dashProduct");
        } else
        {
          dispatch(editProduct(userData, router));
          alert("update");
          // console.log(userData); 
          router.push("/dashProduct");
         
          
        }
      }; 
      useEffect(() => {
        if(pageroute.query.id!=undefined){
        let _id=pageroute.query.id;
        const fetchdata=getDataApi('product/'+_id).then(respose=>{
       setUserData({ ...userData, ['name']:respose.name,['quality']:respose.quality,['quantity']:respose.quantity,['price']:respose.price,['description']:respose.description,['image']:respose.image,});
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

        <input
          type="number"
          name="quantity"
          placeholder="Please Enter Your  quantity"
          onChange={handleChange}
          value={quantity}
        />

       

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
          onChange={handleFileChange}
        />

        <textarea
          id="number"
          name="price"
          placeholder="Please Enter Your price"
          onChange={handleChange}
          value={price}
        />

        <input type="submit" value="submit" />
      </form>
    </div>
  </Adminlayout>
  )
}

export default editpost
