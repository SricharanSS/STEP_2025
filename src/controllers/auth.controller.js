const authService = require("../services/auth.service");
const authHelper = require("../helpers/auth.helpers");
const {sendResponse} = require("../utils/response.utils");

const registerUser = async (req, res) => {
  try {
    const { username, name, bio, email, password } = req.body;
    const responseMsg = await authService.validateRegisterUser(
      username,
      name,
      bio,
      email,
      password
    );
 
    if (!responseMsg) throw errorMonitor;
    sendResponse(res, null, "User Created", 201);
  } catch (error) {
    console.log("User Registration Failed");
    sendResponse(res, null, error, 403);
  }
};

const loginUser = async (req, res) => {
    console.log(req.body);
    // Authenticate the User
    const { email, password } = req.body;

    const isSuccess = await authService.validateCredentials(email, password);

    let token;
    if(isSuccess) {
        token = await authHelper.generateToken(email);

        sendResponse(res, token, "Success", 200);
    } else {
        sendResponse(res, null, "Login Failed", 500);
    }
};

module.exports = {loginUser, registerUser};