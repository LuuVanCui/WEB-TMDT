
import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_REQUEST,
    ORDER_MINE_LIST_FAIL,
    ORDER_MINE_LIST_SUCCESS,
    ORDER_MINE_LIST_REQUEST,
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL,
    ORDER_APPROVE_REQUEST,
    ORDER_APPROVE_SUCCESS,
    ORDER_APPROVE_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
<<<<<<< HEAD
    ORDER_PAYMENT_METHOD
=======
    ORDER_LIST_WAIT_DELIVERY_FAIL,
    ORDER_LIST_WAIT_DELIVERY_REQUEST,
    ORDER_LIST_WAIT_DELIVERY_SUCCESS
>>>>>>> b764374... luu thay doi

} from '../constants/oderConstants';

const findUserOrderReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_MINE_LIST_REQUEST:
            return { loading: true };
        case ORDER_MINE_LIST_SUCCESS:
            return { loading: false, orders: action.payload };
        case ORDER_MINE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


function createOrderReducer(state = {}, action) {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { loading: true };
        case ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                order: action.payload
            };
        case ORDER_CREATE_FAIL:
            return { loading: false, error: action.error };
        default:
            return state;
    }
};

const listOrderForAdmin = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return { loading: true };
        case ORDER_LIST_SUCCESS:
            return { loading: false, orders: action.payload };
        case ORDER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;

    }
};
//duyet don hang
const OrderApprove = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_APPROVE_REQUEST:
            return { loading: true };
        case ORDER_APPROVE_SUCCESS:
            return { loading: false, orders: action.payload };
        case ORDER_APPROVE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;

    }
};
const OrderDetailReducer = (state = { order: { billDetail: [] } }, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return { loading: true };
        case ORDER_DETAILS_SUCCESS:
            return { loading: false, order: action.payload };
        case ORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
<<<<<<< HEAD
const paymentMethodReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_PAYMENT_METHOD:
            return { availableBalance: action.payload };
=======
//lay danh sach order dang chờ giao cho shipper
const OrderListWaitDeliveryReducer = (state = { orders: [] }, action) => {
    console.log("toi reducer");
    switch (action.type) {
        case ORDER_LIST_WAIT_DELIVERY_REQUEST:
            return { loading: true };
        case ORDER_LIST_WAIT_DELIVERY_SUCCESS:
            return { loading: false, orders: action.payload };
        case ORDER_LIST_WAIT_DELIVERY_FAIL:
            return { loading: false, error: action.payload };
>>>>>>> b764374... luu thay doi
        default:
            return state;
    }
}
<<<<<<< HEAD
export { createOrderReducer, findUserOrderReducer, listOrderForAdmin, OrderApprove, OrderDetailReducer, paymentMethodReducer };
=======
export { createOrderReducer, findUserOrderReducer, listOrderForAdmin, OrderApprove, OrderDetailReducer, OrderListWaitDeliveryReducer };
>>>>>>> b764374... luu thay doi
