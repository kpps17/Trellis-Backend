const mongoose = require('mongoose');

mongoose.connect(process.env.DB_LINK).then((db) => {
    console.log('database connected');
});