const express = require('express');
const notes = require('./data/notes.js');
const dotenv = require('dotenv')


const app = express();
dotenv.config();



app.get('/', (req, res) => {
    res.send("API is running");
})

app.get('/api/notes', (req, res)=> {
    res.send(notes);
})

app.get('/api/notes/:id', (req, res) => {

    const note = notes.find((note) => note._id === req.params.id);
    res.send(note);
})

app.listen(5001, console.log("Server started at port 5001"));