import React, { useState } from "react";
import styles from "../../styles/common/register.module.css";
import Link from "next/link"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Main from "./main";
const ref = React.createRef(); 
const Login = () => {
    const[email, setemail ]=useState("")
    const [passsword, setpassword] = useState("")
    
  return ( 
    <div class="row d-flex justify-content-center">
      <div className={styles.body}>
        <div className={styles.form}>
        < div className = "mx-auto" >
          <div className="form-group">
            <h1 className={styles.header}>Login</h1>

            {/* <label className="control-label col-sm-12" htmlFor="email">
              Password:
            </label>
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <label className="control-label col-sm-12" htmlFor="email">
              Email:
            </label>
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
              />
            </div>
          </div>
          <br />
          <Button as="input" type="submit" value="Submit" />{" "}
          <Button as="input" type="reset" value="Reset" />
          <br />
          <br />
          <p className={styles.pera}>
            forget Password <Link href="login">Reset Password</Link>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}; */}

 <form className="form-horizontal" >
    <div className="form-group" >
      
      <label className="control-label col-sm-2" htmlFor="email">Email:</label>
      <div className="col-sm-15">
        <input type="email" className="form-control" placeholder="Enter email" name="email"  id="Email" required  />
      </div>
      <label className="control-label col-sm-2" htmlFor="email">Password:</label>
      <div className="col-sm-15">
        <input type="email" className="form-control"  placeholder="Enter Password" name="Passwordl"  id="Password" required  />
      </div>
    </div>
    <br/>
     <Button as="input" type="submit" value="Submit" />{' '}
      <Button as="input" type="reset" value="Reset" />

  <div className="container signin">
    <br />
  <p>Already have an account? <Link  href="reset">reset</Link></p>
  </div>
   </form> 
   </div>
          </div>
        </div>
      </div>
    </div>
)
}







export default Login;
