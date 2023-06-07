import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'network/auth/SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getHeaderThunk = () => async (dispatch) => {
    let data = await authAPI.me()

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true));
    }


}
export const login = (email, password, rememberMe) => {
    return  async (dispatch) => {

        let data = await authAPI.login(email, password, rememberMe)

            if (data.resultCode === 0) {
                dispatch(getHeaderThunk())


            } else {
                let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: "Common error"}))

            }

    }
}
export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout()
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
    }
}
export default authReducer