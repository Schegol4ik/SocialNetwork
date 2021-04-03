import React from 'react'
import {connect} from "react-redux";
import {follow, unfollow, toggleIsFollowing, getUsers, setCurrentPage} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {Redirect} from "react-router-dom";
import {withAuthComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPagesChanged = (pageNumber) => {
        {
            this.props.getUsers(pageNumber, this.props.pageSize)
        }

        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPagesChanged={this.onPagesChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                  />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPages.users,
        pageSize: state.usersPages.pageSize,
        totalUsersCount: state.usersPages.totalUsersCount,
        currentPage: state.usersPages.currentPage,
        isFetching: state.usersPages.isFetching,
        followingInProgress: state.usersPages.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, {
            follow, unfollow,
            toggleIsFollowing, getUsers,
            setCurrentPage
        }
    ),
    withAuthComponent
)(UsersContainer)
