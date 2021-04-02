import React from "react";
import {SendMessageCreater, UpdateMessageBodyCreater} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthComponent} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPages: state.dialogsPages,
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        UpdateMessageBody: (body) => {
            dispatch(UpdateMessageBodyCreater(body));
        },

        SendMessage: () => {
            dispatch(SendMessageCreater())
        }
    }
}

let AuthRedirectComponent = withAuthComponent(Dialogs) ;

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;



