import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let state = props.dialogsPages;
    let DialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let MessagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let NewMessageBody = state.NewMessageBody;


    let onSendMessageClick = () => {
        props.SendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.UpdateMessageBody(body)
    }

    return (
        <div className={s.Dialogs}>
            <div className={s.Dialog}>
                {DialogsElements}
            </div>
            <div className={s.Messages}>
                <div>{MessagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={NewMessageBody}
                            onChange={onNewMessageChange}
                            placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dialogs;



