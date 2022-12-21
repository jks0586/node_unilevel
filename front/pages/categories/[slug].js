import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/slug.module.css"
const Category = () => {
  const [product, setProduct] = useState([]);
  const dataFetchProduct = useRef(false);
  const dataFetchcategory = useRef(false);
  const router = useRouter();
  const { category } = router.query;

  // const {category_Id} = router.query

  useEffect(() => {
    if (dataFetchcategory.current) return;
    const slug = window.location.pathname.split("/")[2];
    // console.log(slug);
    dataFetchcategory.current = true;

    if (dataFetchProduct.current) return;
    dataFetchProduct.current = true;
    const getProduct = async () => {
      // console.log(process.env.API_URL);

      const res = await axios.get("http://localhost:5000/products/" + slug);
      res.data.map((value, index) => {
        setProduct((product) => [...product, value]);
      });
    };
    getProduct();
  }, []);

  return (
    <div className="p-2">
      <div className="grid grid-cols-3 gap-2">
        {product.map((value, price, index) => {
          return (
            <div>
            <Link
            href={{
              pathname: '/products/[slug]',
              query: { slug: value.slug },
            }}
          >
                <a>
                  <img
                    src={value.image}
                    className="rounded"
                    width={500}
                    height={500}
                  />
                </a>
              </Link>
              {value.name}
              <br/>
              ${value.price}
              <div className="md:flex md:items-center">
              <div className="shadow bg-gray-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded">
              <button>Add to cart 🛒</button>
              </div>
           
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
