import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../Components/ProductCard';

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
      <h2>Product-id: {id}</h2>
      <ProductCard {...data}/>
    </div>
  )
}
