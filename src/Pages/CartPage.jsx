import React from 'react'
import { useSelector } from 'react-redux'
import { CartCard } from '../Components/CartCard'

export const CartPage = () => {
  const cart= useSelector((store)=>store.cartReducer.cart)
console.log(cart)
  return(
    <div>
      <h1>Cart</h1>
      <div style={{display:'felx', justifyContent:'center', alignItems:'center'}}>
        {cart.map((el,i)=>{
          return <CartCard key={i} {...el}/>
        })}
      </div>
    </div>
    // <div>
    // <h1>Hi</h1>
    //     { cart.map((el)=>{
    //       console.log(el.name)
    //       return <div>
//         <section class="h-100" >
//   <div class="container h-100 py-5">
//   <div class="row d-flex justify-content-center align-items-center h-100">
//     <div class="col-10">

//       <div class="d-flex justify-content-between align-items-center mb-4">
//         <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
      
//       </div>

      
//       <div class="card rounded-3 mb-4">
//         <div class="card-body p-4">
//           <div class="row d-flex justify-content-between align-items-center">
//             <div class="col-md-2 col-lg-2 col-xl-2">
//               <img
//                 src={"image"}           class="img-fluid rounded-3" alt="Cotton T-shirt"/>
//             </div>
//             <div class="col-md-3 col-lg-3 col-xl-3">
//               <p class="lead fw-normal mb-2">{"ljnsdafnnas"}</p>
//          </div>
//             <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
//               <button class="btn btn-link px-2"
//                 onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
//                 <i class="fas fa-minus">-</i>
//               </button>

//               <input id="form1" min="0" name="quantity" value="2" type="number"
//                 class="form-control form-control-sm" />

//               <button class="btn btn-link px-2"
//                 onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
//                 <i class="fas fa-plus">+</i>
//               </button>
//             </div>
//             <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
//               <h5 class="mb-0">{"700"}</h5>
//             </div>
//             <div class="col-md-1 col-lg-1 col-xl-1 text-end">
//               <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="card mb-4">
//         <div class="card-body p-4 d-flex flex-row">
//           <div class="form-outline flex-fill">
//             <input type="text" id="form1" class="form-control form-control-lg" />
//             <label class="form-label" for="form1">Discound code</label>
//           </div>
//           <button type="button" class="btn btn-outline-warning btn-lg ms-3">Apply</button>
//         </div>
//       </div>

//       <div class="card">
//         <div class="card-body">
//           <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
//         </div>
//       </div>

//     </div>
//   </div>
// </div>
// </section>
    //    </div>
    //     })}
    // </div>
    
  )
 
}
