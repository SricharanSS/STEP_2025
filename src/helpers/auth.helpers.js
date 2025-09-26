const jwt = require("jsonwebtoken");

const generateToken = async (email) => {

    const token = jwt.sign({email},process.env.SECRET_TOKEN,{expiresIn: "1m"});

    return token;

}

const verifyToken = async (token) => {
    if(token == null) {
        return false;
    }

    let validUser = false;
    try {
        validUser = jwt.verify(token, process.env.SECRET_TOKEN);
    } catch(error) {
        console.log(error);
        return false
    }
    return validUser;
}

const tokenDecode = (token) => {
	try {
		const decodedToken = jwt.decode(token);
		return decodedToken;
	} catch (err) {
		return null;
	}
};

module.exports = {generateToken, verifyToken, tokenDecode}