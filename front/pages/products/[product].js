import { useRouter } from 'next/router'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';

const Product = () => {
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
    <div className="p-4">
    <div className="grid grid-cols-3 gap-4">
      <div className="item">
        <a>
          <Image
            src={value.image}
            className="rounded"
            width={350}
            height={350}
          />
        </a>
        {value.name}
      </div>
      
      </div>
    </div>
 
);
};


export default Product
