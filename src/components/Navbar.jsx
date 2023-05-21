
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import LoginModal from './LoginModal'

const Navbar = () => {
  return (
        <Box boxShadow={'xl'} bgColor={'white'} position={'sticky'} top={'0'} zIndex={'10'}>
            <Container display={'flex'} maxW={'container.xl'} justifyContent={'space-between'} alignItems={'center'} p={'3'}>
                <Box>
                    <Heading >Shop.com</Heading>
                </Box>
                <Box  display={'flex'} alignItems={'center'}>
                    <Text px={'2'}>Home</Text>
                    <Text px={'2'}>Categories</Text>
                    <Text px={'2'}>Cart</Text>
                    <LoginModal/>
                </Box>
            </Container>
        </Box>
  )
}

export default Navbar