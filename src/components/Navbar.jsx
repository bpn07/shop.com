
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import LoginModal from './LoginModal'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const items = useSelector((state)=> state.cart)
  return (
        <Box boxShadow={'xl'} bgColor={'white'} position={'sticky'} top={'0'} zIndex={'10'}>
            <Container display={'flex'} maxW={'container.xl'} justifyContent={'space-between'} alignItems={'center'} p={'3'}>
                <Box>
                    <Heading color={'#2B6CB0'} >Shop.com</Heading>
                </Box>
                <Box  display={'flex'} alignItems={'center'}>
                <Link to={'/'}><Text px={'2'}>Home</Text></Link> 
                <Link to={'/categories'}><Text px={'2'}>Categories</Text></Link> 
                <Link to={'/cart'}><Text px={'2'}>Cart: {items.length} </Text></Link> 
                    <LoginModal/>
                </Box>
            </Container>
        </Box>
  )
}

export default Navbar