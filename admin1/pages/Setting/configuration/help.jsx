import React from "react";
import Adminlayout from "../../../components/Adminlayout";
import Settings from "../../../components/Settings";
import HeaderSettings from "../../../components/Header";
import styles from "../../../styles/NDesign.module.css";
const TesJitendra = () => {
  return (
    <Adminlayout>
      <div className="container">
        <Settings />
        <div className="w-full flex">
          <HeaderSettings />
          <div className="w-100">
            <div className="flex items-center justify-between flex-wrap bg-gray-500 p-2">
              <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                  <h1 className={styles.header}>Help</h1>
                </div>
              </div>
            </div>
            <div class="w-full max-w-100">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Your Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Contact
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="mobileNumber"
                    type="number"
                    placeholder="number"
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Email
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="email"
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="concern"
                  >
                    Your Concern
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-full py-8 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="concern"
                    type="concern"
                    placeholder="Please type your concer here"
                  />
                </div>

                <div class="flex items-center justify-between">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  > 
                    Send Query
                  </button>
                </div>
              </form>
              <div className="flex items-center justify-between flex-wrap bg-gray-500 p-2 ">
              <h1 className={styles.footer}>For more information visit: www.mlmtrees.com or www.letscms.com.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Adminlayout>
    // <<div className={styles.div}>
    //   <Link href="register">
    //     <a>Register</a>
    //   </Link>
    //   <Link href="forget">
    //     <a>Forget</a>
    //   </Link>
    // </div>>
  );
};

export default TesJitendra;
