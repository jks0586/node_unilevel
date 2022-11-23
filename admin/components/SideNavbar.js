import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import styles from "../styles/form.module.css";

function SideNavbar() {
  //   useEffect(() => {
  //     function handleResize() {
  //       if(window.innerWidth<=767){}
  //       console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)

  // }

  //     window.addEventListener('resize', handleResize)
  //   })

  return (
    <>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-slate-900 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-gray-800 text-white font-semibold">
              <Link href="#">Online Site</Link>
            </h1>
            <div className="my-5 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 text-white p-2 rounded-md group cursor-pointer ">
                <MdOutlineSpaceDashboard className="text-2xl text-slate-900 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="/dashboard">Dashboard</Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="#">Profile</Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="/category">Category</Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="#">Profile</Link>
                </h3>
              </div>

              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineAnalytics className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="/post">Posts</Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineAnalytics className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="/dashProduct">Product</Link>
                </h3>
              </div>
            </div>

            <div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="#">Settings</Link>
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="#">Settings</Link>
                </h3>
              </div>

              <div>
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineLogout className="text-2xl text-gray-600 text-white " />
                  <h3 className="text-base text-gray-800 text-white font-semibold ">
                    Logout
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </>
  );
}

export default SideNavbar;
