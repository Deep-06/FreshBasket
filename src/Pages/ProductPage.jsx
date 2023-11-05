import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Products } from '../Components/Products'
import { styled } from 'styled-components'

export const ProductPage = () => {
  return (
    <div>
    <h1>Product List</h1>
    <DIV>
    <div className='sidebar'>
    <Sidebar/>
    </div>
    <div className='product-list'>
    <Products/>
    </div>
    </DIV>
    </div>
  )
}


const DIV = styled.div`
display:flex;
align-items:flex-start;


.sidebar{
  width:15%;
}

.product-list{
  width:85%;
}
`;