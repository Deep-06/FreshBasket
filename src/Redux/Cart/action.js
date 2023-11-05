import axios from "axios"
import { ADD_TO_CART } from "./actionTypes"


export const addTocart= (id)=>(dispatch)=>{
    axios.post(`https://mock-api-foodbasket-grocery.onrender.com/grocery/${id}`)

.then((res)=>{
    console.log(res.data)
    dispatch({type:ADD_TO_CART,payload:res.data})
})}