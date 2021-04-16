import {profileAPI, UserAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'


let initialState = {
    posts: [
        {id: 1, namepost: "Hello worlds!", likeCount: 15},
        {id: 2, namepost: "It's my first app!", likeCount: 11},
        {id: 3, namepost: "Сверху гомики", likeCount: 2},
    ],
    newPostText: '',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case ADD_POST: {
            /*let newPost = state.newPostText*/
            return {
                ...state,
                newPostText: ' ',
                posts: [...state.posts, {id: 4, namepost: state.newPostText, likeCount: 0}]
            }
        }
        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {

            return {...state, status: action.status}
        }

        default:
            return state;
    }
}

export const AddPostActionCreater = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const UpdateNewPostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        UserAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })

    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))

            }
        })
    }
}

export default profileReducer;