import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { VStack, Text, Button, Image, HStack } from '@chakra-ui/react';
import { styled } from "styled-components";
import { ADD_TO_CART, INCREMENT_QTY, DECREMENT_QTY } from "../Redux/Cart/actionTypes";

export const ProductCard = ({ id, image, name, price, category }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.cartReducer?.cart || []);
  const cartItem = cart.find((c) => c.id === id);

  const handleAdd = () => {
    dispatch({ type: ADD_TO_CART, payload: { id, image, name, price } });
  };
  const handleInc = () => dispatch({ type: INCREMENT_QTY, payload: id });
  const handleDec = () => dispatch({ type: DECREMENT_QTY, payload: id });

  return (

    <DIV >
      <Image src={image} alt={name} width='100%' borderRadius='30%' />
      <VStack spacing={1} lineHeight={2} color={'black'}>
        <Text fontSize='xl' >Product: {name}</Text>
        <Text fontSize='xl'>Price: {price}</Text>
        <Text fontSize='xl'>Category: {category}</Text>
        <HStack>
          <Button onClick={() => navigate(`/singleproduct/${id}`)} bgColor={"green"}
            p={4} fontSize='l' m={2} color={'white'}>More Details
          </Button>
          {cartItem ? (
            <HStack justify="center" spacing={3}>
              <Button fontSize="l" onClick={handleDec} bgColor={"green"} color={'white'}>-</Button>
              <Text>{cartItem.quantity || 1}</Text>
              <Button fontSize="l" onClick={handleInc} bgColor={"green"} color={'white'}>+</Button>
            </HStack>
          ) : (
            <Button onClick={handleAdd} bgColor={"green"}
              p={4} fontSize="l" color={'white'} >Add To Cart
            </Button>
          )}
        </HStack>

      </VStack>
    </DIV>


  )
}

const DIV = styled.div`
text-align:center;
align-items:center;
padding:10px;
background-color:whitesmoke;
border:1px solid black;
border-radius:2%;
box-shadow: lightgreen 0px 2px 4px, lightgreen 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

