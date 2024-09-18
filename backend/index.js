require("dotenv").config();
const express = require('express');
const cors = require('cors');
const connection = require('./db');
const app = express();
const blogRoutes = require('./routes/blogs');
//Database Connection
connection();

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use('/api',blogRoutes);

app.get('/test', async (req,res)=>{
    res.json("Hello World");
});

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});