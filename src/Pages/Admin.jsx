// import React from 'react'

// export const Admin = () => {
//   return (
//     <div>Admin</div>
//   )
// }

import React from 'react';
import { useState } from 'react';
import {styled} from "styled-components";


const initialState={
    name:"",
    image:"",
    price:0,
    category:""
    };


export const Admin = () => {
    const [data,setData]=useState(initialState);

    const handleChange=(e)=>{
      const {name,value}=e.target;
      // console.log(name,value)
      setData((prev)=>{
        return {...prev,[name]:name==="price"?+value:value}
      })
    };
  return (
    <DIV>
    <form>
        <h1>Add Product</h1>
        <input value={data.name} name="name" type='text' placeholder='Name' onChange={handleChange}/>
        <input value={data.image} name="image" type='text' placeholder='Image' onChange={handleChange}/>
        <input value={data.price} name="price" type='text' placeholder='Price' onChange={handleChange}/>
        <select value={data.category}  name="category" onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="vegetable">Vegetables</option>
        <option value="fruit">Fruits</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="seafood">Seafood</option>
        <option value="chicken">Chicken</option>
        <option value="mutton">Mutton</option>
        </select>
        <button type='submit'>Add Product</button>
    </form>
    </DIV>
  )
}

const DIV=styled.div`
// CSS files

width:400px;
margin:auto;
border:1px solid gray;
padding:40px;

form{
  display:flex;
  flex-direction:column;
  gap:20px;
  align-items:center;
}

input,select{
  height:40px;
  width:100%;
  font-size:larger;
  }

  button{
    width:50%;
    height:35px;
    border:none;
    cursor:pointer;
  }
`;