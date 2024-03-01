import { FaBars, FaTimes } from 'react-icons/fa';

import { useState } from 'react';

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className='relative bg-[rgba(2,5,16,0.9)]'>
			<div className='max-w-7xl mx-auto px-4 phone:px-6'>
				<div
					className='flex justify-between items-center py-4 
				tablet:justify-start tablet:space-x-10'
				>
					<div className='flex justify-start items-center'>
						<a
							href='#'
							className='text-white font-semibold font-heading text-xl'
						>
							PlayOn
						</a>
						<div className='hidden tablet:flex tablet:items-center py-2'>
							<a href='#' className='text-white hover:text-gray px-4 py-2'>
								Home
							</a>
							<a href='#' className='text-white hover:text-gray px-4 py-2'>
								Movies
							</a>
							<a href='#' className='text-white hover:text-gray px-4 py-2'>
								Series
							</a>
							<a href='#' className='text-white hover:text-gray px-4 py-2'>
								Top
							</a>
						</div>
					</div>
					<div className='flex items-center'>
						<div className='hidden tablet:flex items-center justify-end flex-1'>
							Дщд
						</div>
						<div className='-mr-2 -my-2 tablet:hidden'>
							<button
								type='button'
								onClick={toggleMenu}
								className='text-white hover:text-gray focus:outline-none'
								aria-expanded='false'
							>
								{isOpen ? <FaTimes /> : <FaBars />}
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className={`${isOpen ? 'block' : 'hidden'} tablet:hidden`}>
				<div className='px-2 pt-2 pb-3 space-y-1 phone:px-3'>
					<a href='#' className='text-white hover:text-gray block px-3 py-2'>
						Home
					</a>
					<a href='#' className='text-white hover:text-gray block px-3 py-2'>
						About
					</a>
					<a href='#' className='text-white hover:text-gray block px-3 py-2'>
						Services
					</a>
					<a href='#' className='text-white hover:text-gray block px-3 py-2'>
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Menu;
