import React from 'react'
import Link from "next/link"
import styles from "../styles/register.module.css";
import Button from "react-bootstrap/Button";

const Login = () => {
  return (
   < div className = "center" >
      <div className={styles.body}>
        <div className={styles.form}>
        < div className = "mx-auto" >
          <div className="form-group">
            <h1 className={styles.header}>Login</h1>
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



export default Login