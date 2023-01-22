import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import ProductDetails from 'pages/product';
import ProtectedRoute from 'utils/ProtectedRoutes';

import 'styles/global.scss';
import LoginPage from 'pages/user/LoginPage';
import RegisterPage from 'pages/user/RegisterPage';
import CartPage from 'pages/cart';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/login' element={<LoginPage />}></Route>
					<Route path='/register' element={<RegisterPage />}></Route>
					<Route path='/cart' element={<CartPage />}></Route>
					<Route
						path='/product/:id'
						element={
							<ProtectedRoute>
								<ProductDetails />
							</ProtectedRoute>
						}
					></Route>
					<Route path='*' element={<h1>Error 404</h1>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
