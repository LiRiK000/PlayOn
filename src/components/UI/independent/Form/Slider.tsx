import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface ISliderProps {
	imagesSlider: string[];
}

const Slider = ({ imagesSlider }: ISliderProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			nextSlide();
		}, 30000);

		return () => clearInterval(intervalId);
		}, [currentIndex]);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === imagesSlider.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? imagesSlider.length - 1 : prevIndex - 1,
		);
	};

	const centerIndex = currentIndex % imagesSlider.length;
	const rightIndex = (currentIndex + 1) % imagesSlider.length;
	const leftIndex =
		(currentIndex + imagesSlider.length - 1) % imagesSlider.length;

	let variant: string | undefined = useBreakpointValue({
		base: 'base',
		sm: 'sm',
		md: 'md',
		lg: 'lg',
		xl: 'xl',
		'2xl': '2xl',
	});
	if (variant === undefined) {
		variant = 'base';
	}

	return (
		<Box
			bg={'#0A031C'}
			display='flex'
			justifyContent='center'
			alignItems='center'
		>
			<Box
				w={variant === 'base' || variant === 'sm' ? '100dvw' : '80dvw'}
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				h='80vh'
			>
				<IconButton
					icon={<ArrowBackIcon />}
					onClick={prevSlide}
					aria-label='Previous slide'
					size={variant === 'base' || variant === 'sm' ? 'sm' : 'lg'}
				/>
				<Box h='80vh' w='99vw' position='relative' overflow='hidden'>
					<Box
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							position: 'absolute',
							left: '50%',
							top: '50%',
							transform: 'translate(-50%, -50%)',
							boxShadow: `0 0 50px ${
								centerIndex === currentIndex ? 'white' : 'transparent'
							}`,
							width: '15dvw',
							borderRadius: '10px',
							overflow: 'hidden',
						}}
					>
						<img
							src={imagesSlider[centerIndex]}
							alt={`Slide ${centerIndex + 1}`}
							width='100%'
							height='100%'
							style={{ objectFit: 'cover' }}
						/>
					</Box>
					<Box
						position='absolute'
						right={variant === 'base' || variant === 'sm' ? '2dvh' : '5dvh'}
						top='50%'
						transform='translateY(-50%)'
						width='10vw'
						height='15vw'
						boxShadow={`0 0 20px ${
							rightIndex === currentIndex ? 'white' : 'transparent'
						}`}
					>
						<img
							src={imagesSlider[rightIndex]}
							alt={`Slide ${rightIndex + 1}`}
							width='100%'
							height='100%'
							style={{ objectFit: 'cover' }}
						/>
					</Box>
					<Box
						position='absolute'
						left={variant === 'base' || variant === 'sm' ? '2dvh' : '5dvh'}
						top='50%'
						transform='translateY(-50%)'
						width='10vw'
						height='15vw'
						boxShadow={`0 0 20px ${
							leftIndex === currentIndex ? 'white' : 'transparent'
						}`}
					>
						<img
							src={imagesSlider[leftIndex]}
							alt={`Slide ${leftIndex + 1}`}
							width='100%'
							height='100%'
							style={{ objectFit: 'cover' }}
						/>
					</Box>
				</Box>
				<IconButton
					icon={<ArrowForwardIcon />}
					onClick={nextSlide}
					aria-label='Next slide'
					size={variant === 'base' || variant === 'sm' ? 'sm' : 'lg'}
				/>
			</Box>
		</Box>
	);
};
export default Slider;
