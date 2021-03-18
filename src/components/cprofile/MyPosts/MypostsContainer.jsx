import React from 'react';
import {AddPostActionCreater, UpdateNewPostTextActionCreater} from "../../../redux/profile-reducer";
import MyPost from "./Myposts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        posts: state.profilePages.posts,
        newPostText: state.profilePages.newPostText
    }
}

let mapDispatchToProps =(dispatch)=>{
    return{
        updateNewPostText : (text) => {
            dispatch(UpdateNewPostTextActionCreater(text))
        },
        addPost:() => {
            dispatch(AddPostActionCreater());
        }

    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)

export default MyPostContainer;