import React from 'react';
import Header from "./Headercomp";
import {connect} from "react-redux";
import {getAuthUser, logoutThunk, setAuthUserData} from "../../redux/auth-reducer";



class HeaderCompContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUser()
    }


    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {getAuthUser,logoutThunk})(HeaderCompContainer)