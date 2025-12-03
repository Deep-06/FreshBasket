import React from 'react'
import { VStack, Text, Button, Image, Box, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import { styled } from "styled-components"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCartItem, removeFromCart } from "../Redux/Cart/action";

export const SingleCard = ({ id, image, name, price, category, description }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.authReducer?.user);
  const cart = useSelector((store) => store.cartReducer?.cart || []);
  const cartItem = cart.find((c) => c.id === id);

  const handleAdd = () => {
    if (!user) return navigate("/login");
    dispatch(addToCart(user.id, { id, image, name, price }));
  };
  const handleInc = () => dispatch(updateCartItem(user.id, id, (cartItem.quantity || 1) + 1));
  const handleDec = () => dispatch(updateCartItem(user.id, id, Math.max(1, (cartItem.quantity || 1) - 1)));

  return (
    <DIV>
      <Box width={{ base: '100%', md: '80%', lg: '60%' }}
        p={{ base: 2, md: 4, lg: 6 }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Image src={image} alt={name} width='80%' borderRadius='20%' />
      </Box>
      <VStack width={{ base: '100%', md: '80%', lg: '60%' }} p={{ base: 4, md: 4, lg: 6 }} textAlign="left" alignItems={'left'}>
        <Text fontSize="2xl" fontWeight="bold" >Product: {name}</Text>
        <Text fontSize="xl" fontWeight="bold">Description: {description}</Text>
        <Text fontSize="2xl" fontWeight="bold">Price: {price}</Text>
        <Text fontSize="2xl" fontWeight="bold">Category: {category}</Text>
        <HStack>
          <Button onClick={() => navigate('/products')} bgColor={"green"} width='30%'
            p={4} fontSize='l' m={2} color={'white'}>Go Back
          </Button>
          {cartItem ? (
            <HStack justify="left" spacing={3} width='50%'>
              <Button fontSize="l" onClick={handleDec} bgColor={"green"} color={'white'}>-</Button>
              <Text>{cartItem.quantity || 1}</Text>
              <Button fontSize="l" onClick={handleInc} bgColor={"green"} color={'white'}>+</Button>
            </HStack>
          ) : (
            <Button onClick={handleAdd} bgColor={"green"} width='40%'
              p={4} fontSize="l" color={'white'} >Add To Cart
            </Button>
          )}
        </HStack>
      </VStack>
    </DIV>
  )
}

const DIV = styled.div`
display:flex;
text-align:center;
align-items:center;
padding:10px;
background-color:whitesmoke;
border:2px solid grey;
border-radius:10px;
margin:20px;
margin-left:150px;
margin-right:150px;
box-shadow: lightgreen 0px 10px 20px, lightgreen 0px 6px 6px;
box-shadow: lightgreen 0px 30px 90px;

@media only screen and (max-width: 700px) {
    display:flex;
    flex-direction:column;
    margin-left:50px;
margin-right:50px;
}
`;
