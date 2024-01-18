import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Img, Popover, PopoverContent, PopoverTrigger, Stack } from '@chakra-ui/react'
import arr from '../NAV_ITEMS.json'
import CarouselSubItem from '../Components/carouselSubItem';

const CarouselItems = ({ele}) => {

    return (
        <Box>
            <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                    <Box
                        as="a"
                        href={ele.href ?? '#'}
                        fontSize={'sm'}
                        fontWeight={500}
                        _hover={{
                            textDecoration: 'none',
                        }}>
                        <Img h={'40vh'} src={ele.src} />
                    </Box>
                </PopoverTrigger>

                {ele.children && (
                    <PopoverContent
                        border={0}
                        boxShadow={'xl'}
                        rounded={'xl'}
                        position={'relative'}
                        top={'-41vh'}
                        left={'-3vw'}
                        bg={'wheat'}
                        maxW={'17vw'}
                        maxH={'38vh'}
                        minH={'40vh'}
                        p={1}
                    >
                        <Stack>
                            {ele.children.map((ele,i) => (
                                <CarouselSubItem key={i} {...ele} />
                            ))}
                        </Stack>
                    </PopoverContent>
                )}
            </Popover>
        </Box>
    )
}

export default CarouselItems
