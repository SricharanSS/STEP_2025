const authHelper = require("../helpers/auth.helpers");
const { sendResponse } = require("../utils/response.utils");

const validateToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        sendResponse(res, null, "Authorization Failed", 403);
        return ;
    }
    let bearerToken = authHeader.split(' ')[1];

    const isValid = await authHelper.verifyToken(bearerToken);
    
    if(isValid) {
        const decodedToken = await authHelper.tokenDecode(bearerToken);
			res.locals.userInfo = {
				email: decodedToken.email,
			};
        console.log("User Authenticated");
        next();
    } else {
        console.log("Token is Not Valid. Sending Error Response");
        sendResponse(res, null, "Authorization Failed", 403);
    }
}

module.exports = {validateToken}