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

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState } from "react";

export default function SliderComponent() {
    //const [category, setCategory] = useState()
    return (
        <div class="swiper-slide" data-swiper-autoplay="2000">
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
                <SwiperSlide>
                    <img
                    className="object-cover h-96 w-full"
                        src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                    className="object-cover h-96 w-full"
                        src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                    className="object-cover h-96 w-full"
                        src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}