import { Footer } from '@layout/Footer/Footer';
import Menu from '@layout/Menu/Menu';
import { ResemblingSection as Resembling } from '@independent/Resembling/Resembling';
import Serials from '@simple/Serials/Serials';

export const Test = () => {
	const images = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png'];
	const images2 = [
		'/photo_2024-03-12_10-26-54.webp',
		'/photo_2024-03-12_10-28-08.webp',
		'/photo_2024-03-12_10-28-17.webp',
		'/photo_2024-03-12_10-28-25.webp',
		'/photo_2024-03-12_10-28-30.webp',
		'/photo_2024-03-12_10-29-02.webp',
		'/photo_2024-03-12_10-28-17.webp',
	];
	const title = [
		'Serials'
	];

	return (
		<>
			<section className='tablet:mx-[50px] phone:mx-[11px]'>
				<Menu />
				<Resembling images={images} />
			</section>
			<section className='tablet:mx-[50px] phone:mx-[11px]'>
				<Serials images2={images2} title={title} />
			</section>
			<Footer />
		</>
	);
};