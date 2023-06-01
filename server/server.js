import express from "express";
import notes from './data/notes.js'
import dotenv from "dotenv";
import connectDB from "./config/db.js";


const app = express();
dotenv.config();

//Databaseconnected
connectDB()



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

app.listen(8000, console.log("Server started at port 8000"));

