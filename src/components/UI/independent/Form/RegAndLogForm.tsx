import { Box, Button, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth';

import styles from './RegAndLogForm.module.css';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@store/useUserStore';

interface IFormProps {
	isRegistration: boolean;
}
/*
 * Component for rendering a registration or login form.
 *
 * @param {IFormProps} isRegistration - flag indicating whether the form is for registration
 * @return {JSX.Element} The form component
 */

export const RegAndLogForm: FC<IFormProps> = ({ isRegistration }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const auth = getAuth();
	const navigate = useNavigate();
	const { setAuth, status } = useUserStore();
	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setPassword(e.target.value);

	const [isError, setIsError] = useState(false);
	const handleClick = () => {
		if (email === '' || password === '') {
			setIsError(true);
		}
		if (!isRegistration) {
			signInWithEmailAndPassword(auth, email, password)
				.then(() => {
					setAuth(email);
					navigate('/');
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorCode, errorMessage);
				});
		} else {
			createUserWithEmailAndPassword(auth, email, password)
				.then(() => {
					setAuth(email);
					navigate('/');
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorCode, errorMessage);
				});
		}
	};
	useEffect(() => {
		if (status) {
			navigate('/');
		}
	});

	return (
		<Box className={styles.container} as='section'>
			<Box className={styles.title}>
				{isRegistration ? 'Create Account' : 'Log In'}
			</Box>

			<FormControl isInvalid={isError}>
				<input
					type='email'
					value={email}
					placeholder='Email'
					onChange={handleEmailChange}
					className={styles['input-style']}
				/>
				{isError && (
					<FormErrorMessage fontSize={'lg'}>
						Email is required.
					</FormErrorMessage>
				)}
			</FormControl>

			<FormControl isInvalid={isError}>
				<input
					type='password'
					value={password}
					placeholder='Password'
					onChange={handlePasswordChange}
					className={styles['input-style']}
				/>
				{isError && (
					<FormErrorMessage fontSize={'lg'}>
						Password is required.
					</FormErrorMessage>
				)}
			</FormControl>

			<Button
				colorScheme='pink'
				fontSize='20px'
				className={styles.button}
				onClick={handleClick}
			>
				{isRegistration ? 'Create Account' : 'Log In'}
			</Button>
		</Box>
	);
};
