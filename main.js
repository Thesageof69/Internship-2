import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './database.js'; 

import userRoutes from './userRoutes.js';
import errorHandling from './errorHandler.js';
import createUserTable from './createUserTable.js';

dotenv.config()


const app = express()
const PORT = process.env.PORT 

// middlewares
app.use(express.json());
app.use(cors());

//ROUTES
app.use('/api',userRoutes);


//ERROR HANDLING middleware
app.use(errorHandling);


createUserTable();

//Testing POSTGRES CONNECTION
app.get("/",async(req,res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is : ${result.rows[0].current_database}`)

});




//SERVER LISTENING
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})