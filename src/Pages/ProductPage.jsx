import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Products } from '../Components/Products'
import { styled } from 'styled-components'

export const ProductPage = () => {
  return (
    <DIV>
    <div>
        <Sidebar/>
    </div>

    <div>
        <Products/>
    </div>
    </DIV>
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