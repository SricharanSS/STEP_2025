const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = async (email) => {

    const token = jwt.sign({email},process.env.SECRET_TOKEN,{expiresIn: "15m"});

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
        console.log("vanakam da mapl",error);
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

const encryptPassword = async (password) => {
  // 10 is a common default for salt rounds
  const hashPassword = await bcrypt.hash(password, 10);
  return hashPassword;
};
 
const checkPassword = async (plainPassword, hashedPassword) => {
  const match = await bcrypt.compare(plainPassword, hashedPassword);
  console.log(match);
  return match; // true or false
};

module.exports = {generateToken, verifyToken, tokenDecode, encryptPassword, checkPassword};