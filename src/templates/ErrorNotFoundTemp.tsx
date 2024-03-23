import { FC } from 'react';
import { Link } from 'react-router-dom';

const ErrorNotFoundTemp: FC = () => {
	return (
		<main className='w-screen h-screen flex justify-center items-center bg-[rgb(27,26,29)]'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-8'>
				<div
					className='flex flex-col justify-center max-w-md gap-x-2'
					data-name='text'
				>
					<h1 className='text-5xl text-white font-semibold mb-4'>
						404. Страница не найдена
					</h1>
					<p className='text-gray text-lg'>
						Возможно, она была перемещена, или вы просто неверно указали адрес
						страницы.
					</p>
				</div>
				<div className='mt-8'>
					<button className='text-xl text-gray hover:text-white transition-all'>
						<Link to='/'>Вернуться</Link>
					</button>
				</div>
			</div>
			<div className='flex justify-center items-center' data-name='image'>
				<video src='/2.mp4' autoPlay loop muted className='w-full'></video>
			</div>
		</main>
	);
};

export default ErrorNotFoundTemp;
