import {validateCredentials} from "../services/auth.service.js";
import {generateToken} from "../helpers/auth.helpers.js";
import {sendResponse, sendErrorResponse} from "../utils/response.utils.js";

const loginUser = async (req, res) => {
    console.log(req.body);
    // Authenticate the User
    const { email, password } = req.body;

    const isSuccess = await validateCredentials(email, password);

    let token;
    if(isSuccess) {
        token = await generateToken(email);

        sendResponse(res, token, "Success", 200);
    } else {
        sendErrorResponse(res, null,"Login Failed", 500);
    }
};

export {loginUser};