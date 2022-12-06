import React from "react";
import Adminlayout from "./Adminlayout";
import styles from "../styles/NDesign.module.css";
import Link from "next/link";

const Settings = () => {
  return (
    <div>
      <h1 className={styles.setting}>Unilevel Woocommerce Settings</h1>
      <div class="mt-0 flex flex-col space-y-4 items-center mx-4 sm:mx-0 padding:2">
        <div class="my-0 flex flex-wrap -m-1">
          <span class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
            <Link href="unilevelsettings">
              <a>Configuration</a>
            </Link>
          </span>

          <span class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
            <Link href="distribution">
              <a>Distribute Commission</a>
            </Link>
            {/* <a href="distribution">Distribute Commission</a> */}
          </span>

          <span class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
            <Link href="PayoutRun">
              <a>Payout Run</a>
            </Link>
          </span>
          <span class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
            <Link href="PayoutReports">
              <a>PayoutReports</a>
            </Link>
          </span>
          <span class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
            <Link href="UserReports">
              <a>UserReports</a>
            </Link>
          </span>
          <span class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
            <a href="Withdrawals"> Withdrawals</a>
          </span>
          <span class="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300">
            <Link href="Genealogy">
              <a>Genealogy</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Settings;
