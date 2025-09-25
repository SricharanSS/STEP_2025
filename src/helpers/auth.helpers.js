const jwt = require("jsonwebtoken");

const generateToken = async (email) => {

    const token = jwt.sign({email},process.env.SECRET_TOKEN);

    return token;

}

module.exports = {generateToken}