import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let idgo = "/dialogs/" + props.id;

    return (
        <div>
            <div className={s.DialogPeople}>
                <img src="https://imgix.bustle.com/uploads/image/2020/5/18/faf8dd60-4faf-48eb-8d39-8e0ec72b6fc4-fb-avatar.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"/>
                <NavLink to={idgo}>{props.name}</NavLink>
            </div>
        </div>)


}


export default DialogItem;



