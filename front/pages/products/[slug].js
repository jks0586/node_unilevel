import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/slug.module.css";

const Product = () => {
  const [product, setProduct] = useState("");
  const dataFetchproduct = useRef(false);
  const router = useRouter();

  
  useEffect(() => {
    if (dataFetchproduct.current) return;
    const slug = window.location.pathname.split("/")[2];
    // console.log(product);
    dataFetchproduct.current = true;

    const getProduct = async () => {
      const res = await axios.get(
        "http://localhost:5000/singleproduct/" + slug
      );
      // console.log(res.data.image);
      setProduct(res.data);
    };
    getProduct();
    // console.log(product);
  }, []);

  return (
    <div className="w-full flex">
      <div className="w-100">
        <div className="w-100 block flex-grow lg:flex  lg:w-auto p-2">
          <a>
            <img
              src={product.image}
              className="rounded"
              width={700}
              height={700}
            />
          </a>
         <p className="p-4">
         Name: {product.name}
         <br/>
        {product.price}
        <br/>
       
        {product.description}
        
         </p>
         
       
        <div className="md:flex md:items-center">
        <div className="shadow bg-gray-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded">
        <button>Add to cart 🛒</button>
         </div>

          </div>
          </div>
        
      </div>
    </div>
  );
};

export default Product;
