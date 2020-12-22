import {
    USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS,
    USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT
} from "../constants/userConstants";

const userSigninReducer = (
    state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true };
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_SIGNOUT:
            return {};
        default: return state;
    }
};

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

export { userSigninReducer, userListReducer };