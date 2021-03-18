const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, namepost: "Hello worlds!", likeCount: 15},
        {id: 2, namepost: "It's my first app!", likeCount: 11},
        {id: 3, namepost: "Сверху гомики", likeCount: 2},
    ],
    newPostText: ' '
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        case ADD_POST: {
            let newPost = {
                id: 4,
                namepost: state.newPostText,
                likeCount: 0
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ' ';
            return stateCopy;
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