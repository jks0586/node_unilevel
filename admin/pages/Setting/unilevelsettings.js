import React from "react";
import Adminlayout from "../../components/Adminlayout";
import styles from "../../styles/Recipe.module.css";

const Unilevelsettings = () => {
  return (
    <Adminlayout>
      <h1 className={styles.setting}>Unilevel Woocommerce Settings</h1>
      <div class="mt-0 flex flex-col space-y-4 items-center mx-4 sm:mx-0 padding:2">
        <div class="my-0 flex flex-wrap -m-1">
          <span class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
            Configuration
          </span>
          <span class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
            Distribute Commission
          </span>
          <span class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
            Payout Run
          </span>
          <span class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
            Payout & Reports
          </span>
          <span class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
            User Reports
          </span>
          <span class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
            Withdrawals
          </span>
          <span class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
            Genealogy
          </span>
        </div>
      </div>

      <div class="w-40">
        <div class="overflow-y-auto py-4 px-3 bg-slate-500  rounded dark:bg-gray-800">
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="flex items-center p-2  text-base font-normal text-gray-900  bg-gray-50"
              >
                <span class="flex-1 ml-3 whitespace-nowrap ">General</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Elegibility</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Mapping</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Payout</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Bonuses</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Commissions</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">
                  Left Menu
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">
                  Dashboard 
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Licence</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      
      
    </Adminlayout>
  );
};

export default Unilevelsettings;
