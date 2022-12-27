// import { useEffect, useState } from "react";


// function CartList({ cart }) {
//   const [CART, setCART] = useState([]);

//   useEffect(() => {
//     setCART(cart);
//   }, [cart]);

//   return (
//     <div>
//       {CART?.map((cartItem, cartindex) => {
//         return (
//           <div>
//             <img src={cartItem.url} width={40} />
//             <span> {cartItem.name} </span>
//             <button
//               onClick={() => {
//                 const _CART = CART.map((item, index) => {
//                   return cartindex === index
//                     ? {
//                         ...item,
//                         quantity: item.quantity > 0 ? item.quantity - 1 : 0,
//                       }
//                     : item;
//                 });
//                 setCART(_CART);
//               }}
//             >
//               -
//             </button>
//             <span> {cartItem.quantity} </span>
//             <button
//               onClick={() => {
//                 const _CART = CART.map((item, index) => {
//                   return cartindex === index
//                     ? { ...item, quantity: item.quantity + 1 }
//                     : item;
//                 });
//                 setCART(_CART);
//               }}
//             >
//               +
//             </button>
//             <span> Rs. {cartItem.price * cartItem.quantity} </span>
//           </div>
//         );
//       })}

//       <p>
//         {" "}
//         Total <span></span>
//         {CART.map((item) => item.price * item.quantity).reduce(
//           (total, value) => total + value,
//           0
//         )}
//       </p>
//     </div>
//   );
// }

// export default CartList
import React, { useState, useEffect } from "react";
import styles from  "../../styles/cart.module.css";

const Cart = ({  cart, setCart, handleChange }) => {
//  const [cart, setCart] = useState([""])
  const [price, setPrice] = useState(0);

  // const handleRemove = (id) => {
  //   const arr = cart.filter((item) => item.id !== id);
  //   setCart(arr);
  //   handlePrice();
  // };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div >
      {cart.map((item) => (
        <div className={styles.cartbox} key={item.id}>
          <div className={styles.cartimg}>
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </div>
  );
};

export default Cart;