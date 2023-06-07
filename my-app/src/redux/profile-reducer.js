import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'


let initialState = {
    posts: [
        {id: 1, message: "Hello", like: '3'},
        {id: 2, message: "My First Post", like: '0'}

    ],
    newPostText: 'IT',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newText,
                like: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            };

        }


        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p=> p.id != action.postId)}
        }
        default: {
            return state;
        }

    }

}
export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        newText: text
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ( {type: SET_STATUS, status})
export const deletePost = (postId) => ( {type: DELETE_POST, postId})

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let responce = await profileAPI.getProfile(userId !== undefined ? userId : 28689)//userId должен вместо 2, но не работает

                dispatch(setUserProfile(responce));

    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId !== undefined ? userId : 28689)//userId должен вместо 2, но не работает
            .then(responce => {
                dispatch(setStatus(responce.data));
            });
    }

}
export const updateStatus = (status) => {
    return  async (dispatch) => {
        let responce = await profileAPI.updateStatus(status)//userId должен вместо 2, но не работает
                if (responce.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }

    }
}


export default profileReducer;