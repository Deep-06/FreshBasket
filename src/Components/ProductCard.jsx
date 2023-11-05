import React from 'react'
import { useNavigate } from 'react-router-dom'
import { VStack, Text, Button, Image } from '@chakra-ui/react';
import {styled} from "styled-components"

export const ProductCard = ({ id, image, name, price, category }) => {
  const navigate = useNavigate();

  return (
    <DIV >
      <Image src={image} alt={name} width='100%' borderRadius='10%' />
      <VStack spacing={1} lineHeight={0.5}>
        <Text fontsize='xl' >Product: {name}</Text>
        <Text fontsize='xl'>Price: {price}</Text>
        <Text fontsize='xl'>Category: {category}</Text>
        <Button onClick={() => navigate(`/singleproduct/${id}`)} bgColor={"green"}
        p={8} fontsize='xl' color={'white'}>{name} Details</Button>
      </VStack>
    </DIV>

  )
}

const DIV = styled.div`
text-align:center;
align-items:center;
padding:10px;
background-color:whitesmoke;
border:2px solid grey;
border-radius:10%;
`;