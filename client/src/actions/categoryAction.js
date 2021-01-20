import Axios from "axios";
import { ADD_CATEGORY_FAIL, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from "../constants/categoryConstants";

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

export { listCategories, addCategory };