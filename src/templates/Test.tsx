import Menu from '@layout/Menu/Menu';
import { ResemblingSection as Resembling } from '@independent/Resembling/Resembling';

export const Test = () => {
	const images = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png'];
	return (
		<section className=' tablet:mx-[50px] phone:mx-[11px]'>
			<Menu />
			<Resembling images={images} />
		</section>
	);
};
