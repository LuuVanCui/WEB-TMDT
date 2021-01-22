import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer, sendMailOrderReducer } from './reducers/cartReducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {
    userListReducer, userRegisterReducer,
    userSigninReducer, userConfirmEmailReducer,
    userFogotPasswordReducer, enterCodeResetPasswordReducer,
    resetPassswordReducer,
    updateUserInfoReducer
} from './reducers/userReducers';
import { findUserOrderReducer, accountReducer, createOrderReducer, OrderDetailReducer, OrderListWaitDeliveryReducer, getOrderByDeliveryStatusReducer } from './reducers/orderReducers';
import { addCategoryReducer, categoryDetailReducer, categoryListReducer, updateCategoryReducer } from './reducers/categoryReducers';
// import { createOder } from './actions/orderAction';
const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
    userSignin: { userInfo },
    cart: { cartItems }
}
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userConfirmEmail: userConfirmEmailReducer,
    userList: userListReducer,
    orderMineList: findUserOrderReducer,
    createOrder: createOrderReducer,
    userFogotPassword: userFogotPasswordReducer,
    enterCodeResetPass: enterCodeResetPasswordReducer,
    resetPass: resetPassswordReducer,
    orderDetail: OrderDetailReducer,
    sendMailOrder: sendMailOrderReducer,
    orderListWaitDelivery: OrderListWaitDeliveryReducer,
    account: accountReducer,
    listCategories: categoryListReducer,
    addCategory: addCategoryReducer,
    updateUserInfo: updateUserInfoReducer,
    categoryDetails: categoryDetailReducer,
    updateCategory: updateCategoryReducer,
    orderByStatusList: getOrderByDeliveryStatusReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
// redux thunk để xử lý async operation inside action of redux

export default store;

