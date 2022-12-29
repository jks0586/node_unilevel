import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { RiShoppingCart2Fill } from "react-icons/ri";
import Cart from "../pages/products/cart";
const Shop = () => {
  const [modal, semodal] = useState(false);
  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={() => semodal(!modal)}>
        <ModalHeader toggle={() => semodal(!modal)}>Popup</ModalHeader>
        <ModalBody><Cart/></ModalBody>
      </Modal>
      <div style={{backgroundColor:"#acafac",}} onClick={() => semodal(true)}>
        <a className="bg-blue-600">
          <RiShoppingCart2Fill />
        </a>
      </div>
    </div>
  );
};

export default Shop;
// <div className='btn mt-10' style={{backgroundColor:"red", color:"white"}} onClick={()=>semodal(true)}>
