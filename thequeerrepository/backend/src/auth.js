const router = require("express").Router();
const User = require("../models/User");
const bycrypt = require("bcrypt");

// CREATE ACCOUNT
router.post("/createAccount", async(req, res) => {
    try {
        const salt = await bycrypt.genSalt(5);
        const hashedPass = await bycrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err);
    }
})