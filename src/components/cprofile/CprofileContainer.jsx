import React from 'react';
import Profile from "./Cprofile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import Dialogs from "../dialogs/Dialogs";
import {withAuthComponent} from "../../hoc/withAuthRedirect";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId='2'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let AuthRedirectComponent = withAuthComponent(ProfileContainer) ;

let mapStateToProps = (state) => ({
    profile: state.profilePages.profile,
})

let WithUrlDataContainerComponents = withRouter(AuthRedirectComponent);


/*(props) => {
    if(!props.isAuth) return <Redirect to={"/login"} />
    return <WithUrlDataContainerComponents {...props} />
}*/



export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponents);