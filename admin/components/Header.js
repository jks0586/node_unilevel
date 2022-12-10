import Link from "next/link";
import React, { useContext } from "react";
import Adminlayout from "./Adminlayout";
import Settings from "./Settings";

const HeaderSettings = () => {
  return (
    <div className="w-40 float-left">
      <div className="overflow-y-auto py-4 px-3 bg-slate-500  rounded dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <Link href="/Setting/configuration/general">
              <a className="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50">
                General
              </a>
            </Link>
          </li>

          <li>
            <Link href="/Setting/configuration/elegibility">
              <a className="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50">
                Elegibility
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Setting/configuration/mapping">
              <a className="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50">
                Mapping
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Setting/configuration/payout">
              <a className="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50">
                Payout
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Setting/configuration/bonuses">
              <a className="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50">
                Bonuses
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Setting/configuration/general">
              <a className="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50">
                Commissions
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Setting/configuration/general">
              <a className="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50">
                General
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Setting/configuration/general">
              <a className="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50">
                Dashboard Design
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Setting/configuration/general">
              <a className="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50">
                General
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderSettings;
