import React from 'react'
import { useNavigate } from 'react-router-dom'
import { VStack, HStack, Text, Button, Image } from '@chakra-ui/react';
export const ProductCard = ({ id, image, name, price, category }) => {
  const navigate = useNavigate();

  return (
    <HStack >
      <Image src={image} alt={name} width='100%' />
      <VStack >
        <Text fontsize='xl'>Product: {name}</Text>
        <Text fontsize='xl'>Price: {price}</Text>
        <Text fontsize='xl'>Category: {category}</Text>
        <Button onClick={() => navigate(`/singleproduct/${id}`)}>{name} Details</Button>
      </VStack>
    </HStack>

  )
}

//hgbjhbhjbj