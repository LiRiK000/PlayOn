import { Weekly } from '@features/Weekly/Weekly';
import Menu from '@layout/Menu/Menu';
import { Preview } from '@simple/Preview/Preview';
import { Suggest } from '@simple/Suggest/Suggest';

export const Test = () => {
	return (
		<>
			<Menu />
			<Suggest />
			<Weekly />
			<Preview />
		</>
	);
};
