import * as PRODUCT_CONSTANTS from 'constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case PRODUCT_CONSTANTS.PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] };
		case PRODUCT_CONSTANTS.PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload };
		case PRODUCT_CONSTANTS.PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const productReducer = (
	state = { product: { reviews: [] } },
	action
) => {
	switch (action.type) {
		case PRODUCT_CONSTANTS.PRODUCT_REQUEST:
			return { loading: true, product: { ...state } };
		case PRODUCT_CONSTANTS.PRODUCT_SUCCESS:
			return { loading: false, product: action.payload };
		case PRODUCT_CONSTANTS.PRODUCT_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
