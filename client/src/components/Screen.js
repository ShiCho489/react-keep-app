import React from 'react'
import {Container, Row, Button }  from "react-bootstrap"
import '../components/Screen.css'
import Typewriter from 'typewriter-effect'

const Screen = () => {
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
                <a href="/login">
                    <Button size="lg" className="loginbutton">Login</Button>
                </a>
            
                <a href="/signup">
                    <Button size="lg" className="signupbutton" variant="outline-primary">Signup</Button>
                </a>
            </div>
        </Row>
        </Container>
        
    </div>
  )
}

export default Screen