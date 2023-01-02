import Link from "next/link";
import React, { useState } from "react";
import CartList from "../pages/products/cart";
import NavItem from "./NavItem";
import Head from "./head";
import { AiFillHome } from "react-icons/ai";
import { RiShoppingCart2Fill } from "react-icons/ri";
import Logo from "./Logo";
import Card from "./card";
import Cartpopup from "./cartpopup";
const MENU_LIST = [
  // { text: "Cart", href: "/products/cart",sethref:false,componet:'Head'},
  // { text: 'Login', href: "/login" ,sethref:true},
  // { text: <RiShoppingCart2Fill/>, href: "/products/cart",sethref:false,componet:'Head'},
  // { text: <RiShoppingCart2Fill/>, href: "/components/card",sethref:true},
  { text: <AiFillHome />, href: "/", sethref: true },
  // { text: 'Shop', href: "/shop" ,sethref:true},
];

const Navbar = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [cartshow, setCartshow] = useState(false);

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">
              <Logo />
            </h1>
          </a>
        </Link>

        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={(e) => {
                e.preventDefault();
                // alert('aaaaa');
                setActiveIdx(idx);
                setNavActive(false);
                menu.componet != "" && menu.componet == "Head"
                  ? setCartshow(true)
                  : null;
              }}
              key={menu.text}
            >
              <NavItem
                sethref={menu.sethref}
                active={activeIdx === idx}
                {...menu}
              />
            </div>
          ))}

         
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
// <Head count={cart.length} handleShow={handleShow}></Head>
// {
//   showCart ?
//     <CartList cart={cart} ></CartList> :
// ""}
// <h1 ><Cartpopup/></h1>
// <h1 ><Card/></h1>
// <h1>
// <Cartpopup />
// </h1>
