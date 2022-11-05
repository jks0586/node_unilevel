import React from "react";
import styles from "../../styles/common/register.module.css";
import Link from "next/link"
import Button from "react-bootstrap/Button";

const Reset = () => {
  return (
    <div class="row d-flex justify-content-center">
      <div className={styles.body}>
        <div className={styles.form}>
        < div className = "mx-auto" >
          <div className="form-group">
            <h1 className={styles.header}>Forget Password</h1>
    <form className="form-horizontal" >
    <div className="form-group">
      
      <label className="control-label col-sm-2" htmlFor="email">Email</label>
      <div className="col-sm-15">
        <input type="email" className="form-control" placeholder="Enter email" name="password"  id="Password" required  />
      </div>
      <label className="control-label col-sm-2" htmlFor="email"> Password:</label>
      <div className="col-sm-15">
        <input type="email" className="form-control"  placeholder="Enter  Password" name="  Passwordl"  id="Password" required  />
      </div>
    </div>
    <br/>
     <Button as="input" type="New Password" value="New Password" />{' '}
     

  <div className="container signin">
  <br />
  </div>
  </form> 
   </div>
          </div>
        </div>
      </div>
    </div>
)
}

 
export default Reset