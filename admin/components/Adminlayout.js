import React from "react";
import Head from "next/head";
import SideNavbar from "../components/SideNavbar";
import Navheader from "./Navheader";
import Design from "../components/Design";

const Adminlayout = (props) => {
  return (
    <>
      <Head>
        <title>Responsive Side</title>
        <meta name="description" content={props.meta_description} />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <div className="container-fluid grid grid-cols-12 p-12">
        <div className="col-span-2">
          <SideNavbar />
        </div>
        <div className="col-span-10">
          {/* <div className="main-div grid-cols-9"> */}
          <Design adminprops={props.adminprops} />
          {/* <Navheader adminprops={props.adminprops} /> */}
          {props.children}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Adminlayout;
