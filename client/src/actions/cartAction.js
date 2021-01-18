import Axios from "axios";
import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_RESET_EMPTY, SEND_MAIL_ORDER_REQUEST, SEND_MAIL_ORDER_SUCCESS } from "../constants/cartConstants";

const addToCart = (action, productId, qty) => async (dispatch, getState) => {
    try {
        const cartItemOld = Cookie.getJSON("cartItems");
        let quantity = 0;
        if (cartItemOld) {
            const product = cartItemOld.find(p => p.product === productId);
            if (product) {
                quantity = product.qty + qty;
            }
        }
        if (action === 'update' || quantity === 0) {
            quantity = qty;
        }
        const { data } = await Axios.get('/api/products/' + productId);
        if (quantity > data.quantity) {
            alert(`Trong kho chỉ còn ${data.quantity} sản phẩm`);
            quantity = data.quantity;
        }
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.quantity,
                qty: quantity
            }
        });
        const { cart: { cartItems } } = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));

    } catch (error) {

    }

}
const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}
const deleteCartPurchased = () => (dispatch) => {
    try {
        dispatch({ type: CART_RESET_EMPTY, payload: [] })
        Cookie.set("cartItems", '', 0);
    } catch (error) {
    }
}

const sendMailOrder = (userInfo, cartItems) => async (dispatch) => {
    dispatch({ type: SEND_MAIL_ORDER_REQUEST });
    try {
        await Axios.post('/api/orders/sendmail', { userInfo, cartItems });
        dispatch({ type: SEND_MAIL_ORDER_SUCCESS });
    } catch (error) {

    }
}

export { addToCart, removeFromCart, deleteCartPurchased, sendMailOrder };
