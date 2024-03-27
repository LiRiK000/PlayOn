import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Button } from '@chakra-ui/react';
import { LoginPage } from '@pages/LoginPage';
import { RegistrationPage } from '@pages/RegistrationPage';
import { Test } from '@templates/Test';
import { ProfilePage } from '@pages/ProfilePage';

export const MyRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<div className='flex justify-center items-center w-full h-screen'>
							<a href='/test'>
								<Button className='p-10 bg-zinc-800 hover:bg-black'>
									<span className='text-xl'>go to test</span>
								</Button>
							</a>
						</div>
					}
				/>
				<Route path='/regostration' element={<RegistrationPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/test' element={<Test />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='/test/*' element={<h1>404 but special for test</h1>} />
				<Route path='/*' element={<h1>404</h1>} />
			</Routes>
		</Router>
	);
};
