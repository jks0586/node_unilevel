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
import { FaUserTie } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { ImHome, ImCart } from "react-icons/im";
import { BsTable, BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { GiArchiveRegister } from "react-icons/gi";
function SideNavbar() {
  return (
    <>
      <Disclosure as="div" className="">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-slate-900 z-20 fixed top-0 -left-96 lg:left-0 lg:w-56  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-gray-800 text-white font-semibold">
              <Link href="/index">Online Site</Link>
            </h1>
            <div className="my-5 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 text-white p-2 rounded-md group cursor-pointer ">
                <ImHome className="text-2xl text-slate-900 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="/dashboard">Dashboard</Link>
                </h3>
              </div>
              <div>
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <GiArchiveRegister className="text-2xl text-gray-600 text-white " />
                  <h3 className="text-base text-gray-800 text-white font-semibold ">
                    <Link href="/layout">Register</Link>
                  </h3>
                </div>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <AiOutlineLogin className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="/login">Login</Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="#">View profile</Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="/Categories/categorytable">Category</Link>
                </h3>
              </div>
              

              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineAnalytics className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="/posts/posttable">Posts</Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <ImCart className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="/product/producttable">Product</Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BsFillPeopleFill className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="/Role/roleTable">Role</Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaUserTie className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="/User/adduser">User</Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="/Setting/configuration/general">Settings</Link>
                </h3>
              </div>

              
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BiMessageSquareDots className="text-2xl text-gray-600 text-white " />
                <h3 className="text-base text-gray-800 text-white font-semibold ">
                  <Link href="#">More Details</Link>
                </h3>
              </div>
              <div>
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <BiMessageSquareDots className="text-2xl text-gray-600 text-white " />
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
