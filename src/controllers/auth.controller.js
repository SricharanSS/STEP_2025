const express = require("express");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    console.log(req.body);
    // Authenticate the User
    const { email, password } = req.body;

    const accessToken = jwt.sign({email, password},process.env.SECRET_TOKEN);
    
    res.json(accessToken);
};

module.exports = {loginUser};