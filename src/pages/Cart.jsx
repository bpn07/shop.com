import { Button, Card, CardBody, CardFooter, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../store/cartSlice';

const Cart = () => {

    const products = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    const handleRemove = (productId)=>{
        dispatch(removeCart(productId))
    }

  return (
    <Grid  templateColumns='repeat(5, 1fr)' gap={2}>
{
    products.map((product, idx)=>(
        <Card  key={idx} maxW={'sm'}boxShadow={'xl'} bgColor={'white'} pt={'2'} display={'flex'} align={'center'}>
      <CardBody maxW={'200px'} maxH={'300px'} overflow={'hiddden'}>
        <Image src={product.image} objectFit={'contain'}/>
        </CardBody>
        <Stack textAlign={'center'}>
          <Heading size={'md'}>{product.title}</Heading>
          <Text>{product.price}</Text>
        </Stack>
        <CardFooter>
          <Button colorScheme='blue' onClick={()=>handleRemove(product.id)}>Remove</Button>
        </CardFooter>
    </Card>
    ))
}
    </Grid>
  )
}

export default Cart