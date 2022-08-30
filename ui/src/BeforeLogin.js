import React from 'react'
import {BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import Login from './Login/index'
import Register from './Register/index';
export const BeforeLogin = () => {
  return (
    <div>
        <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='*' element={<Navigate to ="/login" />}></Route>
                 </Routes>
        </BrowserRouter>
    </div>
  )
}
