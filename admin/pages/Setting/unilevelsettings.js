import React from "react";
import Adminlayout from "../../components/Adminlayout";
import Settings from "../../components/Settings";

const Unilevelsettings = () => {
  return (
    <div>
      <Adminlayout>
        <Settings />
        <div>
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
                    <span class="flex-1 ml-3 whitespace-nowrap">
                      Elegibility
                    </span>
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
                    <span class="flex-1 ml-3 whitespace-nowrap">
                      Commissions
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50"
                  >
                    <span class="flex-1 ml-3 whitespace-nowrap">Left Menu</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-50"
                  >
                    <span class="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
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
        </div>
      </Adminlayout>
    </div>
  );
};

export default Unilevelsettings;
