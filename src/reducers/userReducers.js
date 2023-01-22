import * as USER_CONSTANTS from 'constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_CONSTANTS.USER_LOGIN_REQUEST:
			return { loading: true };
		case USER_CONSTANTS.USER_LOGIN_SUCCESS:
			return { loading: false, user: action.payload };
		case USER_CONSTANTS.USER_LOGIN_FAIL:
			return { loading: false, error: action.payload };
		case USER_CONSTANTS.USER_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_CONSTANTS.USER_REGISTER_REQUEST:
			return { loading: true };
		case USER_CONSTANTS.USER_REGISTER_SUCCESS:
			return { loading: false, user: action.payload };
		case USER_CONSTANTS.USER_REGISTER_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
