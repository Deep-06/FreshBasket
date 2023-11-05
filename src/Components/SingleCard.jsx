import React from 'react'
import { VStack, Text, Button, Image,Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import {styled} from "styled-components"

export const SingleCard = ({ id, image, name, price, category,description }) => {
    const navigate = useNavigate();

  return (
    <DIV>
    <Box width='50%' p={4}>
    <Image src={image} alt={name} width='80%' borderRadius='20%' />
    </Box>
    <VStack width='50%'>
      <Text fontSize="2xl" fontWeight="extrabold" >Product: {name}</Text>
      <Text fontSize="xl" fontWeight="extrabold">Description: {description}</Text>
      <Text fontSize="2xl" fontWeight="extrabold">Price: {price}</Text>
      <Text fontSize="2xl" fontWeight="extrabold">Category: {category}</Text>
      <Button onClick={() => navigate(`/cartpage/${id}`)} bgColor={"green"}
      p={4} fontSize="xl" fontWeight="extrabold" color={'white'} >Add To Cart</Button>
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

@media only screen and (max-width: 800px) {
    display:flex;
    flex-direction:column;
}
`;
