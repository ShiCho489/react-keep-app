import React, { useState, useEffect } from 'react'
import MainScreen from '../components/MainScreen'
import { Link } from 'react-router-dom'
import { Button, Card, Badge } from 'react-bootstrap'



const MyNotes = () => {

  const[notes, setNotes] = useState([]);

  const deleteHandler =(id) => {
    if (window.confirm("Are you sure?")){
      
    }
  }
 

  useEffect (() => {
    const fetchData = async ()=> {
      const response = await fetch('/api/notes');
       const json = await response.json()

       if (response.ok) {
        setNotes(json)
       }
       
    }
     fetchData()
  }, [])
  

  
  return (
    <MainScreen title='Welcome again'>
      <Link to='createnote'>
        <Button style={{ marginLeft: 10, marginBottom: 6}} size="lg">
          Create New Note</Button> 
          </Link>
        
          {
              
              notes.map((note)=> (

           
              <Card style= {{ margin: 10}}>
              <Card.Header style={{ display: "flex"}}>
                <span style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontsize: 18,
                  
                  }}>{note.title}
                </span>
                
             
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button variant="dark" className= "mx-2" onClick = {() =>deleteHandler(note._id)}>Delete</Button>
              </div>
              </Card.Header>
             <Card.Body>
                <h4>
                <Badge bg="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>
                   {note.content }

                  </p>
                  <footer className="blockquote-footer">
                   Created On- Date
                   
                  </footer>
                </blockquote>
              </Card.Body>
              
              </Card>
             )
             )


            }
          
      
      
    
    </MainScreen>
  )
}

export default MyNotes