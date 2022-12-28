import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

const Shop = () => {
  const [modal, semodal] = useState(false)
  return (
    <div>
   <Modal size="lg" isOpen={modal} toggle={()=>semodal(!modal)}>
   <ModalHeader  toggle={()=>semodal(!modal)}>
   Popup
   </ModalHeader>
   <ModalBody>
   
   </ModalBody>
   </Modal>
      <button className='btn mt-3' style={{backgroundColor:"red", color:"white"}} onClick={()=>semodal(true)}>
      Open Model</button>
    </div>
  )
}

export default Shop

// <div className="p-4">
// <div className="grid grid-cols-3 gap-4">
//   <div className="item">
//     <a>
//       <Image
//         src={"/images/pexel.jpeg"}
//         className="rounded"
//         width={350}
//         height={350}
//       />
//     </a>

//     <p>price2$</p>
//     <p></p>
//   </div>
//   <div>
//     <a>
//       <Image
//         src={"/images/download.jpg"}
//         className="rounded"
//         width={350}
//         height={350}
//       />
//     </a>

//     <p>price2$</p>
//     <p></p>
//   </div>
//   <div>
//     <a>
//       <Image
//         src={"/images/pexel.jpeg"}
//         className="rounded"
//         width={350}
//         height={350}
//       />
//     </a>

//     <p>price2$</p>
//     <p></p>
//   </div>
//   <div>
//     <a>
//       <Image
//         src={"/images/pigion.webp"}
//         className="rounded"
//         width={350}
//         height={350}
//       />
//     </a>

//     <p>price2$</p>
//   </div>
//   <div>
//     <a>
//       <Image
//         src={"/images/pigion.webp"}
//         className="rounded"
//         width={350}
//         height={350}
//       />
//     </a>

//     <p>price2$</p>
//   </div>
// </div>
// <div className="p-2">
// <div className="grid grid-cols-7 gap-4">
//   <div>
//     <Link href={"/"}>
//       <a>
//         <img
//           src="/images/pigion.webp"
//           className="rounded"
//           width={100}
//           height={100}
//         />
//       </a>
//     </Link>
//     Category
//   </div>
//   <div>
//     <Link href={"/"}>
//       <a>
//         <img
//           src="/images/images.jpg"
//           className="rounded"
//           width={100}
//           height={100}
//         />
//       </a>
//     </Link>
//     Category
//   </div>
//   <div>
//     <Link href={"/"}>
//       <a>
//         <img
//           src="/images/image.png"
//           className="rounded"
//           width={120}
//           height={100}
//         />
//       </a>
//     </Link>
//     Title
//   </div>
//   <div>
//     <Link href={"/"}>
//       <a>
//         <img
//           src="/images/images.jpg"
//           className="rounded"
//           width={100}
//           height={100}
//         />
//       </a>
//     </Link>
//     Image
//   </div>
//   <div>
//     <Link href={"/"}>
//       <a>
//         <img
//           src="/images/pexel.jpeg"
//           className="rounded"
//           width={100}
//           height={50}
//         />
//       </a>
//     </Link>
//     Navbar
//   </div>
//   <div>
//     <Link href={"/"}>
//       <a>
//         <img
//           src="/images/pexels.jpeg"
//           className="rounded"
//           width={100}
//           height={50}
//         />
//       </a>
//     </Link>
//    vxfcgcfcf
//   </div>
//   <div>
//       <a>
//         <img
//           src="/images/pexels.jpeg"
//           className="rounded"
//           width={100}
//           height={100}
//         />
//       </a>

//       <Link href={"/login"}>
//       dfsf
//     </Link>

//   </div>
// </div>
// </div>
