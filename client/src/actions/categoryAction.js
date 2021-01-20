import Axios from "axios";
import { ADD_CATEGORY_FAIL, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, CATEGORY_DETAIL_FAIL, CATEGORY_DETAIL_REQUEST, CATEGORY_DETAIL_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, UPDATE_CATEGORY_FAIL, UPDATE_CATEGORY_REQUEST, UPDATE_CATEGORY_SUCCESS } from "../constants/categoryConstants";

const listCategories = () => async (dispatch) => {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    try {
        const { data } = await Axios.get('/api/category');
        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CATEGORY_LIST_FAIL, payload: error.message });
    }
}

const addCategory = (name, description) => async (dispatch) => {
    dispatch({ type: ADD_CATEGORY_REQUEST });
    try {
        const { data } = await Axios.post('/api/category', { name, description });
        dispatch({ type: ADD_CATEGORY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ADD_CATEGORY_FAIL, payload: error.message });
    }
}

const categoryDetail = (categoryId) => async (dispatch) => {
    dispatch({ type: CATEGORY_DETAIL_REQUEST });
    try {
        const { data } = await Axios.get('/api/category/' + categoryId);
        dispatch({ type: CATEGORY_DETAIL_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CATEGORY_DETAIL_FAIL, payload: error.message });
    }
}

const updateCategory = (categoryId, name, description) => async (dispatch) => {
    dispatch({ type: UPDATE_CATEGORY_REQUEST });
    try {
        const { data } = await Axios.patch('/api/category/' + categoryId, { name, description });
        dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_CATEGORY_FAIL, payload: error.message });
    }
}

export { listCategories, addCategory, categoryDetail, updateCategory };