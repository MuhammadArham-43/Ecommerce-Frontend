import React from 'react';
import {
	Navbar,
	Container,
	Nav,
	Stack,
	NavDropdown,
	Dropdown,
	DropdownButton,
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from 'styles/navStyles.module.scss';
import { logoutUser } from 'actions/userActions';

const NavbarMenu = () => {
	const dispatch = useDispatch();

	const cartItems = useSelector((state) => state.cart.cart_items);
	const loggedInUser = useSelector((state) => state.userLogin['user']);

	const logoutHandler = () => {
		dispatch(logoutUser());
	};

	return (
		<>
			<header>
				<Container className='headerContainer' fluid>
					{loggedInUser ? (
						<DropdownButton
							align='end'
							title={loggedInUser.name}
							id='NavbarUser'
						>
							<Dropdown.Item href='/profile'>
								View Profile
							</Dropdown.Item>
							<Dropdown.Item onClick={logoutHandler}>
								Logout
							</Dropdown.Item>
						</DropdownButton>
					) : (
						<Link className={styles.link} to='/login'>
							{/* <FontAwesomeIcon
								className={styles.linkIcon}
								icon={faUser}
							></FontAwesomeIcon> */}
							Login
						</Link>
					)}
				</Container>
			</header>
			<Navbar bg='light' expand='lg'>
				<Container>
					<Navbar.Brand>Ecommerce</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse id='navbarScroll'>
						<Nav
							className='me-auto my-2 my-lg-0'
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<Nav.Link href='/'>Home</Nav.Link>
						</Nav>
						<Link className={styles.link} to='/cart'>
							<FontAwesomeIcon
								className={styles.linkIcon}
								icon={faShoppingCart}
							/>
							Cart | {cartItems.length}
						</Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavbarMenu;
