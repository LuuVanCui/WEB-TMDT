import { ADD_CATEGORY_FAIL, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from "../constants/categoryConstants";

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

export { categoryListReducer, addCategoryReducer };