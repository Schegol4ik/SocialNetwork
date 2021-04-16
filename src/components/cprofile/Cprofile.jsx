import React from 'react';
import './MyPosts/Myposts.jsx'
import s from './Cprofile.module.css';
import DisInfo from "./Discription/DiscriptionInfo";
import MyPostContainer from "./MyPosts/MypostsContainer";
import {Redirect} from "react-router-dom";





const Profile = (props) => {
    return (
        <div>
            <div>
                <DisInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
                <MyPostContainer  />
            </div>
        </div>

    )
}

export default Profile;