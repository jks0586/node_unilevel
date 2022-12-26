import React from "react";
import Adminlayout from "../../../components/Adminlayout";
import HeaderSettings from "../../../components/Header";
import Settings from "../../../components/Settings";
import styles from "../../../styles/NDesign.module.css";
const Productinformation = () => {
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
                  <h1 className={styles.header}>Product Information</h1>
                </div>
              </div>
            </div>
            <div class="w-full max-w-100">
              <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        How to install UNILEVEL WooCommerce
                      </th>
                      <td class="py-4 px-6"></td>
                      <td class="py-4 px-6"></td>
                      <td class="py-4 px-6"></td>
                      <td class="py-4 px-6">
                        <button
                          class="bg-red-500 hover:bg-danger-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Read More
                        </button>
                      </td>
                    </tr>
                    <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        How to install UNILEVEL WooCommerce
                      </th>
                      <td class="py-4 px-6"></td>
                      <td class="py-4 px-6"></td>
                      <td class="py-4 px-6"></td>
                      <td class="py-4 px-6">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <button
                            class="bg-red-500 hover:bg-danger-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                          >
                            Read More
                          </button>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap bg-gray-500 p-2 ">
            <div class="text-sm lg:flex-grow">
              <h1 className={styles.footer}>
                For more information visit:www.mlmtrees.com or www.letscms.com.
              </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Adminlayout>
  );
};

export default Productinformation;
