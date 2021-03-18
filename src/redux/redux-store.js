import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";
import friendsReducer from "./friends-reducer";

let reducers = combineReducers({
    profilePages: profileReducer,
    dialogsPages: dialogsReducer,
    sideBar: sideBarReducer,
    friendsPages: friendsReducer
})

let store = createStore(reducers);

window.store = store;

export default store;