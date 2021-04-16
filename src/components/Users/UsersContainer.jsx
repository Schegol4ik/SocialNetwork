import React from 'react'
import {connect} from "react-redux";
import {follow, unfollow, toggleIsFollowing, getUsersThunk, setCurrentPage} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {withAuthComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers, getUsersSuper
} from "../../redux/reselect/reselectors-users";



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
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
            follow, unfollow,
            toggleIsFollowing, getUsers: getUsersThunk,
            setCurrentPage
        }
    ),
    withAuthComponent
)(UsersContainer)
