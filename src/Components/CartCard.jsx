import React, { useState } from 'react'
import { Text, Button, Image } from '@chakra-ui/react';
// import {styled} from "styled-components"

export const CartCard = ({image, name, price}) => {
    const [count,setCount]=useState(1);

    const handleDecrease = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };
  
    const handleIncrease = () => {
      setCount(count + 1);
    };

  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'70%'}}>
      <Image src={image} alt={name} width='20%' borderRadius='30%' />
     
      <Text fontSize='2xl' >{name}</Text>
      
      <Text fontSize='xl' >Price: {price*count}</Text>
       <div style={{display:'flex', justifyContent:'space-around',width:'20%'}}>
        <Button  onClick={handleDecrease} bgColor={"green"} 
        color={'white'} fontSize='xl'>-</Button>
        <h1>{count}</h1>
        <Button onClick={handleIncrease} bgColor={"green"} fontSize='xl' color={'white'}>+</Button>
       </div>
     

      
    </div>
  )
}


// const DIV = styled.div`
// width:60%;
// text-align:center;
// align-items:center;
// padding:5px;
// //background-color:whitesmoke;
// //border:1px solid black;
// //border-radius:2%;
// //box-shadow: lightgreen 0px 2px 4px, lightgreen 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
// `;