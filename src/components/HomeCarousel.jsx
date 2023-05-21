import { Container, Image } from '@chakra-ui/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import React, { useEffect, useState } from 'react'

const HomeCarousel = () => {
    // const [pictures, setPictures] = useState([]);
    // useEffect(() => {
    //     const fetchPictures = async () => {
    //         const res = await fetch('https://fakestoreapi.com/products')
    //         const data = await res.json();
    //         console.log(data)
    //         setPictures(data)
    //     }
    //     fetchPictures()
    // }, [])
    return (
        <Container maxW={'container.lg'}  maxH={'64'} overflow={'hidden'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Image src='https://woocommerce.com/wp-content/uploads/2022/02/big-banner.png?w=864'  w={'100%'}/>
        </Container>
    )
}

export default HomeCarousel