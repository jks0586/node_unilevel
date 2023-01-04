import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/slug.module.css";
import parse from "html-react-parser";


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
    <div class="pt-2 sm:px-4 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 ">
          <a>
            <img
              src={product.image}
              class="h-full w-full object-cover object-center"
            />
          </a>
          <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md ">
          <div class="mt-2 lg:row-span-2 lg:mt-0">
          
          <p class="text-3xl tracking-tight text-gray-900">{product.name}</p>
          <p class="text-3xl tracking-tight text-gray-500">${product.price}</p>
          <p class="">{product.description}</p>
         
           <button
              type="submit"
              class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-700 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Product
            </button>
            </div>
          </div>
          </div>
        
  );
};

export default Product;
