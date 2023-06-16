import React, { useState, useEffect } from "react";
import MainScreen from '../../components/MainScreen'
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import "./LoginPage.css";


const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  

useEffect (() => {
  const userInfo = localStorage.getItem("userInfo");

  if(userInfo) 
  history.push("/mynotes")
}, [history])

 

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(email)
    };



  return (
    <MainScreen title='Login'>    
    <div className='loginContainer'>
    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
    <Form onSubmit= {submitHandler}>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

         

          <Button className= "button" variant="primary" type="submit">Submit</Button>
      
    </Form>
    <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
    </div>
    </MainScreen>

  )
}

export default LoginPage