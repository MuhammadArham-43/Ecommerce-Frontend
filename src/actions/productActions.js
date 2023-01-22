import * as PRODUCT_CONSTANTS from 'constants/productConstants';
import axios from 'axios';

const BASE_API_URI = process.env.REACT_APP_BASE_API_URI;

export const listProducts = () => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_CONSTANTS.PRODUCT_LIST_REQUEST });

		// const { data } = await axios.get(`${BASE_URI}/products`);
		const { data } = await axios.get(`${BASE_API_URI}/products`);
		dispatch({
			type: PRODUCT_CONSTANTS.PRODUCT_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_CONSTANTS.PRODUCT_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getProduct = (id) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_CONSTANTS.PRODUCT_REQUEST });

		// const { data } = await axios.get(`${BASE_URI}/products/product/${id}`);
		const { data } = await axios.get(
			`${BASE_API_URI}/products/product/${id}`
		);
		dispatch({
			type: PRODUCT_CONSTANTS.PRODUCT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_CONSTANTS.PRODUCT_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
