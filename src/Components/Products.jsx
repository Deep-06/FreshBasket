import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { ProductCard } from './ProductCard';
import { getProducts } from '../Redux/ProductReducer/action';
import { useSearchParams } from 'react-router-dom';

export const Products = () => {
  const dispatch=useDispatch();
  const product=useSelector((store)=>store.productReducer.products);
const [searchParams]=useSearchParams();

  const paramObj={
  params:{
  category:searchParams.getAll('category'),
  _sort: searchParams.get("order") && "price",
     _order: searchParams.get("order"),
  }
  }

  useEffect(()=>{
  dispatch(getProducts(paramObj))
  },[searchParams])

  console.log(product);
  
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:"10px"}}>
        {product.length>0 && product.map((el)=>{
          return <ProductCard key={el.id} {...el}/>
        })}
        
    </div>
  )
}
