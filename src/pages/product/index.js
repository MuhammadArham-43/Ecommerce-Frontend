import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { getProduct } from 'actions/productActions';

import NavbarMenu from 'components/NavbarMenu';
import { Alert, Button, Container, Spinner } from 'react-bootstrap';
import styles from 'styles/productPage.module.scss';
import globalStyles from 'styles/global.scss';
import { addCartAction } from 'actions/cartActions';

import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
	const dispatch = useDispatch();
	// const router = useRouter();

	const productDetails = useSelector((state) => state.productDetail);
	const { error, loading, product } = productDetails;
	// const { id } = router.query;
	// console.log(useParams());
	const id = useParams()['id'];

	// console.log(id);

	// console.log(product);

	const [orderQty, setOrderQty] = useState(1);
	const [message, setMessage] = useState({
		message: '',
	});

	useEffect(() => {
		id && dispatch(getProduct(id));
	}, [dispatch, id]);

	const addCartHandler = () => {
		if (orderQty <= product.countInStock) {
			dispatch(addCartAction(orderQty, product));
			setMessage({ message: 'Added to Cart', status: 'success' });
		} else {
			setMessage({
				message: 'Unable to Process Order. Product out of stock',
				status: 'error',
			});
		}
	};

	const renderProductRating = () => {
		const row = [1, 2, 3, 4, 5];
		const productRating = product.rating;
		// const productRating = 2;
		return (
			<>
				<div className={styles.ratingContainer}>
					{row.map((x) => {
						return x <= productRating ? (
							<FontAwesomeIcon
								icon={faStar}
								color='gold'
								key={x}
							></FontAwesomeIcon>
						) : (
							<FontAwesomeIcon
								key={x}
								icon={faStar}
							></FontAwesomeIcon>
						);
					})}
				</div>
				{product.numReviews} reviews
			</>
		);
	};

	const incrementOrderQty = () => {
		const inStock = product.countInStock;
		if (orderQty < inStock) {
			setOrderQty((prev) => prev + 1);
		}
	};

	const decrementOrderQty = () => {
		if (orderQty > 1) {
			setOrderQty((prev) => prev - 1);
		}
	};

	return (
		<div>
			<NavbarMenu />
			{loading ? (
				<div className='pageSpinner'>
					<Spinner variant='danger' size='l'></Spinner>
				</div>
			) : (
				<Container className={styles.productContainer}>
					<div className={styles.imageContainer}>
						<img src={product.image}></img>
					</div>
					<div className={styles.productDetails}>
						<div className={styles.info}>
							<div className={styles.productHeader}>
								<h1 className={styles.title}>{product.name}</h1>
							</div>
							{renderProductRating()}
							<p className={styles.price}>$ {product.price}</p>
							<p className={styles.desc}>{product.description}</p>
						</div>

						{message.status && (
							<Alert
								variant={
									message.status == 'error'
										? 'danger'
										: 'primary'
								}
							>
								{message.message}
							</Alert>
						)}
						<div className={styles.cartContainer}>
							{product.countInStock > 0 ? (
								<div className={styles.orderContainer}>
									<div>Quantity</div>
									<div className={styles.btnContainer}>
										<Button
											className={styles.quantityBtn}
											onClick={decrementOrderQty}
											variant='dark'
										>
											{' '}
											-{' '}
										</Button>
										<p>{orderQty}</p>
										<Button
											className={styles.quantityBtn}
											onClick={incrementOrderQty}
											variant='dark'
										>
											{' '}
											+{' '}
										</Button>
									</div>
								</div>
							) : (
								<p>Out of Stock</p>
							)}
							<div className='orderBtnContainer'>
								<Button
									className={styles.orderBtn}
									variant='dark'
									onClick={addCartHandler}
									disabled={product.countInStock == 0}
								>
									Add to Cart
								</Button>
							</div>
						</div>
					</div>
				</Container>
			)}
		</div>
	);
};

export default ProductDetails;
