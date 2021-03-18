import React from 'react'
import s from './Mypost.module.css'
import Post from "./Post/Post";


const MyPost = (props) => {

    let PostsElements = props.posts.map(p => <Post id={p.id} namepost={p.namepost} key={p.id} likeCount={p.likeCount}/>)

    let newPostElements = React.createRef();

    let onPostChange = () => {
        let text = newPostElements.current.value;
        props.updateNewPostText(text)

    }

    let onAddPost = () => {
        props.addPost();
    }


    return (
        <div>
            <h3>my post</h3>
            <div className={s.textarea}>
                <textarea onChange={onPostChange} ref={newPostElements} value={props.newPostText}/>
            </div>
            <div className={s.button}>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                {PostsElements}
            </div>
        </div>


    )
}

export default MyPost;