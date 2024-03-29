import {
    USER_CONFIRM_EMAIL_FAIL,
    USER_CONFIRM_EMAIL_REQUEST,
    USER_CONFIRM_EMAIL_SUCCESS,
    USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS,
    USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,
    USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS,
    USER_LOGOUT_SUCCESS,
    USER_FOGOT_PASSWORD_REQUEST, USER_FOGOT_PASSWORD_SUCCESS, USER_FOGOT_PASSWORD_FAIL,
    USER_RESET_PASSWORD_REQUEST, USER_RESET_PASSWORD_SUCCESS, USER_RESET_PASSWORD_FAIL, USER_ENTER_CODE_RESET_PASSWORD_REQUEST, USER_ENTER_CODE_RESET_PASSWORD_SUCCESS, USER_ENTER_CODE_RESET_PASSWORD_FAIL, USER_UPDATE_INFO_REQUEST, USER_UPDATE_INFO_FAIL, USER_UPDATE_INFO_SUCCESS
} from "../constants/userConstants";
import Axios from 'axios';
import Cookie from 'js-cookie';

const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post('/api/auth/login', { email, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

const register = (name = '', email = '', password = '') => async (dispatch, getState) => {
    try {
        if (name === '' && email === '' && password === '') {
            const { userRegister } = getState();
            name = userRegister.userInfo.data.name;
            email = userRegister.userInfo.data.email;
            password = userRegister.userInfo.data.password;
        }
        dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
        const { data } = await Axios.post('/api/auth/confirm-email', { name, email, password });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }

}

const listUsers = () => async (dispatch) => {
    try {
        dispatch({ type: USER_LIST_REQUEST });
        const { data } = await Axios.get('/api/users');
        dispatch({ type: USER_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
}

const confirmEmail = (code) => async (dispatch) => {
    try {
        dispatch({ type: USER_CONFIRM_EMAIL_REQUEST });
        const { data } = await Axios.post('/api/users/add-user', { code });
        dispatch({ type: USER_CONFIRM_EMAIL_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_CONFIRM_EMAIL_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}

const userLogOut = () => async (dispatch) => {
    try {
        Cookie.set('userInfo', '', 0);
        dispatch({ type: USER_LOGOUT_SUCCESS, payload: {} });
    } catch (error) {

    }
}

const fogotPassword = (email) => async (dispatch) => {
    dispatch({ type: USER_FOGOT_PASSWORD_REQUEST });
    try {
        const { data } = await Axios.post('/api/auth/fogot-password', { email });
        dispatch({ type: USER_FOGOT_PASSWORD_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_FOGOT_PASSWORD_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}

const enterCodeResetPassword = (code) => async (dispatch) => {
    dispatch({ type: USER_ENTER_CODE_RESET_PASSWORD_REQUEST });
    try {
        const { data } = await Axios.post('/api/auth/enter-code-reset-pass', { code });
        dispatch({ type: USER_ENTER_CODE_RESET_PASSWORD_SUCCESS, payload: data.status });
    } catch (error) {
        dispatch({
            type: USER_ENTER_CODE_RESET_PASSWORD_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}

const resetPassword = (email, password) => async (dispatch) => {
    dispatch({ type: USER_RESET_PASSWORD_REQUEST });
    try {
        const { data } = await Axios.patch('/api/users/update-password', { email, password });
        dispatch({ type: USER_RESET_PASSWORD_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USER_RESET_PASSWORD_FAIL, error: error.message });
    }
}

const updateInfo = (userID, name, email, address, phone) => async (dispatch) => {
    dispatch({ type: USER_UPDATE_INFO_REQUEST });
    const uInfo = { name: name, _id: userID, email: email, address: address, phone: phone }
    try {
        const { data } = await Axios.patch('/api/users/update-info/' + userID, {
            name, email, address, phone
        });
        if (data) {
            dispatch({ type: USER_UPDATE_INFO_SUCCESS, payload: data });
            // Cookie.set('userInfo', JSON.stringify(uInfo));
        }

    } catch (error) {
        dispatch({ type: USER_UPDATE_INFO_FAIL, payload: error.response.data.message })
    }
}
export { signin, register, listUsers, userLogOut, confirmEmail, fogotPassword, enterCodeResetPassword, resetPassword, updateInfo };
