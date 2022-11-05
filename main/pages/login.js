import React from 'react'
import Link from "next/link"
import styles from "../styles/register.module.css";
import Button from "react-bootstrap/Button";
import { useForm } from 'react-hook-form';
 let counter = 0;
const Login = () => {
    // const {register, handleSubmit} = useForm();
    const onSubmit = (d) =>
    alert(JSON.stringify(d));
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
   < div className = "center" >
      <div className={styles.body}>
        <div className={styles.form}>
        < div className = "mx-auto" >
          <div className="form-group">
            <h1 className={styles.header}>Login</h1>
    <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)} >
    <div className="form-group" >
      
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
      </div>
    </div>
    <br/>
    {/* <p>Render:<span>{counter++}</span></p>  */}
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