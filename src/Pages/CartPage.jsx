import React from 'react'
import { useSelector } from 'react-redux'
import { CartCard } from '../Components/CartCard'

export const CartPage = () => {
  const cart= useSelector((store)=>store.cartReducer.cart)
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
    </div>
    
    
  )
 
}
