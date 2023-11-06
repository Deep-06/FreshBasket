import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from './Homepage'
import { Admin } from './Admin'
import { SingleProduct } from './SingleProduct'
import { CartPage } from './CartPage'
import { Login } from './Login'
import { ProductPage } from './ProductPage'

import {AboutUs} from "./AboutUs"
import { ThemeProvider, createTheme } from '@mui/material'
import { SignUp } from './SignUp'
import { Payment } from './Payment'
import { UserPage } from './UserPage'

const theme = createTheme()

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<ThemeProvider theme={theme}><Login/></ThemeProvider>}/>
            <Route path='/signup' element={<ThemeProvider theme={theme}><SignUp/></ThemeProvider>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/userpage' element={<UserPage/>}/>
            <Route path='/admin' element={<Admin/>}/>

            <Route path='/products' element={<ProductPage/>}/>

           
            <Route path='/aboutus' element={<AboutUs/>}/>

            <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path="/*" element={<h1>Page not Exist</h1>} />
        </Routes>

    </div>
  )
}
