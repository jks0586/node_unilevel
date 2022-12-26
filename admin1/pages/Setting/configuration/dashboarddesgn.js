import React from "react";
import Adminlayout from "../../../components/Adminlayout";
import HeaderSettings from "../../../components/Header";
import Settings from "../../../components/Settings";
import styles from "../../../styles/NDesign.module.css";
const Dashboarddesgn = () => {
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
                    <h1 className={styles.header}>Dashboard Design</h1>
                  </div>
                </div>
              </div>
              <br />
              <form className="table-layout: auto w-full ">
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 pr-4"
                      htmlFor="inline-full-name"
                    >
                      Disable Custom Style
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="favcolor"
                      type="color"
                      name="favcolor"
                      value="#ff0000"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center">
                  <div className="md:w-1/3"></div>
                  <div className="md:w-8/3">
                    <input
                      type="submit"
                      className="shadow bg-gray-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      value="Save Dashboard Design Setting"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
     
    </Adminlayout>
  );
};

export default Dashboarddesgn;
