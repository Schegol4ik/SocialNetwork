const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, namepost: "Hello worlds!", likeCount: 15},
        {id: 2, namepost: "It's my first app!", likeCount: 11},
        {id: 3, namepost: "Сверху гомики", likeCount: 2},
    ],
    newPostText: ''
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
        default:
            return state;
    }
}

export const AddPostActionCreater = () => ({type: ADD_POST})
export const UpdateNewPostTextActionCreater = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer;