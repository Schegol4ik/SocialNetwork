import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/images/users.png";
import {NavLink, Redirect} from "react-router-dom";
import * as axios from "axios";
import {UserAPI} from "../../api/api";
import {toggleIsFollowing} from "../../redux/users-reducer";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p && s.selectStyle}
                         onClick={(e) => {
                             props.onPagesChanged(p)
                         }}>{p}</span>
        })}
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.img}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>follow</button>}
                            </div>
                            </span>
                    <span>
                            <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            </span>
                            <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                            </span>
                            </span>
                </div>
            )
        }
    </div>

}

export default Users;