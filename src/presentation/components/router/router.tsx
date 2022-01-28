import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import '../../styles/global.scss'

const Router = (): JSX.Element => (
    <BrowserRouter>
         <Routes>
             <Route path="/login" element={<Login />} />
         </Routes>
    </BrowserRouter>
)

export default Router
