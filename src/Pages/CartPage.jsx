import React from 'react'
import { useSelector } from 'react-redux'
import { CartCard } from '../Components/CartCard'
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export const CartPage = () => {
  const cart= useSelector((store)=>store.cartReducer.cart)
  const navigate=useNavigate();
console.log(cart)

// const updateCount = (id, newCount) => {
//   // Logic to update count for the item in the cart
//   // This function can be passed as a prop to the CartCard component
//   // You can implement the logic according to your requirements
// };

  return(
    <div>
      <h1>My Cart</h1>
      <div style={{display:'felx', justifyContent:'center', alignItems:'center'}}>
        {cart.map((el,i)=>{
          return <CartCard key={i} 
          {...el}
          />
        })}
      </div>
      <h1>Total:</h1>

<div style={{display:"flex", justifyContent:"flex-end", padding:'20px'}}>
<Button onClick={()=>navigate('/payment')} bgColor={"green"} width='30%'
      p={4} fontSize="l" fontWeight="bold" color={'white'}  >Pay</Button>      
</div>
      
    </div>
    
    
  )
 
}
