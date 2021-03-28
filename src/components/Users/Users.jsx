import React from 'react'
import s from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/users.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    onPagesChanged = (pageNumber) =>{
        {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            });
        }

        this.props.setCurrentPage(pageNumber)
    }

    render() {
        let pagesCount =Math.ceil( this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i=1;i<=pagesCount;i++){
            pages.push(i)
        }
        return <div>
            {pages.map(p =>{
               return <span className={this.props.currentPage === p && s.selectStyle}
               onClick={(e)=>{this.onPagesChanged(p)}}>{p}</span>
            })}
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.img}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}

export default Users;
