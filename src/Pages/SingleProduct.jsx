import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SingleCard } from '../Components/SingleCard';
import { Text, Box, Spinner } from '@chakra-ui/react';
import { getProductById } from '../Redux/ProductReducer/action';

export const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, isLoading, isError } = useSelector((store) => store.productReducer || {});

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id, dispatch]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="400px">
        <Spinner size="lg" color="green" />
      </Box>
    );
  }
  if (isError || !singleProduct) {
    return <Text fontSize='lg' textAlign='center' mt={6} color="red">Product not found.</Text>;
  }

  return (
    <div>
      <Text fontSize='2xl' fontWeight="extrabold" color='green'>Product-id: {id}</Text>
      <SingleCard {...singleProduct} />
    </div>
  )
}
