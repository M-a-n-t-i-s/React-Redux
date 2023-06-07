const SENT_NEW_MESSAGE ='SENT-NEW-MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: "Dmitro"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"}
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 1, message: "How are you?"},
        {id: 2, message: "Good"},
        {id: 2, message: "very"},
        {id: 1, message: "Perfect"}
    ]
}


const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {

        case SENT_NEW_MESSAGE:
            let newMessage = {
                id: 1,
                message: action.newText,
            }
            return  {
                ...state,
                messagesData: [...state.messagesData,newMessage]
            };


        default: {
            return state;
        }

    }

}
export const sentNewMessageActionCreator = (text) => {
    return {
        type: SENT_NEW_MESSAGE,
        newText: text
    }
}
export default dialogsReducer;