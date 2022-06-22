 const getIsLogIn = state => state.auth.auth.isLogin;

 const getUserName = state => state.auth.auth.user.name

const selectors = {
    getIsLogIn, getUserName
}

export default selectors