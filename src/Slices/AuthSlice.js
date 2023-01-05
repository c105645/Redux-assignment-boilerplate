import { createSlice } from '@reduxjs/toolkit'
import { loginAPI } from '../Services/NewsService';
import { isAuthenticatedAPI } from '../Services/NewsService';

const initialState = {
    isAuthenticated: false,
    error: "",
    loading: false
}


export const islogedIn = async (dispatch) => {
    try { 
        const response = await isAuthenticatedAPI();
        dispatch(userLogInVerify(response));
    } catch (err) {
        dispatch(userLoginExpired(err.message));
    }
}


export function login(entry) {
    return async function loginThunk(dispatch) {
        try {
            const response = await loginAPI(entry);
            dispatch(userLoggedIn(response));
        } catch (err) {
            dispatch(userLoginFailed(err.message));
        }
    }
  }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn(state, action) {
            const user = action.payload;
            sessionStorage.setItem("token", user.token);
            sessionStorage.setItem("username", user.username);
            return {
                ...state,
                isAuthenticated: true,
                error: "",
                loading: false
            }
        },

        authDetailsLoading(state, action) {
            return {
                ...state,
                loading: true
            }
        },

        userLoginFailed(state, action) {
            const error = action.payload
            return {
                ...state,
                isAuthenticated: false,
                error: error,
                loading: false

            }
        },
        userLogInVerify(state, action) {
            console.log("userLogInVerify");
            const res = action.payload.isAuthenticated;
            console.log(action.payload);
            if(!res) sessionStorage.removeItem("token");
            return res ? {
                ...state,
                isAuthenticated: true
            } : {
                ...state,
                isAuthenticated: false
            } 
        },

        userLoginExpired(state, action) {
            return {
                ...state,
                isAuthenticated: false,
                error: "Login Expired, login again."
            }
        },
    userLoggedOut(state, action) {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        return {
            ...state,
            isAuthenticated: false,
            error: ""
        }
    },
}

})

export const { userLoggedIn, userLoginFailed, userLogInVerify, userLoginExpired, userLoggedOut, authDetailsLoading } = authSlice.actions

export default authSlice.reducer;
