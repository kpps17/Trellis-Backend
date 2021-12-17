const mongoose = require('mongoose');

// connnecting to database 
mongoose.connect(process.env.DB_LINK).then((db) => {
    console.log('database connected');
});