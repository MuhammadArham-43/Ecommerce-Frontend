import * as USER_CONSTANTS from 'constants/userConstants';
import axios from 'axios';

const BASE_API_URI = process.env.REACT_APP_BASE_API_URI;

export const loginUser = (email, password) => async (dispatch) => {
	dispatch({ type: USER_CONSTANTS.USER_LOGIN_REQUEST });
	try {
		const { data } = await axios({
			method: 'post',
			url: `${BASE_API_URI}/user/login`,
			data: {
				email,
				password,
			},
		});

		console.log(data);

		dispatch({
			type: USER_CONSTANTS.USER_LOGIN_SUCCESS,
			payload: data,
		});

		localStorage.setItem('user', JSON.stringify(data));
		window.location.href = '/';
	} catch (error) {
		dispatch({
			type: USER_CONSTANTS.USER_LOGIN_FAIL,
			payload: error.message,
		});
	}
};

export const logoutUser = () => async (dispatch) => {
	dispatch({ type: USER_CONSTANTS.USER_LOGOUT });
	localStorage.removeItem('user');
	window.location.href = '/login';
};

export const registerUser = (name, email, password) => async (dispatch) => {
	dispatch({ type: USER_CONSTANTS.USER_REGISTER_REQUEST });
	try {
		const { data } = await axios({
			method: 'post',
			url: `${BASE_API_URI}/user`,
			data: {
				name,
				email,
				password,
			},
		});
		dispatch({ type: USER_CONSTANTS.USER_REGISTER_SUCCESS, payload: data });
		dispatch(loginUser(email, password));
	} catch (error) {
		dispatch({
			type: USER_CONSTANTS.USER_REGISTER_FAIL,
			payload: error.message,
		});
	}
};
