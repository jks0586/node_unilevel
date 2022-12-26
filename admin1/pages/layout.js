import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Adminlayout from "../components/Adminlayout";
import { register } from "../redux/actions/authAction";

const Layout = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = useSelector((state) => state);
  const router = useRouter();

  const handleSubmit = (e) => { 
    e.preventDefault();

    const data = { username: username, email: email, password: password };
    dispatch(register(data, router));
    //router.push("/login");
  };

  
  
  return (
    <Adminlayout>
      <div>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                className="w-11 h-11 mr-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMBXKN-n0wAyDbs35HvmEIISP23MhQCBZf3tAeWQKDw&s"
                alt="logo"
              />
              LETSCMS
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your UserName
                    </label>
                    <input
                      type="username"
                      name="username"
                      id="username"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your Name"
                      required="Please Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="name@company.com"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required="Please Enter your password"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                     
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required="Please Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-black bg-slate-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    value="Register" 
                   
                  >
                    Register
                  </button>
                  <p className="text-sm font-light text-green-500 dark:text-green-500">
                    Already have an account?{" "}
                    <a href="login" className="font-medium text-blue-600">
                      Login here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Adminlayout>
  //   <div className="flex items-start">
  //   <div className="flex items-center h-5">
  //     <input
  //       id="terms"
  //       aria-describedby="terms"
  //       type="checkbox"
  //       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
  //       required="Please Enter your password"
  //     />
  //   </div>
  //   <div className="ml-3 text-sm">
  //     <label
  //       htmlFor="terms"
  //       className="font-light text-gray-500 dark:text-gray-300"
  //     >
  //       I accept the{" "}
  //       <a
  //         className="font-medium text-primary-600 hover:underline dark:text-primary-500"
  //         href="#"
  //       >
  //         Terms and Conditions
  //       </a>
  //     </label>
  //   </div>
  // </div>
  );
};

export default Layout;
