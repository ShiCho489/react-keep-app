import React from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
//import Loading from "../../components/Loading";
//import ErrorMessage from "../../components/ErrorMessage";

const RegisterPage = () => {

  return (
    <MainScreen title="REGISTER">
    <div className= "loginContainer">
   <Form>
        <Form.Group controlId ="name">
          <Form.Label>
            name

          </Form.Label>
           <Form.Control
           type="name"

           placeholder="Enter name"
           >

           </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              //value={email}
              placeholder="Enter email"
              //onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              //value={confirmpassword}
              placeholder="Confirm Password"
              //onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.File
              //onChange={(e) => postDetails(e.target.files[0])}
              //id="custom-file"
              //type="image/png"
              //label="Upload Profile Picture"
              //custom
            />
          </Form.Group>
          <Button variant="primary" type="submit">
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