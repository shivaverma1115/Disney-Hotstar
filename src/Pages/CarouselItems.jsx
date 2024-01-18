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
                        {/* {ele.label} */}
                        <Img h={'40vh'} src='https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9666/1649666-v-e994faa3b7bf' />
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
                        minH={'38vh'}
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
