import {observe} from "web-vitals/dist/modules/lib/observe";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello", like: '3'},
                {id: 2, message: "My First Post", like: '0'}

            ],
            newPostText: 'IT'
        },
        dialogsPage: {
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
        },
        sidebar: []

    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель паттерн
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;









