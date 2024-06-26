import React from 'react'
import { VStack, Text, Button, Image,Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import {styled} from "styled-components"
import { addTocart } from '../Redux/Cart/action';
import { useDispatch } from 'react-redux';

export const SingleCard = ({ id, image, name, price, category,description }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
   // const { id } = useParams();

    const handleCart=()=>{
      dispatch(addTocart(id));
      navigate('/cart')
    }

  return (
    <DIV>
    <Box  width={{ base: '100%', md: '80%', lg: '60%' }}
      p={{ base: 2, md: 4, lg: 6 }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
    <Image src={image} alt={name} width='80%' borderRadius='20%' />
    </Box>
    <VStack width={{ base: '100%', md: '80%', lg: '60%' }} p={{ base: 4, md: 4, lg: 6 }} textAlign="left" alignItems={'left'}>
      <Text fontSize="2xl"  fontWeight="bold" >Product: {name}</Text>
      <Text fontSize="xl" fontWeight="bold">Description: {description}</Text>
      <Text fontSize="2xl" fontWeight="bold">Price: {price}</Text>
      <Text fontSize="2xl" fontWeight="bold">Category: {category}</Text>
      <Button onClick={handleCart} bgColor={"green"} width='50%'
      p={4} fontSize="l" fontWeight="bold" color={'white'} >Add To Cart</Button>
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
border-radius:5%;
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
