import React from 'react';
import { Carousel } from 'react-bootstrap';

import styles from 'styles/dashboard.module.scss';

import { useSelector } from 'react-redux';

const ProductCarousel = () => {
	const productList = useSelector((state) => state.productList);
	const { products } = productList;

	return (
		<div>
			<Carousel variant='dark' className={styles.carouselContainer}>
				{products.map((product) => (
					<Carousel.Item
						className={styles.carouselItem}
						interval={1000}
						key={product._id}
					>
						<img
							className='d-block w-100 h-100'
							src={product.image}
						/>
						<Carousel.Caption>
							<h3>{product.name}</h3>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};

export default ProductCarousel;
