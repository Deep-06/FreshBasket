import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from './Homepage'
import { Admin } from './Admin'
import { SingleProduct } from './SingleProduct'
import { CartPage } from './CartPage'
import { Products } from '../Components/Products'
import { Login } from './Login'
import { AboutUs } from './AboutUs'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
            <Route path='/cartpage/:id' element={<CartPage/>}/>
            <Route path="/*" element={<h1>Page not Exist</h1>} />
        </Routes>

    </div>
  )
}
