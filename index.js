const express = require('express');
require('dotenv').config();
require('./config/db');

// creating an express app
const app = express();
const port = process.env.PORT || 8080;

// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(express.json());

// sets up app at port
app.listen(port, (req, res) => {
    console.log(`app started on ${port}`); 
})
