import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { userSigninReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON('cartItems') || [];


const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
    cart: { cartItems }
}
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
// redux thunk để xử lý async operation inside action of redux

export default store;

