import axios from "axios";
import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes"


export const getProducts=(paramObj)=>(dispatch)=>{
dispatch({type:PRODUCT_REQUEST});
axios
.get('https://mock-api-foodbasket-grocery.onrender.com/grocery',paramObj)
.then((res)=>{
    dispatch({type:PRODUCT_SUCCESS, payload:res.data})
})
.catch((err)=>{
    dispatch({type:PRODUCT_FAILURE})
})
}

//https://mock-api-foodbasket-grocery.onrender.com/grocery
//http://localhost:8080/grocery