const express = require("express");
const jwt = require("jsonwebtoken");
const authService = require("../services/auth.service");
const authHelper = require("../helpers/auth.helpers");

const loginUser = async (req, res) => {
    console.log(req.body);
    // Authenticate the User
    const { email, password } = req.body;

    const isSuccess = await authService.validateCredentials(email, password);

    let token;
    if(isSuccess) {
        token = await authHelper.generateToken(email);

        res.send(token);
    } else {
        res.json("Error: Login Failed");
    }
};

module.exports = {loginUser};