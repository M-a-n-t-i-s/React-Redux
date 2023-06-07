import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getHeaderThunk} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS';



let initialState = {
    initialized: false

}

const appReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }

}

export const intializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS})
export const initializeApp = ()=> (dispatch) => {
        let promise = dispatch(getHeaderThunk())
            Promise.all([promise]).then(
            ()=>{
                dispatch(intializedSuccess())
            }
        )

}

export default appReducer