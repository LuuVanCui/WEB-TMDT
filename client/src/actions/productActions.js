import Axios from "axios";
import {
    PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS, PRODUCT_ADD_FAIL, PRODUCT_ADD_SUCCESS, PRODUCT_ADD_REQUEST,
    PRODUCT_DELETE_FAIL, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_REQUEST,
    PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_REQUEST
} from "../constants/productConstants"

// const listProducts = (page) => async (dispatch) => {
//     try {
//         dispatch({ type: PRODUCT_LIST_REQUEST });
//         const findWithPage = '';
//         if (page != null) {
//             findWithPage = '?page=' + page;
//         }
//         const { data } = await Axios.get('/api/products?page=' + page);
//         // dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.product });
//         dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

//     } catch (error) {
//         dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
//     }
// }
const listProducts = (page) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        let pagination = '';
        if (page != null) {
            pagination = '?page=' + page;
        }
        console.log(pagination);
        const { data } = await Axios.get('/api/products' + pagination);
        // dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.product });
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

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
const addProduct = (page, name, categoryname, brandname, description, image, quantity, price, weight) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_ADD_REQUEST });
        const { data } = await Axios.post('/api/products/addProduct', {
            name, categoryname, brandname, description, image, quantity, price, weight
        });
        if (data) {
            const { data } = await Axios.get('/api/products?page=' + page);
            dispatch({ type: PRODUCT_ADD_SUCCESS, payload: data });
        }

    } catch (error) {
        dispatch({ type: PRODUCT_ADD_FAIL, payload: error.message })
    }
}
const deleteProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST });
        const { data } = await Axios.delete('/api/products/deleteProduct/' + productId);
        if (data) {
            const { data } = await Axios.get('/api/products');
            dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
        }
    } catch (error) {
        dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
    }
}
const updateProduct = (page, productId, name, categoryname, brandname, description, image, quantity, price, weight) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_UPDATE_REQUEST });
        const { data } = await Axios.patch('/api/products/updateProduct/' + productId, {
            name, categoryname, brandname, description, image, quantity, price, weight
        })
        if (data) {
            const { data } = await Axios.get('/api/products?page=' + page);
            dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
        }

    } catch (error) {
        dispatch({ type: PRODUCT_UPDATE_FAIL, payload: error.message });
    }
}
export { listProducts, detailsProduct, deleteProduct, addProduct, updateProduct };