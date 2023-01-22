import * as CART_CONSTANTS from 'constants/cartConstants';

export const cartReducer = (state = { cart_items: [] }, action) => {
	console.log('IN CART REDUCER');
	switch (action.type) {
		case CART_CONSTANTS.ADD_CART_ITEM:
			// console.log('ADD CART REDUCER: ', action.payload);
			// const modifiedCartItems = state.cart_items.map((item) => {
			// 	if (item.product_id === action.payload.product_id) {
			// 		return action.payload;
			// 	} else {
			// 		return item;
			// 	}
			// });
			const itemExists = state.cart_items.find(
				(item) => item.product_id === action.payload.product_id
			);

			if (itemExists) {
				return {
					...state,
					cart_items: state.cart_items.map((item) =>
						item.product_id === action.payload.product_id
							? action.payload
							: item
					),
				};
			} else {
				return {
					...state,
					cart_items: [...state.cart_items, action.payload],
				};
			}

		default:
			return state;
	}
};
