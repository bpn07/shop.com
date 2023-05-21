import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import Products from '../components/Products'
import { Container, Flex } from '@chakra-ui/react'

const Home = () => {
    return (
        <Container maxW={'container.lg'} mt={'10'}>
            <HomeCarousel />
            <Products />

        </Container>
    )
}

export default Home