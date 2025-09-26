const { fetchUsers } = require("../services/user.service");
const { sendResponse } = require("../utils/response.utils");

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

module.exports = {getAllUsersController};