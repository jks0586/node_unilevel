import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React,{useRef,useEffect,useState} from "react";


const Category = () => {
  const [category, setCategory] = useState([]);
  const dataFetchCategory = useRef(false);

  useEffect(() => {
    if (dataFetchCategory.current) return;
    dataFetchCategory.current = true;
    const getCategory = async () => {
      // console.log(process.env.API_URL);
      const res = await axios.get("http://localhost:5000/category");
      
     res.data.map((value,index)=>{
       setCategory(category => [...category, value]);
     });
     };
     getCategory();
  }, []);
  
  return (
    <div className="p-2">
      <div className="grid grid-cols-7 gap-4">
       {
        category.map((value,index)=>{
          return (
            <div>
            <Link
              href={{
                pathname: "/categories/[slug]",
                query: { slug: value.slug },
              }}
            >
              <a>
                <img
                  src={value.image}
                  className="rounded"
                  width={100}
                  height={100}
                />
              </a>
            </Link>
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
