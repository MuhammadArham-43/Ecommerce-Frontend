import React, { useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
	const userToken = localStorage.getItem('user');
	const isLoggedin = userToken !== null;
	console.log(userToken, isLoggedin);

	return isLoggedin ? children : <Navigate to='/login'></Navigate>;
};

export default ProtectedRoute;
