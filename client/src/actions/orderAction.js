import Axios from 'axios';
import {
    ORDER_MINE_LIST_FAIL,
    ORDER_MINE_LIST_SUCCESS,
    ORDER_MINE_LIST_REQUEST,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_APPROVE_REQUEST,
    ORDER_APPROVE_SUCCESS,
    ORDER_APPROVE_FAIL,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_PAYMENT_METHOD,
    ORDER_LIST_WAIT_DELIVERY_FAIL,
    ORDER_LIST_WAIT_DELIVERY_REQUEST,
    ORDER_LIST_WAIT_DELIVERY_SUCCESS,
    ORDER_UPDATE_STATUS_REQUEST,
    ORDER_UPDATE_STATUS_SUCCESS,
    ORDER_UPDATE_STATUS_FAIL,
    GET_ORDER_BY_STATUS_REQUEST,
    GET_ORDER_BY_STATUS_SUCCESS,
    GET_ORDER_BY_STATUS_FAIL,

} from '../constants/oderConstants';

// danh sach don  hang da dat cua 1 user
export const listOrderOfUser = () => async (dispatch, getState) => {
    dispatch({ type: ORDER_MINE_LIST_REQUEST });
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

const createOrder = (user_id, total, address, phone, billDetail, payment, isPaid) => async (dispatch, getState) => {

    try {
        dispatch({ type: ORDER_CREATE_REQUEST });
        const { cart: { cartItems } } = getState();
        for (let i = 0; i < cartItems.length; i++) {
            const { data } = await Axios.get('/api/products/' + cartItems[i].product);
            const quantity = data.quantity;
            let qty;
            if (quantity > 0) {
                qty = quantity - cartItems[i].qty;
            }
            await Axios.patch('/api/products/updateProductQuantity/' + cartItems[i].product, { qty });
        }
        const { data } = await Axios.post('/api/orders/createOrder', {
            user_id, total, address, phone, billDetail, payment, isPaid
        });
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
    }
};

export const adminApproveOrder = (orderID, action) => async (dispatch) => {
    try {
        if (action === 'Duyet') {
            dispatch({ type: ORDER_APPROVE_REQUEST });
            const { data } = await Axios.patch('/api/orders/admin/' + orderID);
            if (data) {
                dispatch({
                    type: ORDER_APPROVE_SUCCESS,
                    payload: data
                });

            }
        }
        else if (action === 'Huy') {
            dispatch({ type: ORDER_APPROVE_REQUEST });
            const { data } = await Axios.patch('/api/orders/admin/cancelOrder/' + orderID);
            if (data) {
                dispatch({
                    type: ORDER_APPROVE_SUCCESS,
                    payload: data
                });

            }
        }


    } catch (error) {
        dispatch({ type: ORDER_APPROVE_FAIL, payload: error.message });
    }
};

export const orderDetail = (orderID) => async (dispatch, getState) => {
    dispatch({ type: ORDER_DETAILS_REQUEST });
    const { userSignin: { userInfo } } = getState();
    try {
        const { data } = await Axios.get('/api/orders/admin/orderDetail/' + orderID);
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
    }

}
const paymentMethod = (action, userID) => async (dispatch, getState) => {

    try {
        if (action === "get") {
            const { data } = await Axios.get('/api/users/get-account/' + userID)
            dispatch({ type: ORDER_PAYMENT_METHOD, payload: data })
        } else {
            const { data } = await Axios.get('/api/users/get-account/' + userID)

        }
    } catch (error) {

    }

}

export const orderListWaitDelivery = () => async (dispatch, getState) => {
    // console.log("toi action");
    dispatch({ type: ORDER_LIST_WAIT_DELIVERY_REQUEST });
    // const { userSignin: { userInfo } } = getState();
    try {
        const { data } = await Axios.get('/api/orders/shipper/ChoGiao');
        console.log("data:" + data);
        dispatch({ type: ORDER_LIST_WAIT_DELIVERY_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: ORDER_LIST_WAIT_DELIVERY_FAIL, payload: message });
    }
};

export const orderDelivery = () => async (dispatch, getState) => {
    dispatch({ type: ORDER_LIST_WAIT_DELIVERY_REQUEST });
    // const { userSignin: { userInfo } } = getState();
    try {
        const { data } = await Axios.get('/api/orders/shipper/DangGiao');
        console.log("data:" + data);
        dispatch({ type: ORDER_LIST_WAIT_DELIVERY_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: ORDER_LIST_WAIT_DELIVERY_FAIL, payload: message });
    }
};

//[patch] /api/orders/shipper/:orderID/:status
export const updateStatusOrderShipper = (orderID, action) => async (dispatch) => {
    try {
        dispatch({ type: ORDER_UPDATE_STATUS_REQUEST });
        if (action == 'NhanDon') {
            const { data } = await Axios.patch('/api/orders/shipper/' + orderID + "/NhanDon");
            if (data) {
                dispatch({
                    type: ORDER_UPDATE_STATUS_SUCCESS,
                    payload: data
                });

            }
        }
        else if (action == 'Huy') {
            const { data } = await Axios.patch('/api/orders/shipper/' + orderID + "/Huy");
            if (data) {
                dispatch({
                    type: ORDER_UPDATE_STATUS_SUCCESS,
                    payload: data
                });

            }
        }
        else if (action == 'DaGiao') {
            const { data } = await Axios.patch('/api/orders/shipper/' + orderID + "/DaGiao");
            if (data) {
                dispatch({
                    type: ORDER_UPDATE_STATUS_SUCCESS,
                    payload: data
                });

            }
        }

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: ORDER_UPDATE_STATUS_FAIL, payload: message });
    }
};

const getOrderByDeliveryStatus = (diliveryStatus) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_STATUS_REQUEST });
    try {
        if (diliveryStatus === 'Tất cả') {
            const { data } = await Axios.get('/api/orders');
            dispatch({ type: GET_ORDER_BY_STATUS_SUCCESS, payload: data });
        } else {
            const { data } = await Axios.post('/api/orders/order-by-delivery-status', { diliveryStatus });
            dispatch({ type: GET_ORDER_BY_STATUS_SUCCESS, payload: data });
        }
    } catch (error) {
        dispatch({ type: GET_ORDER_BY_STATUS_FAIL, payload: error.message });
    }
}

export const orderDeliverySuccess = () => async (dispatch, getState) => {
    dispatch({ type: ORDER_LIST_WAIT_DELIVERY_REQUEST });
    // const { userSignin: { userInfo } } = getState();
    try {
        const { data } = await Axios.get('/api/orders/shipper/DaGiao');
        // console.log("data:" + data);
        dispatch({ type: ORDER_LIST_WAIT_DELIVERY_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: ORDER_LIST_WAIT_DELIVERY_FAIL, payload: message });
    }
};

export const orderDeliveryFail = () => async (dispatch, getState) => {
    dispatch({ type: ORDER_LIST_WAIT_DELIVERY_REQUEST });
    // const { userSignin: { userInfo } } = getState();
    try {
        const { data } = await Axios.get('/api/orders/shipper/fail');
        // console.log("data:" + data);
        dispatch({ type: ORDER_LIST_WAIT_DELIVERY_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: ORDER_LIST_WAIT_DELIVERY_FAIL, payload: message });
    }
};
const account = (action, userID) => async (dispatch, getState) => {
    try {
        if (action === "get") {
            const { data } = await Axios.get('/api/users/get-account/' + userID);
            dispatch({ type: ORDER_PAYMENT_METHOD, payload: data });
        } else {
            const { account: { availableBalance } } = getState();
            const { cart: { cartItems } } = getState();
            const total = cartItems.reduce((a, c) => a + c.price * c.qty, 0) + 15000;
            const availableBalanceNew = availableBalance - total;
            const { data } = await Axios.patch('/api/users/update-account/' + userID, { availableBalanceNew })
            dispatch({ type: ORDER_PAYMENT_METHOD, payload: data });
        }
    } catch (error) {

    }

};
export { createOrder, account, getOrderByDeliveryStatus };

