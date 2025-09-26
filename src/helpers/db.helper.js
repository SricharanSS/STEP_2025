import User from "../models/user.model.js";
 
const createUser = async (username, name, bio, email, password) => {
    const user = await User.create({ 
        username, 
        name, 
        bio, 
        email, 
        password 
    });
    return user;
};
 
const checkIfUserExists = async (email) => {
    const user = await User.findOne({ 
        email: email 
    });
    return user;
};

const fetchUsersFromDB = async () => {
    const userList = await User.find({}).lean();
    return userList;
}
 
export { createUser, checkIfUserExists, fetchUsersFromDB };