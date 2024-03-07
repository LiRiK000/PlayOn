import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Code } from '@chakra-ui/react';
import { LoginPage } from '@pages/LoginPage';
import { RegistrationPage } from '@pages/RegistrationPage';
import { Test } from '@templates/Test';

export const MyRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<h1 className='text-3xl text-[green]'>
							<Code>
								Hello, go to
								<a href='/test'> /test</a>
							</Code>
						</h1>
					}
				/>
				<Route path='/test' element={<Test />} />
				<Route path='/registration' element={<RegistrationPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/test/*' element={<h1>404 but special for test</h1>} />
				<Route path='/*' element={<h1>404</h1>} />
			</Routes>
		</Router>
	);
};
