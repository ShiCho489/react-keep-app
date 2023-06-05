import express from "express";
import notes from './data/notes.js'
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

const app = express();
dotenv.config();

//Databaseconnected
connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("API is running");
})

app.get('/api/notes', (req, res)=> {
   res.send(notes);
})

app.use('/api/users', userRoutes);

//error handling middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(5000, console.log("Server started at port 5000"));

