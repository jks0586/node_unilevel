import React from "react";
import Adminlayout from "../../components/Adminlayout";
import Settings from "../../components/Settings";
import styles from "../../styles/NDesign.module.css";
const Distribution = () => {
  return (
    <div>
      <Adminlayout>
        <Settings />
        <div>
        <nav class="flex items-center justify-between flex-wrap bg-gray-500 p-2">
          <div class="flex items-center flex-shrink-10 text-white mr-6"></div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
           <div class="text-sm lg:flex-grow">
             <h1 className={styles.header}>Distribute commissions</h1>
            </div>

           </div>
        </nav>
         
        </div>
      </Adminlayout>
    </div>
  );
};

export default Distribution;
// <nav class="flex items-center justify-between flex-wrap bg-gray-500 p-2">
//           <div class="flex items-center flex-shrink-10 text-white mr-6"></div>
//           <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//             <div class="text-sm lg:flex-grow">
//               <h1 className={styles.header}>Distribute commissions</h1>
//             </div>

//            </div>
//         </nav>
