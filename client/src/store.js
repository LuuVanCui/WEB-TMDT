import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

import { userSigninReducer } from './reducers/user.reducer';

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
    userSignin: { userInfo }
};

const reducer = userSigninReducer;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;