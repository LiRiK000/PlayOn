import { useState } from 'react';
import { Box, Button, Flex, Text, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

const Movies = ({ Movies_images }: { Movies_images: string[] }) => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 3;

    const handleNext = () => {
        if (startIndex + 1 < Movies_images.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const ButtonSize = {
        base: '1px',
        sm: '10px',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
        '2xl': '4xl',
    };

    let variant: string | undefined = useBreakpointValue({ base: "base", sm: "sm", md: "md", lg: "lg", xl: 'xl', '2xl': '2xl' });
    if (variant === undefined) {
        variant = "base";
    }
    
    return (
        <Box bgColor="#0A031C" p="1rem" display="flex" flexDirection="column" alignItems="center">
            <Flex justifyContent="left" alignItems="left" w="80dvw">
                <Text color="white" mb="1rem" fontSize={variant === 'base' || variant === 'sm' ? '1rem' : '2rem'}>Movies</Text>
            </Flex>
            <Box w="80dvw" position="relative" overflow="hidden" pl="2rem">
                <Flex
                    flexWrap="nowrap"
                    alignItems="center"
                    style={{
                        transition: 'transform 0.5s ease',
                        transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)`
                    }}
                >
                    {Movies_images.map((image, index) => (
                        <Box key={index} flex={`0 0 ${75 / itemsPerPage}%`} maxHeight={'32dvh'}
                             style={{ transform: `translateX(${index * (100 / itemsPerPage)}%)` }}>
                            <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                    ))}
                </Flex>
                <IconButton
                    colorScheme="gray"
                    aria-label="Previous"
                    icon={<ArrowBackIcon />}
                    position="absolute"
                    top="50%"
                    left="1rem"
                    transform="translateY(-50%)"
                    onClick={handlePrev}
                    display={startIndex > 0 ? 'block' : 'none'}
                    p={ButtonSize[variant as keyof typeof ButtonSize]}
                />
                <IconButton
                    colorScheme="gray"
                    aria-label="Next"
                    icon={<ArrowForwardIcon />}
                    position="absolute"
                    top="50%"
                    right="1rem"
                    transform="translateY(-50%)"
                    onClick={handleNext}
                    display={startIndex + itemsPerPage < Movies_images.length ? 'block' : 'none'}
                    p={ButtonSize[variant as keyof typeof ButtonSize]}
                />
                {startIndex + itemsPerPage >= Movies_images.length && (
                <Button colorScheme="gray" top={'50%'} mt="1rem" position="absolute"  right={variant === 'base' || variant === 'sm' ? '0' : '4rem'} p={ButtonSize[variant as keyof typeof ButtonSize]} transform="translateY(-50%)">Show More</Button>
            )}
            </Box>
        </Box>
    );
};

export default Movies;
