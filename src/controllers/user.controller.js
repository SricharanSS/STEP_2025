import { fetchUsers } from "../services/user.service.js";
import { sendResponse } from "../utils/response.utils.js";

const getAllUsersController = async (req, res) => {
    let userList = [];
    try {
        userList = await fetchUsers();
        if(userList.length === 0) {
            sendResponse(res, [], "User List Empty", 404);
            return ;
        } 

        sendResponse(res, userList, "Sucess", 200);
    } catch(err) {
        sendResponse(res, null, "Server Error", 500);
        console.log("User Controller Error: "+err);
    }
}

export {getAllUsersController};