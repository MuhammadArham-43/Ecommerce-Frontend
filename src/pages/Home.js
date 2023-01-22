import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { listProducts } from 'actions/productActions';
import { Link } from 'react-router-dom';
import NavbarMenu from 'components/NavbarMenu';
import ProductCarousel from 'components/products/ProductCarousel';
import { Container, Card, Spinner } from 'react-bootstrap';

import styles from 'styles/dashboard.module.scss';

const Home = () => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);

	const { loading, error, products } = productList;

	console.log(products);

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<>
			<NavbarMenu />
			{loading ? (
				<div className='pageSpinner'>
					<Spinner variant='danger'></Spinner>
				</div>
			) : (
				<>
					<ProductCarousel />
					<Container className='my-5'>
						<h1 className='py-3'>Our Products</h1>
						<div className={styles.productsContainer}>
							{products.map((product) => {
								return (
									<Card key={product._id}>
										<Link to={`product/${product._id}`}>
											<Card.Img
												variant='top'
												src={product.image}
											></Card.Img>
										</Link>
										<Card.Body>
											<Card.Title>
												{product.name}
											</Card.Title>
											<Card.Text>
												{product.description}
											</Card.Text>
										</Card.Body>
									</Card>
								);
							})}
						</div>
					</Container>
				</>
			)}
		</>
	);
};

export default Home;
