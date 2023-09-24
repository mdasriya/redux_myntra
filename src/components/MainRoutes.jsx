import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { Login } from '../pages/login'
import { Admin } from '../pages/Admin'
import PrivateRoute from './PrivateRoute'
import EditProduct from '../pages/EditProduct'


const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/admin' element={<PrivateRoute><Admin /></PrivateRoute>}/>
      <Route path='/edit/:id' element={<PrivateRoute><EditProduct /></PrivateRoute>}></Route>
      <Route path="*" element={<h1>Page Not Found</h1>}></Route>

    </Routes>
  )
}

export default MainRoutes
