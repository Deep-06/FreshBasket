import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { ProductCard } from './ProductCard';
import { getProducts } from '../Redux/ProductReducer/action';
import { useSearchParams } from 'react-router-dom';
import {styled} from "styled-components"
import Footer from './Footer';


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
   
    
    <DIV >
        {product.length>0 && product.map((el)=>{
          return <ProductCard key={el.id} {...el}/>
        })}
        
    </DIV>

  )
}

const DIV = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
text-align:center;
align-items:center;
padding:10px;

@media only screen and (max-width: 650px) {
    display:grid;
    grid-template-columns:repeat(1,1fr);
}

@media only screen and (min-width: 651px) and (max-width: 800px) {
    display:grid;
    grid-template-columns:repeat(2,1fr);
}

@media only screen and (min-width: 801px) and (max-width: 1100px) {
    display:grid;
    grid-template-columns:repeat(3,1fr);
}
`;