
import React from 'react'

const Cart = () => {
  return (
    <div>
    <div class="container p-8 mx-auto mt-12 bg-white">
    <div class="w-full overflow-x-auto">
      <div class="my-2">
        <h3 class="text-xl font-bold tracking-wider">Shopping Cart 3 item</h3>
      </div>
      <table class="w-full shadow-inner">
        <thead>
          <tr class="bg-gray-100">
            <th class="px-6 py-3 font-bold whitespace-nowrap">Product</th>
            <th class="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
            <th class="px-6 py-3 font-bold whitespace-nowrap">Price</th>
            <th class="px-6 py-3 font-bold whitespace-nowrap">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-4 px-6 text-center whitespace-nowrap">Iphone 11</td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
              <div>
                <button class="px-2 py-0 shadow">-</button>
                <input
                  type="text"
                  name="qty"
                  value="2"
                  class="w-12 text-center bg-gray-100 outline-none"
                />
                <button class="px-2 py-0 shadow">+</button>
              </div>
            </td>
            <td class="p-4 px-6 text-center whitespace-nowrap">$1,000</td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
              <button class="px-2 py-0 text-red-100 bg-red-600 rounded">
                x
              </button>
            </td>
          </tr>
          <tr>
            <td class="p-4 px-6 text-center whitespace-nowrap">Iphone 12</td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
              <div>
                <button class="px-2 py-0 shadow">-</button>
                <input
                  type="text"
                  name="qty"
                  value="1"
                  class="w-12 text-center bg-gray-100 outline-none"
                />
                <button class="px-2 py-0 shadow">+</button>
              </div>
            </td>
            <td class="p-4 px-6 text-center whitespace-nowrap">$12,00</td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
              <button class="px-2 py-0 text-red-100 bg-red-600 rounded">
                x
              </button>
            </td>
          </tr>
          <tr>
            <td class="p-4 px-6 text-center whitespace-nowrap">Iphone 13</td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
              <div>
                <button class="px-2 py-0 shadow">-</button>
                <input
                  type="text"
                  name="qty"
                  value="1"
                  class="w-12 text-center bg-gray-100 outline-none"
                />
                <button class="px-2 py-0 shadow">+</button>
              </div>
            </td>
            <td class="p-4 px-6 text-center whitespace-nowrap">$1,300</td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
              <button class="px-2 py-0 text-red-100 bg-red-600 rounded">
                x
              </button>
            </td>
          </tr>
          <tr>
            <td class="p-4 px-6 text-center whitespace-nowrap"></td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
              <div class="font-bold">Total Qty - 4</div>
            </td>
            <td class="p-4 px-6 font-extrabold text-center whitespace-nowrap">
              Total - 40,00 (include tax)
            </td>
            <td class="p-4 px-6 text-center whitespace-nowrap">
              <button class="px-4 py-1 text-red-600 bg-red-100">
                Clear All
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-end mt-4 space-x-2">
        <button
          class="
            px-6
            py-3
            text-sm text-gray-800
            bg-gray-200
            hover:bg-gray-400
          "
        >
          Cannel
        </button>
        <button
          class="
            px-6
            py-3
            text-sm text-white
            bg-indigo-500
            hover:bg-indigo-600
          "
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
    </div>
    
    </div>
  )
}

export default Cart


// import React, { useState, useEffect } from "react";
// import styles from  "../../styles/cart.module.css";

// const Cart = ({  cart, setCart, handleChange }) => {
// //  const [cart, setCart] = useState([""])
//   const [price, setPrice] = useState(0);

//   // const handleRemove = (id) => {
//   //   const arr = cart.filter((item) => item.id !== id);
//   //   setCart(arr);
//   //   handlePrice();
//   // };

//   const handlePrice = () => {
//     let ans = 0;
//     cart.map((item) => (ans += item.amount * item.price));
//     setPrice(ans);
//   };

//   useEffect(() => {
//     handlePrice();
//   });

//   return (
//     <div >
//       {cart.map((item) => (
//         <div className={styles.cartbox} key={item.id}>
//           <div className={styles.cartimg}>
//             <img src={item.img} alt="" />
//             <p>{item.title}</p>
//           </div>
//           <div>
//             <button onClick={() => handleChange(item, 1)}>+</button>
//             <button>{item.amount}</button>
//             <button onClick={() => handleChange(item, -1)}>-</button>
//           </div>
//           <div>
//             <span>{item.price}</span>
//             <button onClick={() => handleRemove(item.id)}>Remove</button>
//           </div>
//         </div>
//       ))}
//       <div className="total">
//         <span>Total Price of your Cart</span>
//         <span>Rs - {price}</span>
//       </div>
//     </div>
//   );
// };
