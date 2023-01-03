import Image from "next/image";
import React, { useRef, useEffect, useState, createContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/slug.module.css";
import Head from "../../components/Head";
import ProductList from "../../components/ProductList";
import CartList from "../products/cart";
import Product from "../../components/Product";

// import Cartpopup from "../../components/cartpopup";
// import * as dotenv from 'dotenv';
// dotenv.config();

//const CartpopupContext = createContext(true);

const Category = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState();
//const [showdata, setShowData] = useState([]);
//const ThemeContext = createContext(true);

  const dataFetchProduct = useRef(false);
  const dataFetchcategory = useRef(false);
  const router = useRouter();
  const { category } = router.query;

  const addToCart = (data) => {
    setShowCart(true);
    console.log(showCart);

    setCart([...cart, { ...data, quantity: 1 }]);
    const ele = document.querySelector("[data-key='"+data._id+"']");
    //const cartele = document.querySelector("#head-cart .sup");
    //cartele.innerText =cart.length;
    console.log(cart);
    setShowCart(true);
    if(showCart){
      // alert('aaaaa');
     
    }
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

const {category_Id} = router.query


  // const {category_Id} = router.query

  useEffect(() => {
    if (dataFetchcategory.current) return;
    const slug = window.location.pathname.split("/")[2];
    // console.log(slug);
    dataFetchcategory.current = true;

    if (dataFetchProduct.current) return;
    dataFetchProduct.current = true;
    const getProduct = async () => {
      // console.log(process.env.API_URL,'gggggg');

      const res = await axios.get("http://localhost:5000/products/" + slug);
      res.data.map((value, index) => {
        setProduct((product) => [...product, value]);
      });
    };
    getProduct();
  }, []);

  return (
    
    <div  className="card-wrapper">
        <div className="p-2">
          <div className="grid grid-cols-4 gap-2 ">
            {product.map((value, index) => {
              return (
                  <Product product={value}/>
              )
            })}
          </div>
        </div>
      
    </div>
  );
};

export default Category;
//export { CartpopupContext };


// <div className="md:flex md:items-center">
//               <div className="shadow bg-gray-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded">
//               <button>Add to cart 🛒</button>
//               </div>

//               </div>

// {value.name}
// <br />${value.price}
// height={500}
// <ProductList
//                   product={product}
//                   addToCart={addToCart}
//                 ></ProductList>

// <CartpopupContext.Provider value={showCart}>
// </CartpopupContext.Provider>
// <ThemeContext.Provider value={showCart}>
// <ThemeContext.Provider value="{showCart}">
// <Cartpopup open={showCart}/>
// </ThemeContext.Provider>
