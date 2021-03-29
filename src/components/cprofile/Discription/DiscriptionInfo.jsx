import s from "./DiscriptionInfo.module.css";
import React from "react";
import Preloader from "../../../common/preloader/Preloader";

const DisInfo = (props) => {
    if(!props.profile){
       return <Preloader/>
    }

    return (
        <div>
            <div className={s.upimg}>
                <img src='https://i.pinimg.com/originals/08/ba/0a/08ba0abff564e8c1baad49383614c2d7.jpg'/>
            </div >
            <div className={s.discrip}><div>
                <div className={s.aboutProfile}>
                <img src={props.profile.photos.large}/>
                </div>
                <span>Name: {props.profile.fullName}</span>
                <div>AboutMe: {props.profile.aboutMe}</div>
                <span></span>
            </div>
        </div>
        </div>

    )
}

export default DisInfo;