import React from "react";
import Adminlayout from "../../../components/Adminlayout";
import HeaderSettings from "../../../components/Header";
import Settings from "../../../components/Settings";
import styles from "../../../styles/NDesign.module.css";

const Commissions = () => {
  return (
    <Adminlayout>
      <div className="container">
        <Settings />
        <div className="w-full flex">
          <HeaderSettings />
          <div className="w-100">
            <div className="flex items-center justify-between flex-wrap bg-gray-500 p-4">
              <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                  <h1 className={styles.header}>Commission Settings</h1>
                </div>
              </div>
            </div>

            <div id="detailed-pricing" class="overflow-x-auto w-full">
              <div class="overflow-hidden min-w-max">
                <div class="grid grid-cols-3 gap-x-16 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                  <div>Level Name</div>
                  <div>Commission Amount</div>
                  <div>Commission Type</div>
                </div>
                <div class="grid grid-cols-3 gap-x-2 py-5 px-4 text-sm text-gray-700 border-b border-gray-200 dark:border-gray-700">
                  <input
                    class=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                  <input
                    class=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Amount"
                  />
                  <select
                    class=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  >
                    <option value="Enable">fixed</option>
                    <option value="Disable">Percent</option>
                  </select>
                  
                </div>

                <div class="grid grid-cols-4 gap-x-16 py-5 px-4 text-sm text-gray-700 border-b border-gray-200 dark:border-gray-700"></div>
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap bg-gray-500 p-4 "></div>
          </div>
        </div>
      </div>
    </Adminlayout>
    
// <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
// <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//     <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//         <tr>
//             <th scope="col" class="py-3 px-6">
//                 Product name
//             </th>
//             <th scope="col" class="py-3 px-6">
//                 Color
//             </th>            
//             <th scope="col" class="py-3 px-6">
//                 Action
//             </th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
//             <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                 Apple MacBook Pro 17"
//             </th>
//             <td class="py-4 px-6">
//                 Sliver
//             </td>
//             <td class="py-4 px-6">
//                 Laptop
//             </td>
//             <td class="py-4 px-6">
//                 <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//             </td>
//         </tr>
//         <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
//             <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                 Microsoft Surface Pro
//             </th>
//             <td class="py-4 px-6">
//                 White
//             </td>
//             <td class="py-4 px-6">
//                 <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//             </td>
//         </tr>
//     </tbody>
// </table>
// </div>

  );
};

export default Commissions;
