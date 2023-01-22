import * as CART_CONSTANTS from 'constants/cartConstants';

export const addCartAction = (qty, product) => async (dispatch, getState) => {
	console.log('IN CART ACTION');
	dispatch({
		type: CART_CONSTANTS.ADD_CART_ITEM,
		payload: {
			product_id: product._id,
			product_name: product.name,
			product_price: product.price,
			product_image: product.image,
			product_countInStock: product.product_countInStock,
			qty: qty,
		},
	});

	localStorage.setItem(
		'cart_items',
		JSON.stringify(getState().cart.cart_items)
	);
};
