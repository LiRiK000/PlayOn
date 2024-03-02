import { Box, Button, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FC, useState } from 'react';

import styles from './RegAndLogForm.module.css';

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
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setUsername(e.target.value);
	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setPassword(e.target.value);

	const [isError, setIsError] = useState(false);
	const handleClick = () => {
		if (username === '' || email === '' || password === '') {
			setIsError(true);
		}
	};

	return (
		<Box className={styles.container} as='section'>
			<Box className={styles.title}>
				{isRegistration ? 'Create Account' : 'Log In'}
			</Box>
			{isRegistration && (
				<FormControl isInvalid={isError}>
					<input
						type='text'
						value={username}
						placeholder='Username'
						onChange={handleUserNameChange}
						className={styles['input-style']}
					/>
					{isError && (
						<FormErrorMessage fontSize={'lg'}>
							Username is required.
						</FormErrorMessage>
					)}
				</FormControl>
			)}

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
