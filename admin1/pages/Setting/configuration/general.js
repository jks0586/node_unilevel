import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Adminlayout from "../../../components/Adminlayout";
import HeaderSettings from "../../../components/Header";
import Settings from "../../../components/Settings";
import { getDataApi, postDataApiSetting } from "../../../config/fetchData";
import { addSetting, getSetting } from "../../../redux/actions/settingAction";
import styles from "../../../styles/NDesign.module.css";

const General = () => {
  const initalState = {
    levels: "",
    referrals: "",
    withdrawallimit: "",
    shortcodemessage: "",
    planbasedon: "",
  };

  const [userData, setUserData] = useState(initalState);
  const {
    levels,
    referrals,
    withdrawallimit,
    shortcodemessage,
    planbasedon,
  } = userData;
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, className, type, placeholder } = e.target;
    console.log(e.target.attributes, className);
    {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let finaldata = {
      setting_key: "general_settings",
      setting_value: JSON.stringify(userData),
    };
    // console.log(finaldata);

    {
      dispatch(addSetting(finaldata, router));
      // alert("Submit");
      // console.log(userData);
      // router.push("/configuration/general");
    }
  };

  useEffect(() => {
    const postdata = { setting_key: "general_settings" };
    // {

    //  dispatch(getSetting(postdata, router)).then(respose=>{
    //   console.log(respose);
    //  });

    const response = postDataApiSetting("setting", postdata).then(
      (response) => {
        console.log(response);
        const resvalue = JSON.parse(response.value);
        initalState.levels = resvalue.levels;
        initalState.planbasedon = resvalue.planbasedon;
        initalState.referrals = resvalue.referrals;
        initalState.shortcodemessage = resvalue.shortcodemessage;
        initalState.withdrawallimit = resvalue.withdrawallimit;
        setUserData({ ...userData, initalState });

        // console.log(resvalue);
      }
    );

    // }
    //  console.log(fetchdata);
    //  setUserData({
    //    ...userData,
    //    ["levels"]: respose.levels,
    //    ["referrals"]: respose.referrals,
    //    ["withdrawallimit"]: respose.withdrawallimit,
    //    ["shortcodemessage"]: respose.shortcodemessage,
    //    ["planbasedon"]: respose.planbasedon,
    //  });
  }, []);

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
                  <h1 className={styles.header}>General Settings</h1>
                </div>
              </div>
            </div>
            <br />
            <form
              className="table-layout: auto w-full max-w-lg"
              onSubmit={handleSubmit}
            >
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 pr-4"
                    htmlFor="inline-full-name"
                  >
                    NoofLevels
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    name="levels"
                    onChange={handleChange}
                    value={levels}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-full-name"
                  >
                    No of Referrals
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    name="referrals"
                    onChange={handleChange}
                    value={referrals}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-full-name"
                  >
                    Withdrawal Limit
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    name="withdrawallimit"
                    onChange={handleChange}
                    value={withdrawallimit}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-full-name"
                  >
                    Plan based on
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    name="planbasedon"
                    onChange={handleChange}
                    value={planbasedon}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="inline-full-name"
                  >
                    Shortcode Error Message
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    name="shortcodemessage"
                    onChange={handleChange}
                    value={shortcodemessage}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-8/3">
                  <input
                    type="submit"
                    className="shadow bg-gray-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    value="submit"
                  />
                </div>
              </div>
            </form>
            <br />
            <div className="flex items-center justify-between flex-wrap bg-gray-500 p-3 ">
            
            </div>
          </div>
        </div>
      </div>
    </Adminlayout>
    // <button
    //   className="shadow bg-gray-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
    //   type="button"
    //   value="submit"
    // >
    //   Save General Settings
    // </button>
  );
};

export default General;
