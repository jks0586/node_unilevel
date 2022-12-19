
import Image from "next/image";
import React,{useRef,useEffect,useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Category = () => {
  const [product, setProduct] = useState([]);
  const dataFetchProduct = useRef(false);
const dataFetchcategory = useRef(false);
  const router = useRouter();
  const {category} = router.query
  
  
  // const {category_Id} = router.query
  // const { categoryid } = router.query
  //const categoryId  = router.query['categoryId'];
 
  
  useEffect(() => {
    
    if (dataFetchcategory.current) return;
    const slug = window.location.pathname.split("/")[2];
    // console.log(slug);
    dataFetchcategory.current=true;

    if (dataFetchProduct.current) return;
    dataFetchProduct.current = true;
   const getProduct   = async () => {
     // console.log(process.env.API_URL);
    
      const res = await axios.get("http://localhost:5000/products/"+slug);
     res.data.map((value,index)=>{
       setProduct(product => [...product, value]);
     });
     };
     getProduct();
  }, []);

  // const handler = function(req, res){
 
  //   const { categoryid } = req.query
  //   res.end(`Category: ${categoryid}`)
  // }  

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
