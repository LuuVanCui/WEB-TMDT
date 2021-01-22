import Axios from 'axios';
import {
    BRAND_LIST_REQUEST, BRAND_LIST_SUCCESS, BRAND_LIST_FAIL,
    ADD_BRAND_REQUEST, ADD_BRAND_SUCCESS, ADD_BRAND_FAIL,
    DETAIL_BRAND_REQUEST, DETAIL_BRAND_SUCCESS, DETAIL_BRAND_FAIL,
    UPDATE_BRAND_REQUEST, UPDATE_BRAND_SUCCESS, UPDATE_BRAND_FAIL,
    DELETE_BRAND_REQUEST, DELETE_BRAND_SUCCESS, DELETE_BRAND_FAIL,
} from '../constants/brandConstant';

const getListBrand = () => async (dispatch) => {
    dispatch({ type: BRAND_LIST_REQUEST });
    try {
        const { data } = await Axios.get('/api/brand/getAllBrand');
        dispatch({ type: BRAND_LIST_SUCCESS, payload: data.listBrand });
    } catch (error) {
        dispatch({ type: BRAND_LIST_FAIL, payload: error.response.data.error });
    }
}

const detailBrand = (id) => async (dispatch) => {
    dispatch({ type: DETAIL_BRAND_REQUEST });
    try {
        const { data } = await Axios.get('/api/brand/getBrandByID/' + id);
        console.log(data);
        dispatch({ type: DETAIL_BRAND_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DETAIL_BRAND_FAIL, payload: error.response.data.error });
    }
}

const addBrand = (name, description) => async (dispatch) => {
    dispatch({ type: ADD_BRAND_REQUEST });
    try {
        const { data } = await Axios.post('/api/brand', { name, description });
        dispatch({ type: ADD_BRAND_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ADD_BRAND_FAIL, payload: error.response.data.error });
    }
}

const updateBrand = (id, name, description) => async (dispatch) => {
    dispatch({ type: UPDATE_BRAND_REQUEST });
    try {
        const { data } = await Axios.patch('/api/brand/updateBrand/' + id, { name, description });
        dispatch({ type: UPDATE_BRAND_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_BRAND_FAIL, payload: error.response.data.error });
    }
}

const deleteBrand = (id) => async (dispatch) => {
    dispatch({ type: DELETE_BRAND_REQUEST });
    try {
        const { data } = await Axios.delete('/api/brand/deleteBrand/' + id);
        dispatch({ type: DELETE_BRAND_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_BRAND_FAIL, payload: error.response.data.error });
    }
}

export { getListBrand, addBrand, updateBrand, deleteBrand, detailBrand };