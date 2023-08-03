import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import "./RegisterPage.css";
import { register } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {

  const [email, setEmail] = useState("");
  const[name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
 
  

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  
  const navigate = useNavigate();


  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if(password !== confirmpassword){
      setMessage("Passwords do not match");
    }else{
      dispatch(register(name, email, password));
    }
  };

  return (
    <MainScreen title= "REGISTER">
    <div className="loginContainer">
    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
    {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
    {loading && <Loading />}
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="formBasicEmail">
      <Form.Label className="name">Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
             onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="email">Email</Form.Label>
            <Form.Control
              type="email"
             value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="basic">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label className="confirm">Confirm Password</Form.Label>
            <Form.Control
             
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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

  export default RegisterPage;

