const authService = require("../services/auth.service");
const authHelper = require("../helpers/auth.helpers");
const {sendResponse, sendErrorResponse} = require("../utils/response.utils");

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
        sendErrorResponse(res, null,"Login Failed", 500);
    }
};

module.exports = {loginUser};