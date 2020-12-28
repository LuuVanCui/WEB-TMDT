import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { userListReducer, userRegisterReducer, userSigninReducer, userConfirmEmailReducer, userFogotPasswordReducer } from './reducers/userReducers';
import { findUserOrderReducer, listOrderForAdmin } from './reducers/orderReducers';
import { createOrderReducer } from './reducers/orderReducers';
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
    listOrderForAdmin: listOrderForAdmin,
    userFogotPassword: userFogotPasswordReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
// redux thunk để xử lý async operation inside action of redux

export default store;

