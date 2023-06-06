import React from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
//import Loading from "../../components/Loading";
//import ErrorMessage from "../../components/ErrorMessage";
import "./RegisterPage.css";

const RegisterPage = () => {

  return (
    <MainScreen title= "REGISTER">
    <div className="loginContainer">
    <Form >
      <Form.Group controlId="formBasicEmail">
      <Form.Label className="name">Name</Form.Label>
            <Form.Control
              type="name"
              //value={email}
              placeholder="Enter name"
             // onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="email">Email</Form.Label>
            <Form.Control
              type="email"
             // value={password}
              placeholder="Email"
              //onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="basic">Password</Form.Label>
            <Form.Control
              type="password"
             // value={password}
              placeholder="Password"
              //onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label className="confirm">Confirm Password</Form.Label>
            <Form.Control
             
              type="password"
             // value={password}
              placeholder="Confirm Password"
              //onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="pic">
           <label for="formFile" class="form-label">Profile Picture</label>
          <input class="form-control" type="file" id="formFile" />
         </Form.Group>

         <Button className="button" variant="primary" type="submit">
            Register
          </Button>
          </Form>
          <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
    
      </div>
    </MainScreen>
    
  )
    
}

export default RegisterPage