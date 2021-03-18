import React from 'react';
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div>
            <div className={s.setpost}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85TKwBfcuDhueUq7kx5HLfgdO4FbcRBZ6uA&usqp=CAU"/>
                {props.namepost}
                <li>like {props.likeCount}</li>
            </div>
        </div>
    )
}

export default Post;