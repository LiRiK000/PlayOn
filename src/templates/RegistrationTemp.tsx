import { RegAndLogForm } from '@independent/Form/RegAndLogForm';

export const RegistrationTemp = () => {
	return (
		// TODO optimize background image
		<section
			className='flex justify-center items-center
        w-screen h-screen bg-center bg-cover'
			style={{ backgroundImage: 'url("LogRegBg.png")' }}
		>
			<RegAndLogForm isRegistration />
		</section>
	);
};
