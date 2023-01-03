import React, { useState } from "react";
import Cartpopup from "./cartpopup";
import Link from "next/link";
import parse from "html-react-parser";
const Product = (props) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState();

  const addToCart = (data) => {
    setShowCart(false);

    // console.log(showCart);
    // console.log(data);

    setCart([...cart, { ...data, quantity: 1 }]);
    // const ele = document.querySelector("[data-key='"+data._id+"']");
    // const cartele = document.querySelector("#head-cart .sup");
    //cartele.innerText =cart.length;
    // console.log(cart);
    setShowCart(true);
    if (showCart) {
      // alert('aaaaa');
    }
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  return (
    <div className="h-100 p-2 card">
      <div key={props.product._id} data-key={props.product._id}>
        <Link
          href={{
            pathname: "/products/[slug]",
            query: { slug: props.product.slug },
          }}
        >
          <a>
            <img
              src={props.product.image}
              className="card-img-top"
              height="300px"
              width="100%"
            />
          </a>
        </Link>
        <div className="d-flex flex-column card-body">
          <div className="d-flex justify-content-between align-items-baseline mb-4 card-title h5">
            <p>{props.product.name} </p>
            <p class="ms-2 text-muted"> Price.{props.product.price} </p>
          </div>
        </div>

        <div className="mt-auto">
          <button
            class="w-100 btn btn-secondary"
            product={props.product}
            onClick={() => addToCart(props.product)}
          >
            Add to cart 🛒
          </button>
        </div>
        {showCart ? <Cartpopup cartstatus={true} /> : null}
      </div>
    </div>
  );
};


export default Product;
// <p>{parse(props.product.description)}</p>
//<img src={props.product.image} className="card-img-top" height="300px" width="100%"  />
