import { Footer } from '@layout/Footer/Footer';
import Menu from '@layout/Menu/Menu';
import Slider from '@independent/Form/Slider';

export const Test = () => {
	const images = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png'];
	return (
		<main className='overflow-x-hidden min-h-screen bg-[#0A031C]'>
			<Menu />
			<Slider
				imagesSlider={[
					'/Slider1.webp',
					'/Slider2.webp',
					'/Slider3.webp',
					'/Slider4.webp',
					'/Slider5.webp',
				]}
			/>
			<Footer />
		</main>
	);
};
