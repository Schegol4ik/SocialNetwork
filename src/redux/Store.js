import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";
import friendsReducer from "./friends-reducer";

let store = {
    _state: {
        profilePages: {
            posts: [
                {id: 1, namepost: "Hello world!", likeCount: 15},
                {id: 2, namepost: "It's my first app!", likeCount: 11},
                {id: 3, namepost: "Сверху гомики", likeCount: 2},
            ],
            newPostText: 'Privet dolbaeb'
        },
        dialogsPages: {
            dialogs: [
                {id: 1, name: 'Vika'},
                {id: 2, name: 'Oleg'},
                {id: 3, name: 'Iliya'},
                {id: 4, name: 'Maksim'},
                {id: 5, name: 'Vlad'}
            ],

            messages: [
                {id: 1, message: "I love you :*"},
                {id: 2, message: "How are do?"},
                {id: 3, message: "Lukashenko very good President!!"},
                {id: 4, message: "Go play"},
                {id: 5, message: "Give me money on credits ;)"},
            ],
            NewMessageBody: ''
        },

        sideBar: {
            friends: [
                {id: 1, name: 'Vika'},
                {id: 2, name: 'Oleg'},
                {id: 3, name: 'Iliya'},
                {id: 4, name: 'Maksim'},
                {id: 5, name: 'Vlad'}
            ]
        },

        friendsPages: {
            friends: [
                {id: 1, name: 'Vika'},
                {id: 2, name: 'Oleg'},
                {id: 3, name: 'Iliya'},
                {id: 4, name: 'Maksim'},
                {id: 5, name: 'Vlad'}
            ]
        }
    },
    _callsubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callsubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePages = profileReducer(this._state.profilePages, action);
        this._state.dialogsPages = dialogsReducer(this._state.dialogsPages, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._state.friendsPages = friendsReducer(this._state.friendsPages, action);

        this._callsubscriber(this._state);

    }
}

window.store = store;

export default store;