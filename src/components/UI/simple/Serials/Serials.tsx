import { Box, Button, Image, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface MyComponentProps {
	images2: string[];
	title: string[];
}

export const Serials: React.FC<MyComponentProps> = ({ images2, title }) => {
	return (
		<Box bg='rgb(2,5,16)' p='14px'>
			<Box
				color='white'
				fontSize='25px' //2xl
				p='14px'
			>
				{title}
			</Box>

			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				flexWrap='wrap'
			>
				<Box display='flex' flex='wrap'>
					{images2.map((image, index) => (
						<a key={index} href={'#'} target='_blank' rel='noreferrer'>
							<Box display='grid' p='20px' w='100%'>
								<Image
									src={image}
									alt='title'
									height='100%'
									borderRadius='13px'
								/>
							</Box>
						</a>
					))}
					<Box display='flex' minWidth='max-content' alignItems='center'>
						<Button
							rightIcon={<Icon as={FaArrowRight} />}
							display='flex'
							alignItems='center'
							justifyContent='center'
							bgColor='grey'
							bgPosition='center'
							bgRepeat='no-repeat'
							mb={2}
							mx='2dvw'
							maxW='2dvw'
							_hover={{
								transform: 'scale(1.05)',
								transition: 'transform 0.2s',
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Serials;
