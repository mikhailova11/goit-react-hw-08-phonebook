import { fetchCurrentUser, loginUser, logoutUser, newUser } from "./operaitions";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = ({
    user: {name: null, email: null},
    token: null,
    isLogin: false,
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [newUser.fulfilled](state, {payload}){
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
        },
        [loginUser.fulfilled](state, {payload}){
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
        },
        [logoutUser.fulfilled](state, _){
            state.user = {name: null, email: null};
            state.token = null;
            state.isLogin = false;
        },
        [fetchCurrentUser.fulfilled](state, {payload}){
            state.user = payload;
            state.isLogin = true;
        }
    },
})

export default authSlice;