import { Box, Image, Button, Link, useMediaQuery } from '@chakra-ui/react';
import { Preview } from '@simple/Preview/Preview';

interface IPropsCard {
	image: string;
	title: string;
}

const Card = ({ image, title }: IPropsCard) => {
	const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
	return (
		<Box>
			<Link href='#' style={{ textDecoration: 'none' }}>
				<Box
					borderRadius='10px'
					className='bg-[#555555]'
					gap='10%'
					p={isSmallerThan768 ? '6' : '14'}
					style={{
						backdropFilter: 'blur(200px)',
						boxShadow: '0 0 0 1px white',
					}}
					opacity={0.5}
					_hover={{ opacity: '1' }}
					display='flex'
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
				>
					<Image src={image} alt={title} w={isSmallerThan768 ? '30' : '50'} />
					<span className='text-white'>{title}</span>
				</Box>
			</Link>
		</Box>
	);
};

export const Profile = () => {
	const cards = [
		{ image: '/public/imgProfile/imgIcon/notice.svg', title: 'Notice' },
		{
			image: '/public/imgProfile/imgIcon/downloader.svg',
			title: 'Downloaded',
		},
		{ image: '/public/imgProfile/imgIcon/like.svg', title: 'Like' },
		{ image: '/public/imgProfile/imgIcon/help.svg', title: 'Help' },
		{ image: '/public/imgProfile/imgIcon/settings.svg', title: 'Settings' },
	];

	const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
	const [isSmallerThan420] = useMediaQuery('(max-width: 420px)');
	const [isLargeThan1440] = useMediaQuery('(min-width: 1440px)');

	return (
		<Box w='99dvw' overflowX='hidden'>
			<Box>
				<Box
					padding='5%'
					bg='[#272727]'
					border='2px'
					borderRadius={10}
					margin={5}
					opacity={0.9}
					style={{ backdropFilter: 'blur(200px)' }}
				>
					{/* <Box
						position='absolute'
						w={200}
						borderRadius='full'
						h={200}
						bg='white'
						zIndex={-10}
						className='blur-3xl opacity-90 top-0 right-36'
					></Box>
					<Box className='absolute left-0 top-36 bg-[#6de748] blur-xl w-[200px] h-[200px] rounded-full bg-opacity-50'></Box> */}
					<Box
						display='flex'
						justifyContent={isSmallerThan768 ? 'space-around' : 'space-between'}
						flexDirection={isSmallerThan768 ? 'column' : 'row'}
					>
						<Box
							w={isSmallerThan768 ? '100%' : '50%'}
							h='20dvh'
							marginBottom={isSmallerThan768 ? '10%' : '0'}
							display={isSmallerThan768 ? 'flex' : ''}
							flexDirection='row'
							justifyContent='space-between'
						>
							<Box>
								<Box
									textColor='white'
									fontSize={isSmallerThan420 ? '100%' : '150%'}
									marginBottom='3%'
								>
									<h1>Profile Section</h1>
								</Box>
								<Box
									display='flex'
									position='relative'
									w={isSmallerThan768 ? '80%' : '30%'}
									justifyContent='space-between'
								>
									<Image
										src='/public/imgProfile/12.svg'
										alt='Profile'
										w='100%'
										h='100%'
									/>
									<Box
										position='absolute'
										bottom={-5}
										marginLeft='30%'
										width='20%'
										height='10%'
										p={7}
										bg='rgba(242, 240, 240, 0.5)'
										style={{
											backdropFilter: 'blur(1000px)',
										}}
										border='1px'
										borderColor='white'
										borderRadius='lg'
										opacity={0.9}
										justifyContent='center'
										display='flex'
										flexDirection='column'
										alignItems='center'
										boxShadow='0px 0px 20px 5px rgba(0, 0, 0, 0.3)'
									>
										<Box
											w={10}
											h={10}
											bgGradient={[
												'linear(to-tr, teal.300, yellow.400)',
												'linear(to-t, blue.200, teal.500)',
												'linear(to-b, orange.100, purple.300)',
											]}
											borderRadius={20}
											p={2}
											alignItems='center'
											textAlign='center'
											justifyContent='center'
											display='flex'
											flexDirection='column'
										>
											<Image
												src='/public/imgProfile/Icon.svg'
												alt='Icon'
												display='flex'
												w={10}
												h={10}
											/>
										</Box>
									</Box>
								</Box>
							</Box>
							<Box>
								<Box
									display={isSmallerThan768 ? 'flex' : 'none'}
									flexDirection='column'
								>
									<Box
										h='full'
										display='flex'
										flexDirection='column'
										className='gap-y-32'
									>
										<Box
											textColor='white'
											fontSize={isSmallerThan420 ? '150%' : '200%'}
										>
											<span>Name Test</span>
										</Box>
										<Box>
											<Link href='/edit' style={{ textDecoration: 'none' }}>
												<Button
													w='100%'
													bg='rgba(242, 240, 240, 0.5)'
													borderRadius={10}
													borderColor='white'
													opacity={0.9}
													justifyContent='center'
													display='flex'
													flexDirection='column'
													alignItems='center'
													textColor='white'
													boxShadow='0px 0px 20px 5px rgba(0, 0, 0, 0.3)'
													sx={{
														backdropFilter: 'blur(1000px)',
														'&:hover': {
															bg: 'rgba(232, 240, 220, 0.9)',
														},
														'&:focus': {
															boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.3)',
														},
													}}
												>
													<span>Edit Profile</span>
												</Button>
											</Link>
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
						<Box display='block' w={isSmallerThan768 ? '100%' : '50%'}>
							<Preview />
						</Box>
					</Box>
					<Box
						display={isSmallerThan768 ? 'none' : 'flex'}
						w='full'
						marginTop='7%'
						fontSize={isLargeThan1440 ? '300%' : '200%'}
						textColor='white'
						justifyContent='space-between'
						marginBottom='5%'
					>
						<span>Name Test</span>
						<Link href='/edit' style={{ textDecoration: 'none' }} w='15%'>
							<Button
								bg='rgba(242, 240, 240, 0.5)'
								borderRadius={10}
								borderColor='white'
								opacity={0.9}
								justifyContent='center'
								display='flex'
								textColor='white'
								p={isLargeThan1440 ? '8' : '7'}
								w='100%'
								fontSize={isLargeThan1440 ? '40%' : '30%'}
								flexDirection='column'
								alignItems='center'
								boxShadow='0px 0px 20px 5px rgba(0, 0, 0, 0.3)'
								sx={{
									backdropFilter: 'blur(1000px)',
									'&:hover': {
										bg: 'rgba(232, 240, 220, 0.9)',
									},
									'&:focus': {
										boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.3)',
									},
								}}
							>
								<span>Edit Profile</span>
							</Button>
						</Link>
					</Box>

					<Box
						display='flex'
						justifyContent='flex-start'
						gap='10'
						flexDirection='row'
						flexWrap='wrap'
						marginTop='7%'
					>
						{cards.map((card, index) => (
							<Card key={index} image={card.image} title={card.title} />
						))}
					</Box>

					<Box marginTop='10%' w={isSmallerThan768 ? '' : '30%'}>
						<Link href='#'>
							<Button
								w='full'
								bg='rgba(242, 240, 240, 0.5)'
								boxShadow='0px 0px 20px 5px rgba(0, 0, 0, 0.3)'
								sx={{
									backdropFilter: 'blur(1000px)',
									'&:hover': {
										bg: 'rgba(232, 240, 220, 0.9)',
									},
									'&:focus': {
										boxShadow: '0px 0px 20px 5px rgba(0, 0, 0, 0.3)',
									},
								}}
								textColor='white'
							>
								Leave profile
							</Button>
						</Link>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
