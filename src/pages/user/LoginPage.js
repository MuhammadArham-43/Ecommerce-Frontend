import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { loginUser } from 'actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

import styles from 'styles/user/registerStyles.module.scss';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, user } = userLogin;

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = () => {
		console.log(formData);
		dispatch(loginUser(formData.email, formData.password));
	};

	return (
		<div className={styles.registerContainer}>
			<h1>Login</h1>
			<Container variant='dark' className={styles.formContainer}>
				<Form.Group>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter Email'
						value={formData.email}
						name='email'
						onChange={onChangeHandler}
					></Form.Control>
				</Form.Group>
				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						name='password'
						value={formData.password}
						onChange={onChangeHandler}
					></Form.Control>
				</Form.Group>
				{error && (
					<Alert className={styles.alertContainer} variant='danger'>
						{error}
					</Alert>
				)}
				<div className={styles.btnContainer}>
					<Link className={styles.link} to='/register'>
						Create New Account
					</Link>
					<Button
						variant='dark'
						type='submit'
						onClick={onSubmitHandler}
					>
						{loading ? (
							<Spinner
								animation='border'
								size='sm'
								role='status'
								aria-hidden='true'
							></Spinner>
						) : (
							'Submit'
						)}
					</Button>
				</div>
			</Container>
		</div>
	);
};

export default LoginPage;
