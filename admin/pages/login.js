import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authAction";
import styles from "../styles/login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = useSelector((state) => state);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    dispatch(login(data));
  };

  useEffect(() => {
    if (auth.token) {
      router.push("/dashboard");
    }
  }, [auth]);

  return (
    <div>
      <h1 className={styles.header}>login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Please Enter Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Please Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" name="submit" value="login" />
      </form>
    </div>
  );
};

export default Login;
