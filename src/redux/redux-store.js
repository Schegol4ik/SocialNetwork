import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePages: profileReducer,
    dialogsPages: dialogsReducer,
    sideBar: sideBarReducer,
    friendsPages: friendsReducer,
    usersPages:usersReducer
})

let store = createStore(reducers);

window.store = store;

export default store;