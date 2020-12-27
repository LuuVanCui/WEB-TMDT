import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    // ORDER_LIST_REQUEST,
    // ORDER_LIST_SUCCESS,
    // ORDER_LIST_FAIL,
    // ORDER_PAID_REQUEST,
    // ORDER_PAID_SUCCESS,
    // ORDER_PAID_FAIL,
} from '../constants/oderConstants';
import Axios from 'axios';
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