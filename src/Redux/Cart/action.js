import axios from "axios"
import { ADD_TO_CART } from "./actionTypes"


export const addTocart= (id)=>(dispatch)=>{
    axios.get(`https://mock-api-freshbasket.onrender.com/products/${id}`)

.then((res)=>{
    console.log(res.data)
    dispatch({type:ADD_TO_CART,payload:res.data})
}).catch((error) => {
        console.error('Error adding product to cart:', error);
})
}