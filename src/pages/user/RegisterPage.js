import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { registerUser } from 'actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import styles from 'styles/user/registerStyles.module.scss';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		password: '',
	});

	const dispatch = useDispatch();
	const userRegister = useSelector((state) => state.userRegister);
	const { error, loading, user } = userRegister;

	const onChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		// console.log(formData);
		const { name, email, password } = formData;
		dispatch(registerUser(name, email, password));
	};

	return (
		<div className={styles.registerContainer}>
			<h1>Register</h1>
			<Container className={styles.formContainer}>
				<Form>
					<Form.Group>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type='text'
							name='name'
							value={formData.name}
							placeholder='Enter Username'
							onChange={onChangeHandler}
						></Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.Label>Email Addresss</Form.Label>
						<Form.Control
							type='email'
							name='email'
							value={formData.email}
							placeholder='Enter Email'
							onChange={onChangeHandler}
						></Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							name='password'
							value={formData.password}
							placeholder='Password'
							onChange={onChangeHandler}
						></Form.Control>
					</Form.Group>

					{error && (
						<Alert
							className={styles.alertContainer}
							variant='danger'
						>
							{error}
						</Alert>
					)}

					<div className={styles.btnContainer}>
						<Link className={styles.link} to='/login'>
							Already have an account
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
				</Form>
			</Container>
		</div>
	);
};

export default RegisterPage;
