import Axios from "axios";
import {
    PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS, PRODUCT_ADD_FAIL, PRODUCT_ADD_SUCCESS, PRODUCT_ADD_REQUEST,
    PRODUCT_DELETE_FAIL, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_REQUEST
} from "../constants/productConstants"

const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await Axios.get('/api/products');
        console.log(data);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.product });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}

const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
        const { data } = await Axios.get('/api/products/' + productId);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
}
const addProduct = (name, categoryname, brandname, description, image, quantity, price, weight) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_ADD_REQUEST });
        const { data } = await Axios.post('/api/product/addProduct', {
            name, categoryname, brandname, description, image, quantity, price, weight
        });
        dispatch({
            type: PRODUCT_ADD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({ type: PRODUCT_ADD_FAIL, payload: error.message })
    }
}
const deleteProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST });
        const { data } = await Axios.delete('/api/product/deleteProduct/' + productId);
        dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
}
export { listProducts, detailsProduct, deleteProduct };