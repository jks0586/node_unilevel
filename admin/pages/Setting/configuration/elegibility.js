import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Adminlayout from "../../../components/Adminlayout";
import HeaderSettings from "../../../components/Header";
import Settings from "../../../components/Settings";
import { postDataApiSetting } from "../../../config/fetchData";
import { addSetting, getSetting } from "../../../redux/actions/settingAction";
import styles from "../../../styles/NDesign.module.css";
const Elegibility = () => {
  const initalState = {
    personalReferrals: "",
  };

  const [userData, setUserData] = useState(initalState);
  const { personalReferrals } = userData;
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
      setting_key: "elegibility_settings",
      setting_value: JSON.stringify(userData),
    };
    {
      dispatch(addSetting(finaldata, router));
    }
  };

  useEffect(() => {
    const postdata = { setting_key: "elegibility_settings" };
    const response = postDataApiSetting("setting", postdata).then(
      (response) => {
        const resvalue = JSON.parse(response.value);
        // console.log(resvalue.personalReferrals);
        initalState.personalReferrals = resvalue.personalReferrals;
        setUserData({ ...userData, initalState });
      }
    );
  }, []);

  return (
    <Adminlayout>
      <div className="container">
        <Settings />
        <div className="w-full flex">
          <HeaderSettings />
          <div className="w-100">
            <div className="flex items-center justify-between flex-wrap bg-gray-500 p-7">
              <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                  <h1 className={styles.header}>Elegibility</h1>
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
                    personal Referrals
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    name="personalReferrals"
                    onChange={handleChange}
                    value={personalReferrals}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-8/3">
                  <input
                    type="submit"
                    className="shadow bg-gray-500  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    value="Save Elegibility Settings"
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

//   // useEffect(() => {
//   //   const postdata = { setting_key: "eligibility_settings" };

//   //   const response = postDataApiSetting("setting", postdata).then(
//   //     (response) => {
//   //       console.log(response);
//   //       if(response!=null){
//   //         const resvalue = JSON.parse(response.value);
//   //         initalState.personalReferrals = resvalue.personalReferrals;
//   //         setUserData({ ...userData, initalState });
//   //       }

//   //     }
//   //   );

//   // }, []);

export default Elegibility;
