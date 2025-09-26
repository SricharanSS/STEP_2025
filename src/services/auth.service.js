
const validateCredentials = async (email, password) => {
    let isSuccess = false;
    if( email == 'sricharan4444@gmail.com' && password == 'sri12345' ) {
        isSuccess = true;
    }
    return isSuccess;
}

export {validateCredentials};