import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/register.module.css";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { login, signin } from "../redux/actions/authAction";
=======
import { signin } from "../redux/actions/authAction";
>>>>>>> cd5dbc07049531469b73194ab2e05b75a8ae324f
import { useRouter } from "next/router";
const ref = React.createRef();

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const { auth } = useSelector((state) => state);
  const router = useRouter();
  // const {register, handleSubmit} = useForm();

  // const onSubmit = (d) => alert(JSON.stringify(d));
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const myfun = (d) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email: email, password: password };
    dispatch(signin(data));
<<<<<<< HEAD
    router.push("/contact");
  };

  return (
    <div className="center">
      <div className={styles.body}>
        <div className={styles.form}>
          <div className="mx-auto">
            <div className="form-group">
              <h1 className={styles.header}>Login</h1>
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="email">
                    Email:
                  </label>
                  <div className="col-sm-15">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      id="Email"
                      required
                      // {...register("email", { required: true })}
                    />
                    {/* {errors.email && errors.email.type == "required" && (
                      <p className="text-danger">please enter email</p>
                    )} */}
                  </div>
                  <label className="control-label col-sm-2" htmlFor="email">
                    Password:
                  </label>
                  <div className="col-sm-15">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter UserName"
                      onChange={(e) => setPassword(e.target.value)}
                      name="Password"
                      required
                      // {...register("password", {
                      //   required: true,
                      //   minLength: 5,
                      // })}
                    />
                    {/* {errors.password && errors.password.type == "required" && (
                      <p className="text-danger">please enter password</p>
                    )} */}
                  </div>
=======
    router.push("/register");
    
  };

  // useEffect(() => {
  //   if (auth.token) {
  //     router.push("/register");
  //   }
  // }, [auth]);

  return (
    <div className="center">
    <div className={styles.body}>
      <div className={styles.form}>
        <div className="mx-auto">
          <div className="form-group">
            <h1 className={styles.header}>Login</h1>
            <form className="form-horizontal" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">
                  Email:
                </label>
                <div className="col-sm-15">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="Email"
                    // {...register("email", { required: true })}
                  />
                  {/* {errors.email && errors.email.type == "required" && (
                    <p className="text-danger">please enter email</p>
                  )} */}
>>>>>>> cd5dbc07049531469b73194ab2e05b75a8ae324f
                </div>
                <label className="control-label col-sm-2" htmlFor="email">
                  Password:
                </label>
                <div className="col-sm-15">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter UserName"
                    onChange={(e) => setPassword(e.target.value)}
                    name="Password"
                    // {...register("password", {
                    //   required: true,
                    //   minLength: 5,
                    // })}
                  />
                  {/* {errors.password && errors.password.type == "required" && (
                    <p className="text-danger">please enter password</p>
                  )} */}
                </div>
              </div>
              <br />
              {/* <p>Render:<span>{counter++}</span></p>  */}
              <Button as="input" type="submit" value="Login" />{" "}
              <Button as="input" type="reset" value="Reset" />
              <div className="container signin">
                <br />
                <p>
                  Already have an account? <Link href="reset">reset</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
export default Login;
