import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_RESET_EMPTY, SEND_MAIL_ORDER_REQUEST, SEND_MAIL_ORDER_SUCCESS } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x => x.product === item.product);
            if (product) {
                return { ...state, cartItems: state.cartItems.map(x => x.product === product.product ? item : x) };
            }
            return { cartItems: [...state.cartItems, item] };
        case CART_REMOVE_ITEM:
            return { cartItems: state.cartItems.filter(x => x.product !== action.payload) };
        case CART_RESET_EMPTY:
            return { cartItems: [] };
        default:
            return state;
    }
}

const sendMailOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case SEND_MAIL_ORDER_REQUEST:
            return { loading: true };
        case SEND_MAIL_ORDER_SUCCESS:
            return { loading: false };
        default:
            return state;
    }
}

export { cartReducer, sendMailOrderReducer };