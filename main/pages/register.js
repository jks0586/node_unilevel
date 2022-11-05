import React from 'react'
import Button from 'react-bootstrap/Button';
import Link from "next/link"
import {useForm} from "react-hook-form";
import styles from "../styles/register.module.css"


 const ref = React.createRef();
const Register = () => {
     const {
         register,
         handleSubmit,
         formState: {
             errors
         }
     } = useForm();
     const myfun = (d) => {
         alert(d.username + "from" + d.email + "from" + d.password);
     }
  return (
    <div class="row d-flex justify-content-center">
      <div className={styles.body}>
        <div className={styles.form}>
        < div className = "mx-auto" >
          <div className="form-group">
            <h1 className={styles.header}>Register</h1>
           
           < form className = "form-horizontal"
           onSubmit = {
               handleSubmit(myfun)
           } >
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="email">UserName:</label>
      <div className="col-sm-15">
       
        <input type="UserName"  className="form-control"  placeholder="Enter UserName" name="UseName"   {...register("username", { required: true})} />
        {errors.username && errors.username.type == "required" && (
            <p className="text-danger">
           please enter username
            </p>
        )}
      </div>
      <label className="control-label col-sm-2" htmlFor="email">Email:</label>
      <div className="col-sm-15">
        <input type="email" className="form-control" placeholder="Enter email" name="email"  id="Email"    {...register("email", { required: true})}/>
         {errors.email && errors.email.type == "required" && (
            <p className="text-danger">
           please enter email
            </p>
        )}
      </div>
      <label className="control-label col-sm-2" htmlFor="email">Password:</label>
      <div className="col-sm-15">
    <input type="password"  className="form-control"  placeholder="Enter UserName" name="Password"   {...register("password", { required: true, minLength:5})} />
        {errors.password && errors.password.type == "required" && (
            <p className="text-danger">
           please enter password
            </p>
        )}
    
         {errors.password && errors.password.type === "minLength" && (
            <p className="text-warning">Please Enter Minium 5 Letter</p>
        )}
      </div>  
    </div>
    <br/>
     <Button as="input"  type="submit" value="Submit" />{' '}
      <Button as="input" type="reset" value="Reset" />

  <div className="container signin">

 <p>Already have an account? <Link href="login">login
  </Link></p>
  </div>
   </form> 
   </div>
          </div>
        </div>
      </div>
    </div>
)
}


export default Register