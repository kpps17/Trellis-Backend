const mongoose = require('mongoose');

// creates a user schema for mongoose data which will be stored on 'user' collection
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    }, 
}, {
    timestamps: true,
})

module.exports = mongoose.model('user', userSchema);