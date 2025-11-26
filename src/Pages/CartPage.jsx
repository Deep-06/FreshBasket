import React from 'react'
import { useSelector } from 'react-redux'
import { CartCard } from '../Components/CartCard'
import { Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export const CartPage = () => {
  const cart = useSelector((store) => store.cartReducer.cart)
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div>
      <Text fontSize='2xl' fontWeight='bold'>My Cart</Text>
      <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column', gap: '10px' }}>
        {cart.map((el) => {
          return <CartCard key={el.id}
            {...el}
          />
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", padding: '10px' }}>
      <Text fontSize='xl' fontWeight='bold' width='20%'>Total: {total}</Text>
      </div>
                
      <div style={{ display: "flex", justifyContent: "flex-end", padding: '20px' }}>
        <Button onClick={() => navigate('/payment')} bgColor={"green"} width='20%'
          p={4} fontSize="l" fontWeight="bold" color={'white'}  >Pay {total}</Button>
      </div>

    </div>


  )

}
