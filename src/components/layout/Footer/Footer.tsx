import { footerLinks } from '@data/footerItems';

export const Footer = () => {
	return (
		<footer className='absolute  bottom-0 w-screen h-max bg-[rgb(2,5,16)]'>
			<div className='flex items-center justify-center gap-[10px] px-4 py-2'>
				{footerLinks.map((item, index) => (
					<a
						href={`${item.path}`}
						key={index}
						className={`text-white hover:text-gray block px-3 py-2 
            phone:text-xl tablet:text-2xl transition-all`}
					>
						{item.title}
					</a>
				))}
			</div>
			<div className='px-4 py-2 mt-[-20px]'>
				<div className='flex gap-[4px] justify-end mr-2'>
					<div className='font-semibold'>
						<span
							className='bg-clip-text text-transparent bg-gradient-to-r
              from-[#8a2387] via-[#e94057] to-[#f27121]'
						>
							<a href='/'>PlayOn</a>
						</span>
					</div>
					<div className='text-white'>
						<span>Los-Angeles</span>
					</div>
				</div>
			</div>
		</footer>
	);
};
