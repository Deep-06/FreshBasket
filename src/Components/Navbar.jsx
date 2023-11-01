import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = () => {
  return (
    <DIV>
     <h1>Fresh Food</h1>
     <Link to={'/'}>Home</Link>
     <Link to={'/products'}>Grocery</Link> 
     <Link to={"/login"}>Login</Link>
    </DIV>
  )
}
const DIV=styled.div`
  display:flex;
  align-items:center;
  gap:40px;
`;