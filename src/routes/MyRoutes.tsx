import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Code } from '@chakra-ui/react';
import { LoginPage } from '@pages/LoginPage';
import { RegistrationPage } from '@pages/RegistrationPage';
import { Test } from '@templates/Test';
import { useUserStore } from '@store/useUserStore';

export const MyRoutes = () => {
	const { logOut, status } = useUserStore();
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<h1 className='text-3xl text-[green]'>
								<Code>
									Hello, go to
									<a href='/test'> /test</a>
								</Code>
							</h1>
							{status && (
								<button
									className='text-3xl text-[red] bg-[#fff] p-4 ml-2 mt-8 rounded-lg'
									onClick={() => {
										logOut();
										window.location.reload();
									}}
								>
									Log out
								</button>
							)}
						</>
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
