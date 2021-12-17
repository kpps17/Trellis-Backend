const express = require('express');

// imports the user model for database storage of users
const user = require('../models/user');

// for json web token handling
const jwt = require('jsonwebtoken');

// bcrypt for password hashing
const bcrypt = require('bcryptjs');

// creates a new router/mini-app
const router = express.Router();

// <--------------- User Endpoints --------------->

// 1. user creation end-point
router.post('/register', async (req, res) => {
    const { username, password, confirmPassword } = req.body;
    try {
        // checking consistency of username and passwords entered by the client
        if (!username || !password || !confirmPassword) return res.status(200).json({ error: "Empty fields not allowed" });
        if (password.length < 6) return res.status(200).json({ error: "Min password length should be greater than 5" });
        if (password != confirmPassword) return res.status(200).json({ error: "password doesnt match" });

        // checking whether there exists a user with same username
        const existingUser = await user.findOne({ username });
        if (existingUser) return res.status(200).json({ error: "username already taken" });

        // creating a user with the given creditentials, hashing the password and saving it in users collection in database
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new user({ username, password: hashedPassword });
        const createdUser = await newUser.save();
        return res.status(201).json(createdUser);

    } catch (error) {
        res.status(200).json({ error: error.message });
    }
})


module.exports = router;