import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    profilePages: profileReducer,
    dialogsPages: dialogsReducer,
    sideBar: sideBarReducer,
    friendsPages: friendsReducer,
    usersPages:usersReducer,
    auth:authReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;