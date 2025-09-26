import { fetchUsersFromDB } from "../helpers/db.helper.js";

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

export {fetchUsers};