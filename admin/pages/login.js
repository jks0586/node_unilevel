import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GLOBAL_CONSTANT } from "../config/GlobalConstant";
import { login } from "../redux/actions/authAction";
import styles from "../styles/Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const router = useRouter();
  const { auth, alert } = useSelector((state) => state);

  useEffect(() => {
    if (auth.token) {
      router.push("/dashProduct");
    }
  }, [auth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData, router));
    router.push("/dashProduct");
  };

  return (
    <div>
      <div>
        <form
          className={styles.form}
          style={{ marginBottom: "14.1rem" }}
          onSubmit={handleSubmit}
        >
          <h3>Login</h3>
          <input
            type="email"
            name="email"
            placeholder="Please Enter Your Email"
            onChange={handleChange}
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Please Enter Your Password"
            onChange={handleChange}
            value={password}
          />
          <input type="submit" value="submit" disabled={!(email && password)} />
        </form>
      </div>
    </div>
  );
};

//     <div>
//       <h1 className={style.header}>Login</h1>
//       <form className={style.form} onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input type="submit" name="submit" value="Login" />
//       </form>
//     </div>
//   );
// };

export default Login;
