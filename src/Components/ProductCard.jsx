import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addTocart } from '../Redux/Cart/action';
import { useDispatch } from 'react-redux';

export const ProductCard = ({id,image,name,price,category}) => {
  const navigate=useNavigate();
const dispatch= useDispatch()
  return (
    <div >
      <img src={image} alt={name} width='100%'/>
      <h3>Product: {name}</h3>
      <h3>Price: {price}</h3>
      <h3>Category: {category}</h3>
      <button onClick={()=>navigate(`/singleproduct/${id}`)}>{name} Details</button>
      <button onClick={()=>{
        dispatch(addTocart(id))
      }}>Add to cart</button>
      
      </div>
     
  )
}

