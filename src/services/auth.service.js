const { encryptPassword, checkPassword } = require("../helpers/auth.helpers");
const { checkIfUserExists, createUser } = require("../helpers/db.helper");

const validateCredentials = async (email, password) => {
    let isSuccess = false;
    const user = await checkIfUserExists(email);
    console.log(user);
    if(user === null) {
      return false;
    }
    const hashedPassword = user.password;

    let isPasswordCorrect = false;
    isPasswordCorrect = await checkPassword(password, hashedPassword);

    if( email === user.email && isPasswordCorrect) {
        isSuccess = true;
    }
    return isSuccess;
}

const validateRegisterUser = async (username, name, bio, email, password) => {
  const duplicate = await checkIfUserExists(email);
 
  if(duplicate != null) {
    console.log("Error Thorwn");
    throw new Error("Username already taken");
  }
  const hashedPassword = await encryptPassword(password);
 
  const user = await createUser(username, name, bio, email, hashedPassword);
  return user;
};

module.exports = {validateCredentials, validateRegisterUser};