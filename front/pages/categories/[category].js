
import Image from "next/image";
import React,{useRef,useEffect,useState} from "react";
import axios from "axios";

const Category = () => {
  const [product, setProduct] = useState([]);
  const dataFetchProduct = useRef(false);

  useEffect(() => {
    if (dataFetchProduct.current) return;
    dataFetchProduct.current = true;
    const getProduct   = async () => {
      // console.log(process.env.API_URL);
      const res = await axios.get("http://localhost:5000/product");
     res.data.map((value,index)=>{
       setProduct(product => [...product, value]);
     });
     };
     getProduct();
  }, []);

  return (
    <div className="p-2">
    <div className="grid grid-cols-3 gap-2">
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
         
          {value.name}
          </div>
        )
      })
     }
      
    </div>
  </div>
);
};

export default Category;
