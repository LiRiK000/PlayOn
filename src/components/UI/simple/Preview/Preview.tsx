import { Box, Image } from '@chakra-ui/react';

export const Preview = () => {
	return (
		<Box className='overflow-x-hidden m-[5%] flex gap-x-2 max-tablet:gap-x-2 items-center justify-center'>
			<Box>
				<Image
					src='/public/imgPreview/1.svg'
					alt='1'
					className='mt-[1.7%] w-full'
				/>
			</Box>
			<Box>
				<Image src='/public/imgPreview/2.svg' alt='2' className='w-full' />
			</Box>
			<Box>
				<Image src='/public/imgPreview/3.svg' alt='3' className='w-full' />
			</Box>
		</Box>
	);
};
