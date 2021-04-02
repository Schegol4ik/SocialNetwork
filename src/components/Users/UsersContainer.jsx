import React from 'react'
import {connect} from "react-redux";
import {follow, unfollow, toggleIsFollowing, getUsers, setCurrentPage} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {Redirect} from "react-router-dom";
import Dialogs from "../dialogs/Dialogs";
import {withAuthComponent} from "../../hoc/withAuthRedirect";



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
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
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

let AuthRedirectComponent = withAuthComponent(UsersContainer) ;

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

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

export default connect(mapStateToProps, {
        follow, unfollow,
        toggleIsFollowing, getUsers,
    setCurrentPage
    }
)(AuthRedirectComponent);