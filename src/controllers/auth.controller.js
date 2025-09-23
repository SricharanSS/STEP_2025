const express = require("express");

const loginUser = async (req, res) => {
    console.log(req.body);
    // Authenticate the User
    res.send("Hello, World");
};

module.exports = {loginUser};