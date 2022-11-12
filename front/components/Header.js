import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const toastId = useRef(null);
  const dispatch = useDispatch();
  const { loader, auth } = useSelector((state) => state);
  const router = useRouter();

  useEffect(() => {
    showAlert();
  }, [loader]);
  const showAlert = () => {
    if (loader && !toast.isActive(toastId.current)) {
      toastId.current = toast.loading("Please wait...");
    } else {
      if (loader && loader.message) {
        toast.update(toastId.current, {
          render: loader.message,
          type: "success",
          isLoading: false,
          autoClose: true,
        });
      } else if (loader && loader.error) {
        toast.update(toastId.current, {
          render: loader.error,
          type: "error",
          isLoading: false,
          autoClose: true,
        });
      }
    }
  };
  return <ToastContainer />;
};

export default Header;
