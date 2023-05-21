import { Card, Container, Flex,CardBody, Image, Stack, Heading,Text, CardFooter, Button, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts, STATUS} from '../store/productSlice'

const Products = () => {
  const dispatch = useDispatch();
  const {data: products, status}= useSelector((state)=>state.product)

useEffect(()=>{
  dispatch(fetchProducts());
},[])

  return (
    <Container maxW={'container.lg'}>
<Flex flexWrap={'wrap'} justify={'center'} gap={'2'} >
  {
      products.map((product)=>(
      <Card maxW={'xs'} boxShadow={'xl'} bgColor={'white'} pt={'2'} key={product.id} display={'flex'} justify={'center'} align={'center'}>
      <CardBody>
        <Image src={product.image} maxW={'200px'}/>
        </CardBody>
        <Stack textAlign={'center'}>
          <Heading size={'md'}>{product.title}</Heading>
          <Text>{product.price}</Text>
        </Stack>
        <CardFooter>
          <Button colorScheme='blue'>Add to cart</Button>
        </CardFooter>
    </Card>
    ))
  }
 
</Flex>
    </Container>
  )
}

export default Products