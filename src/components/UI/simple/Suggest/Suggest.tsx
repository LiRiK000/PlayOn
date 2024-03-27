import { Box, Button, SimpleGrid, Image } from '@chakra-ui/react';
import { FC } from 'react';

export const Suggest: FC = () => {
	return (
		<Box
			as='section'
			className='w-svw h-[400px] max-laptop:h-[20rem] max-tablet:h-[600px]'
		>
			<Box className='absolute bg-[#956bff] w-[50%] h-[80%] opacity-20 blur-3xl z-0 rounded-full  ml-[5%]'></Box>
			<Box className='absolute bg-[#48fcff] w-[65%] h-[40%] opacity-20 blur-3xl z-10 rounded-full ml-[40%] '></Box>
			<Box className='absolute bg-[#f16363] w-[60%] h-[50%] opacity-20 blur-3xl z-0 rounded-full ml-[40%] mt-[10%]'></Box>
			<Box
				filter={'brightness(0.7)'}
				marginLeft='10%'
				marginRight='10%'
				marginTop='5%'
				style={{ backdropFilter: 'blur(100px)' }}
				borderRadius='15px'
				className='z-10 overflow-hidden h-[400px] max-laptop:h-[20rem] max-tablet:h-[600px]'
			>
				<SimpleGrid columns={[1, null, 2]} className='z-10'>
					<Box display='flex' flexDirection='column' className='p-[10%]'>
						<Box
							marginRight={5}
							color={'white'}
							className='text-[200%] max-tablet:text-[150%]'
						>
							Suggest what to see in the evening
						</Box>
						<Box
							gap='5%'
							display='flex'
							className='mt-[20%] max-tablet:mt-[5%] max-desktop:mt-[30%]'
						>
							<Button
								p={5}
								_hover={{ bg: 'beige', boxShadow: 'none' }}
								className='from-lime-200 opacity-0.4 rounded-[20px] shadow-xl border border-from-lime-700'
							>
								Mood
							</Button>
							<Button
								p={5}
								_hover={{ bg: 'beige', boxShadow: 'none' }}
								className='from-lime-200 opacity-0.4 rounded-[20px] shadow-xl border border-from-lime-700'
							>
								With somebody
							</Button>
						</Box>
					</Box>
					<Box>
						<SimpleGrid
							column={2}
							display='flex'
							gap={5}
							className='overflow-hidden justify-end'
						>
							<Box display='flex' flexDirection='column' gap={5}>
								<Image
									src='/public/imgSuggest/1.png'
									alt='1'
									className='mt-[-20%] w-56'
								/>
								<Image
									src='/public/imgSuggest/3.png'
									alt='1'
									className='w-56'
								/>
							</Box>
							<Box display='flex' flexDirection='column' gap={5}>
								<Image
									src='/public/imgSuggest/2.png'
									alt='1'
									className='mt-[-30%] w-56'
								/>
								<Image
									src='/public/imgSuggest/4.png'
									alt='1'
									className='w-56'
								/>
							</Box>
						</SimpleGrid>
					</Box>
				</SimpleGrid>
			</Box>
		</Box>
	);
};
