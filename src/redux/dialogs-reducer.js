const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Vika'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Iliya'},
        {id: 4, name: 'Maksim'},
        {id: 5, name: 'Vlad'}
    ],

    messages: [
        {id: 1, message: "I love you :*"},
        {id: 2, message: "How are do?"},
        {id: 3, message: "Lukashenko very good President!!"},
        {id: 4, message: "Go play"},
        {id: 5, message: "Give me money on credits ;)"},
    ],
    NewMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                NewMessageBody: action.bodyText
            }
        }
        case SEND_MESSAGE: {
            let body = state.NewMessageBody;
            return {
                ...state,
                NewMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default :
            return state;
    }
}

export const SendMessageCreater = () => ({type: SEND_MESSAGE})
export const UpdateMessageBodyCreater = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, bodyText: body
})

export default dialogsReducer;