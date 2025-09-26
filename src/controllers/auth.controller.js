import {validateCredentials, validateRegisterUser} from "../services/auth.service.js";
import {generateToken} from "../helpers/auth.helpers.js";
import {sendResponse} from "../utils/response.utils.js";

const registerUser = async (req, res) => {
  try {
    const { username, name, bio, email, password } = req.body;
    const responseMsg = await validateRegisterUser(
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

    const isSuccess = await validateCredentials(email, password);

    let token;
    if(isSuccess) {
        token = await generateToken(email);

        sendResponse(res, token, "Success", 200);
    } else {
        sendResponse(res, null, "Login Failed", 500);
    }
};

export {loginUser, registerUser};