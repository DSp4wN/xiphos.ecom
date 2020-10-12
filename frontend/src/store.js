import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {createStore ,combineReducers} from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';
import { userSigninReducer } from './reducers/userreducer';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState= {cart: {cartItems},userSignin:{userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin:userSigninReducer,
    userRegister:userSigninReducer,
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
export default store;