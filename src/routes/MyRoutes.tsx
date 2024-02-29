import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { LoginPage } from '@pages/LoginPage';
import { RegistrationPage } from '@pages/RegistrationPage';

export const MyRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<RegistrationPage />} />
				<Route path='/regostration' element={<RegistrationPage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</Router>
	);
};
