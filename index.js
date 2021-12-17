const express = require('express');

// creating an express app
const app = express();

// setting up environment varibles
require('dotenv').config();

//connecting database
require('./config/db');

// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(express.json());

app.use('/api/user')

// sets up app at on port
const port = process.env.PORT || 8080;
app.listen(port, (req, res) => {
    console.log(`app started on ${port}`); 
})
