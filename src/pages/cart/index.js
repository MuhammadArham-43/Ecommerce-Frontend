import React from 'react';
import NavbarMenu from 'components/NavbarMenu';
import { Button, Container } from 'react-bootstrap';
import styles from 'styles/cart/cartStyles.module.scss';
import { useSelector } from 'react-redux';

const CartPage = () => {
	const cartItems = useSelector((state) => state.cart.cart_items);
	const getTotalPrice = (total, number) => {
		return total + number;
	};

	const orderTotalPrice = cartItems
		.map((item) => item.product_price * item.qty)
		.reduce(getTotalPrice);
	const shippingCost = orderTotalPrice * 0.1;
	const orderTax = orderTotalPrice * 0.05;

	return (
		<>
			<NavbarMenu />
			<div className={styles.cartScreen}>
				<div className={styles.orderSummaryTable}>
					<h1>Your Orders</h1>
					<table className={styles.cartSummaryTable}>
						<tr>
							<th></th>
							<th>Product</th>
							<th>Each</th>
							<th>Qty</th>
							<th>Total Price</th>
						</tr>
						{cartItems.map((item) => (
							<tr>
								<td className={styles.imgContainer}>
									<img src={item.product_image}></img>
								</td>
								<td>
									<div>{item.product_name}</div>
								</td>
								<td>{item.product_price}</td>
								<td>{item.qty}</td>
								<td>{item.qty * item.product_price}</td>
							</tr>
						))}
					</table>
				</div>

				<div className={styles.finalSummary}>
					<h1>Order Summary</h1>
					<div className={styles.paymentDetails}>
						<div className={styles.paymentDetail}>
							<p>Order Total</p>
							<p>$ {Math.round(orderTotalPrice, 2)}</p>
						</div>
						<div className={styles.paymentDetail}>
							<p>Shipping Cost</p>
							<p>$ {Math.round(shippingCost)}</p>
						</div>
						<div className={styles.paymentDetail}>
							<p>Tax</p>
							<p>$ {Math.round(orderTax, 2)}</p>
						</div>
						<div className={styles.paymentDetail}>
							<p>Estimated Total</p>
							<h1>
								${' '}
								{Math.round(
									orderTotalPrice + shippingCost + orderTax
								)}
							</h1>
						</div>
					</div>
					<Button className={styles.checkoutBtn} variant='dark'>
						Proceed to Checkout
					</Button>
				</div>
			</div>
		</>
	);
};

export default CartPage;
