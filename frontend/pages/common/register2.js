import React from 'react'
import styles from "../../styles/common/register.module.css";
import Link from "next/link"
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const Register = () => {
  return (
    <Container justify>
      <Row className="justify-content-md-center">
        <Col ></Col>
        <Col xs={10} lg={4}  >
        <h2 className={styles.header}>Register</h2>
    <Form>
        
<Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="UserName" placeholder="UserName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
     <Button as="input" type="submit" value="Submit" />{' '}
      <Button as="input" type="reset" value="Reset" />

    
    </Form>
   
    
    </Col>
    <Col></Col>
      </Row>
    </Container>


    )
}
  
export default Register