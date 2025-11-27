import React from 'react'
import { useSelector } from 'react-redux'
import { CartCard } from '../Components/CartCard'
import { Button, Text, Image, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


export const CartPage = () => {
  const cart = useSelector((store) => store.cartReducer.cart)
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div style={{ minHeight: '450px'}}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px', marginTop: '20px', }}>
        {cart.length > 0 ? (
          <>
            {cart.map((el) => {
              return <CartCard key={el.id}
                {...el}
              />
            })}
          </>
        ) : (
          <Box width={'100%'} height='450px' display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Image src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-6024626.png" alt="Empty Cart" width={'20%'} />
            <Text fontSize='large' fontWeight='semibold'>Your cart is Empty!</Text>
          </Box>
        )}
      </div>
      {cart.length > 0 &&
        <Box display="flex" flexDirection="column" justifyContent='flex-end' alignItems="flex-end" padding="20px" marginTop="20px" position='sticky' bottom="0px">
          <Text fontSize='xl'pb='10px' fontWeight='bold' width='20%'>Total: {total}</Text>

          <Button onClick={() => navigate('/payment')} bgColor={"green"} width='20%'
            p={4} fontSize="l" fontWeight="bold" color={'white'}  >Pay {total}
          </Button>
        </Box>
      }

    </div>


  )

}
