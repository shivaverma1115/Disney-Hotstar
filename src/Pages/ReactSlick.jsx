import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Slider from "react-slick";
import { Box } from '@chakra-ui/react';
import arr from '../NAV_ITEMS.json'
import CaroueslItems from './CarouselItems'

const ReactSlick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const MOVIES_ITEMS = arr.MOVIES_ITEMS
    return (
        <Box bg={'tomato'}w={'95%'}m={'auto'} >
            <Slider {...settings} >
                {
                    MOVIES_ITEMS.map((ele, i) => {
                        return <CaroueslItems ele={ele}key={i} />
                    })
                }
            </Slider>
        </Box>
    )
}

export default ReactSlick