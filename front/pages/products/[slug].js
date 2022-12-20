import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';


const Singleproduct  = () => {
  const [product, setProduct] = useState([]);
  const dataFetchProduct = useRef(false);
 // const dataFetchcategory = useRef(false);
  const router = useRouter();
//  const { category } = router.query;
  
  useEffect(() => {
    if (dataFetchProduct.current) return;
    const singleslug = window.location.pathname.split("/")[2];
    // console.log(slug);
    dataFetchProduct.current = true;

    if (dataFetchProduct.current) return;
    dataFetchProduct.current = true;
    const getProduct = async () => {
      // console.log(process.env.API_URL);

      const res = await axios.get("http://localhost:5000/products/" + singleslug);
      res.data.map((value, index) => {
        setProduct((product) => [...product, value]);
      });
    };
    getProduct();
  }, []);

  return (
    <div>
    <div className="p-4">
    <div className="grid grid-cols-3 gap-4">
     {
      product.map((value,index)=>{
        return (
          <div>
            <a>
              <img
                src={value.image}
                className="rounded"
                width={500}
                height={500}
              />
            </a>
            {value.description}
            {value.price}
          {value.name}
          </div>
        )
      })
     }
    </div>
  </div>
  </div>
);
};


export default Singleproduct 
