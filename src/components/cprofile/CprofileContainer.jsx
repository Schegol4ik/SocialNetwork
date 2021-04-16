import React from 'react';
import Profile from "./Cprofile";
import {connect} from "react-redux";
import { getStatusThunk, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId='2'
        }
        this.props.getUserProfile(userId)
        this.props.getStatusThunk(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return <Profile {...this.props} profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePages.profile,
    status: state.profilePages.status
})

export default compose(
    connect(mapStateToProps, {getUserProfile,getStatusThunk,updateStatus}),
    withRouter,
    withAuthComponent
)(ProfileContainer)