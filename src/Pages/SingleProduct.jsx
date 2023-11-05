import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SingleCard } from '../Components/SingleCard';
import {Text} from '@chakra-ui/react';

export const SingleProduct = () => {
  const {id}=useParams();
  const [data,setData]=useState({});
  const products=useSelector((store)=>store.productReducer.products)
  
  useEffect(()=>{
const product=products.find(el => el.id === +id);
setData(product);
  },[])
  

  return (
    <div>
      <Text fontSize='2xl' fontWeight="extrabold" color='green'>Product-id: {id}</Text>
      <SingleCard {...data}/>
    </div>
  )
}
