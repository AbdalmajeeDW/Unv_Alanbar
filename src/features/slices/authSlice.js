import { createSlice } from '@reduxjs/toolkit';
import Cookies from "js-cookie";

const initialState = {
    token: Cookies.get('token') ? JSON.parse(Cookies.get('token')) : null,
    type: Cookies.get('type') ? JSON.parse(Cookies.get('type')) : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { type, token, expires } = action.payload;
            state.type = type;
            state.token = token;
            Cookies.set('token', JSON.stringify(token), { expires: expires, secure: true })
            Cookies.set('type', JSON.stringify(type), { expires: expires, secure: true })
        },
        logout: (state) => {
            state.type = null;
            state.token = null;
            Cookies.remove('token')
            Cookies.remove('type')
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
