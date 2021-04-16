import {authAPI, UserAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,

            }
        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login,isAuth) => ({type: SET_USER_DATA, data: {userId, email, login,isAuth}})

export const getAuthUser = () => {
    return (dispatch) => {
        authAPI.getLogin().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login,true))
            }
        })
    }
}

export const loginThunk = (email,password,rememberMe) => {
    return (dispatch) => {
        authAPI.login(email,password,rememberMe).then(response => {
            if (response.data.resultCode === 0) {
          dispatch(getAuthUser())
            }
        })
    }
}
export const logoutThunk = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null,null,null,false))
            }
        })
    }
}

export default authReducer;