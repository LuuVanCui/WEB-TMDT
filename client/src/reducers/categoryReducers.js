import { ADD_CATEGORY_FAIL, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, CATEGORY_DETAIL_FAIL, CATEGORY_DETAIL_REQUEST, CATEGORY_DETAIL_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, UPDATE_CATEGORY_FAIL, UPDATE_CATEGORY_REQUEST, UPDATE_CATEGORY_SUCCESS } from "../constants/categoryConstants";

const categoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { loading: true };
        case CATEGORY_LIST_SUCCESS:
            return { loading: false, categories: action.payload }
        case CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

const addCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CATEGORY_REQUEST:
            return { loading: true };
        case ADD_CATEGORY_SUCCESS:
            return { loading: false, category: action.payload }
        case ADD_CATEGORY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

const categoryDetailReducer = (state = { category: {} }, action) => {
    switch (action.type) {
        case CATEGORY_DETAIL_REQUEST:
            return { loading: true };
        case CATEGORY_DETAIL_SUCCESS:
            return { loading: false, category: action.payload }
        case CATEGORY_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

const updateCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_CATEGORY_REQUEST:
            return { loading: true };
        case UPDATE_CATEGORY_SUCCESS:
            return { loading: false, category: action.payload }
        case UPDATE_CATEGORY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { categoryListReducer, addCategoryReducer, categoryDetailReducer, updateCategoryReducer };