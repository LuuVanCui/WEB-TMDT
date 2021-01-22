import {
    BRAND_LIST_REQUEST, BRAND_LIST_SUCCESS, BRAND_LIST_FAIL,
    ADD_BRAND_REQUEST, ADD_BRAND_SUCCESS, ADD_BRAND_FAIL,
    DETAIL_BRAND_REQUEST, DETAIL_BRAND_SUCCESS, DETAIL_BRAND_FAIL,
    UPDATE_BRAND_REQUEST, UPDATE_BRAND_SUCCESS, UPDATE_BRAND_FAIL,
    DELETE_BRAND_REQUEST, DELETE_BRAND_SUCCESS, DELETE_BRAND_FAIL,
} from '../constants/brandConstant';

const listBrandReducer = (state = { brands: [] }, action) => {
    switch (action.type) {
        case BRAND_LIST_REQUEST:
            return { loading: true };
        case BRAND_LIST_SUCCESS:
            return { loading: false, brands: action.payload };
        case BRAND_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

const detailBrandReducer = (state = { brand: {} }, action) => {
    switch (action.type) {
        case DETAIL_BRAND_REQUEST:
            return { loading: true };
        case DETAIL_BRAND_SUCCESS:
            return { loading: false, brand: action.payload.brand };
        case DETAIL_BRAND_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

const updateBrandReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_BRAND_REQUEST:
            return { loading: true };
        case UPDATE_BRAND_SUCCESS:
            return { loading: false, updateSuccess: action.payload };
        case UPDATE_BRAND_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

const addBrandReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_BRAND_REQUEST:
            return { loading: true };
        case ADD_BRAND_SUCCESS:
            return { loading: false, addSuccess: action.payload };
        case ADD_BRAND_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
export { listBrandReducer, addBrandReducer, updateBrandReducer, detailBrandReducer };