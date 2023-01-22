import { combineReducers } from 'redux';
import { productListReducer, productReducer } from './productReducers';
import { cartReducer } from './cartReducer';
import { userLoginReducer, userRegisterReducer } from './userReducers';

const rootReducer = combineReducers({
	productList: productListReducer,
	productDetail: productReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
});

export default rootReducer;
