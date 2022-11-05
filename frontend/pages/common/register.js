import React , { useState, useEffect } from 'react'
import Main from './main'
import {
    useForm
} from "react-hook-form";
import Col from 'react-bootstrap/Col';
import styles from "../../styles/common/register.module.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Link from "next/link"
const ref = React.createRef();
const Register = () => {
    const { register, handleSubmit, formState: { errors }
    } = useForm();
    const myfun = (d) =>{
        alert(d.username + "from" + d.email + "from" + d.password);
    }

     useEffect(() => {
     document.body.classList.add('bg-info');
  });
  return (

//    <Main ref={ref}>
        
       <Container justify>
     <Row className="justify-content-md-center">
         <Col ></Col>
      <Col sx={10} lg={4}  >

    < div className = "mx-auto" >
     <h2 className={styles.header}>Register</h2>
    
   <form className="form-horizontal" onSubmit={handleSubmit(myfun)} >
    <div className="form-group">
        
      <label className="control-label col-sm-2" htmlFor="email">UserName</label>
      <div className="col-sm-15">
        <input className="form-control"   {...register("username", { required: true})}/>
        {errors.username && errors.username.type == "required" && (
            <p className="text-danger">
           please enter username
            </p>
        )}
      </div>
      <label className="control-label col-sm-2" htmlFor="email">Email:</label>
      <div className="col-sm-15">
        <input className="form-control"   {...register("email", { required: true})}/>
        {errors.email && errors.email.type == "required" && (
            <p className="text-danger">
           please enter email
            </p>
        )}
      </div>
      <label className="control-label col-sm-2" htmlFor="email">Password:</label>
      <div className="col-sm-15">
            <input className="form-control"   {...register("password", { required: true, minLength:5})}/>
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
     <Button as="input" type="submit" value="Submit" />{' '}
      <Button as="input" type="reset" value="Reset" />

      <div className="container signin">
     <p>Already have an account? <Link href="login">login
  </Link></p>
  </div>
   </form> 
   </div>
  </Col>
     <Col></Col>
       </Row>
  </Container>
 
//    </Main>
)
}

export default Register