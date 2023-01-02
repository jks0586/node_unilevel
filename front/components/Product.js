import React,{useState} from 'react'
import Cartpopup from './cartpopup';
import Link from "next/link";
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
        if(showCart){
          // alert('aaaaa');
         
        }
        setCart([...cart, { ...data, quantity: 1 }]);
      };

  return (
            <div key={props.product._id} data-key={props.product._id}>
            <Link
            href={{
                pathname: "/products/[slug]",
                query: { slug: props.product.slug },
            }}
            >
            <a>
                <img src={props.product.image} className="rounded" width="100%" />
            </a>
            </Link>
            <p>{props.product.name} </p>
            <p> Price.{props.product.price} </p>

            <div className="md:flex md:items-center">
            <div className="shadow bg-gray-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded">
                <button
                product={props.product}
                onClick={() => addToCart(props.product)}
                >Add to cart 🛒</button>
            </div>
            {(showCart)?<Cartpopup cartstatus={true} /> :null }
            </div>
    </div>
  )
}

export default Product
