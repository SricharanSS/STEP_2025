const { fetchUsersFromDB } = require("../helpers/db.helper");

const fetchUsers = async () => {
    let userList = [];
    try {
        userList = await fetchUsersFromDB();
    } catch(err) {
        console.log(err);
        throw new Error("MongoDB Fetch Failed");
    }

    return userList;
}

module.exports = {fetchUsers};