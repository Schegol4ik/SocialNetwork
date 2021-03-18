import React from "react";
import {SendMessageCreater, UpdateMessageBodyCreater} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPages: state.dialogsPages
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;



