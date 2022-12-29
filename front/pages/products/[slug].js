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
              width={850}
              height={850}
            />
          </a>
         Name: {product.name}
          <br />
         Price: {product.price}
        </div>
      </div>
    </div>
  );
};

export default Product;
