//import React, { useEffect } from 'react'
import {Container, Row, Button }  from "react-bootstrap"
import '../screens/Mainpage.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom';

const Screen = ({ history }) => {

    //useEffect (() => {
        
      
        //if(userInfo) 
       // history.push("/mynotes")
      //}, [history])
      
  return (
    <div className="main">
        <Container>
        <Row>
            <div className= "intro-text">
                <h1 className= "title">Welcome to Keep App</h1>
                <Typewriter className="sub-title" options= {{autoStart: true, loop: true, delay: 40}} onInit= {(typewriter) => {
     typewriter
     .typeString("Place for making your daily notes.")
     .pauseFor(1000)
     .deleteAll()
     .typeString("Place for keeping your notes safe.")
     .start();
                }} />
            </div>
             <div className= "buttonContainer">
                <Link to="/login" >
                <Button size="lg" className="loginbutton">Login</Button>
                </Link>
                    
                
            
                <Link to="/signup">
                    <Button size="lg" className="signupbutton" variant="outline-primary">Signup</Button>
                </Link>
            </div>
        </Row>
        </Container>
        
    </div>
  )
}

export default Screen