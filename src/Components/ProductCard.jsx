import React from 'react'
import { useNavigate } from 'react-router-dom'

import { VStack, Text, Button, Image } from '@chakra-ui/react';
import {styled} from "styled-components"

export const ProductCard = ({ id, image, name, price, category }) => {
  const navigate = useNavigate();

  return (

    <DIV >
      <Image src={image} alt={name} width='100%' borderRadius='30%' />
      <VStack spacing={1} lineHeight={2} color={'black'}>
        <Text fontSize='xl' >Product: {name}</Text>
        <Text fontSize='xl'>Price: {price}</Text>
        <Text fontSize='xl'>Category: {category}</Text>
        <Button onClick={() => navigate(`/singleproduct/${id}`)} bgColor={"green"}
        p={4} fontSize='l' m={2} color={'white'}>{name} Details</Button>
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
box-shadow: lightgreen 0px 2px 4px, lightgreen 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

