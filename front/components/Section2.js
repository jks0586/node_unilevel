// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function Section2() {
//   return (
//     <section className="p-2">
//       <div className="grid grid-cols-10 gap-4">
//         {Post()}
//         {Post()}
//         {Post()}
//         {Post()}
//         {Post()}
//         {Post()}
//         {Post()}
//         {Post()}
//         {Post()}
//         {Post()}
//       </div>
//     </section>
//   );
// }

// function Post() {
//   return (
//     <div className="item">
//       <div className="images">
//         <Link href={"/"}>
//           <a>
//             <Image
//               src={"/images/image.png"}
//               className="rounded"
//               width={100}
//               height={100}
//             />
//           </a>
//         </Link>
//         Category
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function SliderComponent() {

    const [category, setCategory] = useState([]);
    const dataFetchcategory = useRef(false);
    const router = useRouter();
  
    useEffect( () => {
      if (dataFetchcategory.current) return;
      dataFetchcategory.current = true;
        const res = axios.get(
          "http://localhost:5000/category" 
        ).then((res)=>{
            console.log(res.data);

            setCategory(res.data);
        });
        
      
    //   getCategory();
    //   console.log(category);
    }, [category]);
   
    return (
        
        <div className="swiper-slide" data-swiper-autoplay="2000">
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {category.map((value,index)=>{
                    return (
                        <SwiperSlide>
                            <img
                                className="object-cover h-96 w-full"
                                src={value.image}
                                alt="image slide 1"
                            />
                    </SwiperSlide>
                    )
                })
            }
            
                
                
                
            </Swiper>
        </div>
    );
}