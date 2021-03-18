import s from "./DiscriptionInfo.module.css";
import React from "react";

const DisInfo = (props) => {
    return (
        <div>
            <div className={s.upimg}>
                <img src='https://i.pinimg.com/originals/08/ba/0a/08ba0abff564e8c1baad49383614c2d7.jpg'/>
            </div>
            <div className={s.discrip}>
                avatar+discription
            </div>
        </div>

    )
}

export default DisInfo;