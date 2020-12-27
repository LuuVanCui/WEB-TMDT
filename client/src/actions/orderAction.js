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
    console.log(Cookie.userInfo);
    try {

        const { data } = await Axios.get('/api/order/mine/5fd8706edc46a5339c9d1670');
        dispatch({ type: ORDER_MINE_LIST_SUCCESS, payload: data });

        const {
            userSignin: { userInfo },
        } = getState();
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
    }
};

const createOder = () => async (dispatch) => {

}
