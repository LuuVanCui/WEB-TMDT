
import Axios from 'axios';
import Cookie from 'js-cookie';
import {
    ORDER_MINE_LIST_FAIL,
    ORDER_MINE_LIST_SUCCESS,
    ORDER_MINE_LIST_REQUEST,

    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL,
    ORDER_PAID_REQUEST,
    ORDER_PAID_SUCCESS,
    ORDER_PAID_FAIL,
} from '../constants/oderConstants';

// danh sach don  hang da dat cua 1 user
export const listOrderOfUser = () => async (dispatch, getState) => {
    dispatch({ type: ORDER_MINE_LIST_REQUEST });
    // const userInfo = JSON.parse(Cookie.get('userInfo'));
    const {
        userSignin: { userInfo },
    } = getState();
    const id = userInfo._id;
    try {

        const { data } = await Axios.get('/api/orders/mine/' + id);

        dispatch({ type: ORDER_MINE_LIST_SUCCESS, payload: data });

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
    }
};

const createOrder = (user_id, total, address, phone, billDetail) => async (dispatch) => {
    try {
        dispatch({ type: ORDER_CREATE_REQUEST });
        const { data } = await Axios.post('/api/orders/createOrder', {
            user_id, total, address, phone, billDetail
        });
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
    }
};

export { createOrder };