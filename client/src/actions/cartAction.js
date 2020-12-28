import Axios from "axios";
import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_RESET_EMPTY } from "../constants/cartConstants";

const addToCart = (action, productId, qty) => async (dispatch, getState) => {
    try {
        const cartItemOld = Cookie.getJSON("cartItems");
        const product = cartItemOld.find(p => p.product === productId);
        let quantity = 0;
        if (product) {
            quantity = product.qty + qty;
        }
        if (action === 'update' || quantity === 0) {
            quantity = qty;
        }
        const { data } = await Axios.get('/api/products/' + productId);
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
export { addToCart, removeFromCart, deleteCartPurchased };
