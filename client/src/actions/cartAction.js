import Axios from "axios";
import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_RESET_EMPTY } from "../constants/cartConstants";

const addToCart = (action, productId, qty) => async (dispatch, getState) => {
    try {
        const cartItemOld = Cookie.getJSON("cartItems");
        let quantity = cartItemOld.map(p => {
            if (p.product === productId) {
                return qty + p.qty
            } else {
                return qty
            }
        });
        if (action === 'update') {
            quantity[0] = qty;
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
                qty: quantity[0]
            }
        });
        const { cart: { cartItems } } = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));

    } catch (error) {

    }

}
// const updateCart = (productId, qty) => {
//     try {
//         const { data } = await Axios.get('/api/products/' + productId);
//         dispatch({
//             type: CART_ADD_ITEM,
//             payload: {
//                 product: data._id,
//                 name: data.name,
//                 image: data.image,
//                 price: data.price,
//                 countInStock: data.quantity,
//                 qty: quantity[0]
//             }
//         });
//         const { cart: { cartItems } } = getState();
//         Cookie.set("cartItems", JSON.stringify(cartItems));

//     } catch (error) {

//     }
// }
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
