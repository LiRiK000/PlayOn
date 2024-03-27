import { useState } from 'react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

const images = [
	'/public/imgWeekly/0.svg',
	'/public/imgWeekly/1.svg',
	'/public/imgWeekly/2.svg',
	'/public/imgWeekly/3.svg',
	'/public/imgWeekly/4.svg',
];

export const Weekly = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((lastIndex) => (lastIndex + 1) % images.length);
	};

	const lastSlide = () => {
		setCurrentIndex((lastIndex) => {
			if (lastIndex === 0) {
				return images.length - 1;
			} else {
				return lastIndex - 1;
			}
		});
	};

	return (
			<div className='w-dvw mt-[10%] items-center justify-center '>
				<div className='flex justify-start ml-[5%] mt-[5%]'>
					<span className='text-white text-[240%] '>Weekly Top</span>
				</div>
				<div className='overflow-x-hidden'>
					<div className='relative m-[5%] mt-[3%]'>
						<div>
							{/* Предыдущий слайд */}
							<div>
								<button
									className='absolute left-1 max-laptop:left-0 top-1/2 -translate-y-1/2 h-[20%] w-[5%] max-laptop:w-[10%] bg-stone-500 from-lime-200 opacity-80 items-center rounded-[20px] z-10 shadow-xl hover:shadow-2xl border border-from-lime-700'
									onClick={lastSlide}
									style={{
										backdropFilter: 'blur(10px)',
										WebkitBackdropFilter: 'blur(2px)',
									}}
								>
									<ArrowBackIcon
										className='text-5xl max-laptop:text-3xl'
										color='beige'
									/>
								</button>
							</div>

							{/* Следующий слайд */}
							<div>
								<button
									className='absolute right-1 max-laptop:right-0 top-1/2 -translate-y-1/2 h-[20%] w-[5%] max-laptop:w-[10%] bg-stone-500 from-lime-200 opacity-80 items-center rounded-[20px] z-10 shadow-xl hover:shadow-2xl border border-from-lime-700'
									onClick={nextSlide}
									style={{
										backdropFilter: 'blur(2px)',
										WebkitBackdropFilter: 'blur(2px)',
									}}
								>
									<ArrowForwardIcon
										className='text-5xl max-laptop:text-3xl'
										color='beige'
									/>
								</button>
							</div>
						</div>
						<div className='flex  justify-center items-center p-5 max-tablet:gap-5 gap-10'>
							{/* Левые картинки */}
							<img
								className={`select-none w-1/6 h-auto cursor-pointer max-laptop:hidden`}
								src={images[(currentIndex - 2 + images.length) % images.length]}
								alt={`Slide ${
									currentIndex === 0 ? images.length - 1 : currentIndex - 1
								}`}
								onClick={() =>
									setCurrentIndex(
										(currentIndex - 1 + images.length) % images.length,
									)
								}
							/>
							<img
								className={`select-none w-1/6 h-auto cursor-pointer max-laptop:w-1/3`}
								src={images[(currentIndex - 1 + images.length) % images.length]}
								alt={`Slide ${
									currentIndex === 0 ? images.length : currentIndex
								}`}
								onClick={() =>
									setCurrentIndex(
										(currentIndex - 1 + images.length) % images.length,
									)
								}
							/>
							{/* Центральная картинка */}
							<img
								className='select-none w-1/6 max-h-auto max-laptop:w-1/3'
								src={images[currentIndex]}
								alt={`Slide ${currentIndex + 1}`}
							/>
							{/* Правые картинки */}
							<img
								className={`select-none w-1/6 h-auto cursor-pointer max-laptop:w-1/3`}
								src={images[(currentIndex + 1) % images.length]}
								alt={`Slide ${(currentIndex + 1) % images.length}`}
								onClick={() =>
									setCurrentIndex((currentIndex + 1) % images.length)
								}
							/>
							<img
								className={`select-none w-1/6 h-auto cursor-pointer max-laptop:hidden`}
								src={images[(currentIndex + 2) % images.length]}
								alt={`Slide ${(currentIndex + 2) % images.length}`}
								onClick={() =>
									setCurrentIndex((currentIndex + 1) % images.length)
								}
							/>
						</div>
					</div>
				</div>
			</div>
	);
};
