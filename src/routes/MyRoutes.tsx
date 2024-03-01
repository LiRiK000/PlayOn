import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { LoginPage } from '@pages/LoginPage';
import { RegistrationPage } from '@pages/RegistrationPage';
import { Test } from '@templates/Test';

export const MyRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Test />} />
				<Route path='/regostration' element={<RegistrationPage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</Router>
	);
};
