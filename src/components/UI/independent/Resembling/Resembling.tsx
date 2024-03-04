import React from 'react';

interface IResemblingProps {
	images: string[];
}

export const ResemblingSection: React.FC<IResemblingProps> = ({ images }) => {
	return (
		<section
			className='w-full bg-[rgb(2,5,16)] rounded-xl
      backdrop-blur-[30px] p-8 max-laptop:overflow-x-scroll'
		>
			<div
				className='hidden laptop:block
        text-white font-semibold text-2xl text-start mb-4'
			>
				Resembling
			</div>
			<div
				className='flex gap-8 
        phone:w-[1000px] laptop:w-[100%] desktop:w-[2000px]'
			>
				{images.map((image, index) => (
					<a
						href={'#'}
						key={index}
						target='_blank'
						rel='noreferrer'
						className=''
					>
						<img key={index} src={image} alt='Resembling' />
					</a>
				))}
			</div>
		</section>
	);
};
