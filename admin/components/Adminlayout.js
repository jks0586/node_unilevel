import React from 'react';
import Head from "next/head";
import SideNavbar from "../components/SideNavbar";
const Adminlayout = (props) => {
  console.log(props)
  return (
    <>
      <Head>
      <title>Responsive Side</title>
      <meta name="description" content={props.meta_description} />
      <link rel="icon" href="/pro.ico" /> 
      </Head> 
      <div className="">
        <SideNavbar />
        <div className="main-div container">
            {props.children}
        </div>
      </div>
    </>
  )
}

export default Adminlayout
