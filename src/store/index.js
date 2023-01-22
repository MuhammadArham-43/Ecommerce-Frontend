import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'reducers';

const cartItems = localStorage.getItem('cart_items')
	? JSON.parse(localStorage.getItem('cart_items'))
	: [];

const user = localStorage.getItem('user')
	? JSON.parse(localStorage.getItem('user'))
	: undefined;

const initialState = {
	cart: { cart_items: cartItems },
	userLogin: { user: user },
};

const middleware = [thunk];

export const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);
