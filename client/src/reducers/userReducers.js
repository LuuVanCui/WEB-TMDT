import {
    USER_CONFIRM_EMAIL_FAIL,
    USER_CONFIRM_EMAIL_REQUEST,
    USER_CONFIRM_EMAIL_SUCCESS,
    USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS,

    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
} from "../constants/userConstants";

const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true };
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT_SUCCESS:
            return {};
        default: return state;
    }
};

const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return { loading: true };
        case USER_LIST_SUCCESS:
            return { loading: false, users: action.payload };
        case USER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

<<<<<<< HEAD
const userConfirmEmailReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_CONFIRM_EMAIL_REQUEST:
            return { loading: true };
        case USER_CONFIRM_EMAIL_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_CONFIRM_EMAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export { userSigninReducer, userRegisterReducer, userListReducer, userConfirmEmailReducer };
=======


export { userSigninReducer, userRegisterReducer, userListReducer };
>>>>>>> 143b585... logout
