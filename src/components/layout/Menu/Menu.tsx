import { FaBars, FaRegBell, FaTimes, FaUserCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import { menuItems } from '@data/menuItems';
import styles from './Menu.module.css';

/*
 * This is the menu component
 *
 * @return {JSX.Element} The header component representing the menu.
 */

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<header className={styles.menuContainer}>
			<div className={`mx-8 px-4 tablet:px-6`}>
				<div
					className={`flex justify-between items-center py-4 tablet:justify-start ${styles.menuInner}`}
				>
					<div className='flex items-center'>
						<div className={`relative ${styles.logo}`}>
							<a
								href='/'
								className={`text-white font-semibold font-heading text-xl ${styles.logoText}`}
							>
								<span className={` ${styles.gradientText}`}>PlayOn</span>
							</a>
						</div>
						<div className='hidden tablet:flex items-center py-2'>
							{menuItems.map((item, index) => (
								<a
									href={`${item.path}`}
									key={index}
									className={`text-white hover:text-gray px-4 py-2 ${styles.menuLink}`}
								>
									{item.title}
								</a>
							))}
						</div>
					</div>
					{isMobile ? (
						<div className='-mr-2 -my-2 tablet:hidden'>
							<button
								type='button'
								onClick={toggleMenu}
								className={`text-white hover:text-gray focus:outline-none ${styles.menuToggle}`}
								aria-expanded={isOpen}
								aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
							>
								{isOpen ? <FaTimes /> : <FaBars />}
							</button>
						</div>
					) : (
						<div className='flex items-center ml-auto'>
							<button
								className={`text-white hover:text-gray block px-3 py-2 ${styles.menuLink}`}
							>
								<a href='/profile'>
									<FaUserCircle className={styles.icon} />
								</a>
							</button>
							<button
								className={`text-white hover:text-gray block px-3 py-2 ${styles.menuLink}`}
							>
								<FaRegBell className={styles.icon} />
							</button>
						</div>
					)}
				</div>
			</div>
			<div className={`tablet:hidden ${styles.mobileMenuContainer}`}>
				{isOpen && (
					<div
						className={`px-2 pt-2 pb-3 space-y-1 phone:px-3 ${styles.mobileMenu}`}
					>
						{menuItems.map((item, index) => (
							<a
								href={`${item.path}`}
								key={index}
								className={`text-white hover:text-gray block px-3 py-2 ${styles.menuLink}`}
							>
								{item.title}
							</a>
						))}
						<div className='flex flex-row justify-end'>
							<button
								className={`text-white hover:text-gray block px-3 py-2 ${styles.menuLink}`}
							>
								<FaUserCircle className={styles.icon} />
							</button>
							<button
								className={`text-white hover:text-gray block px-3 py-2 ${styles.menuLink}`}
							>
								<FaRegBell className={styles.icon} />
							</button>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Menu;
