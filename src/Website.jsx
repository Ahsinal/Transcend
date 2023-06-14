import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidenav from './transcend/sidenavv/Sidenav'

const Website = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Sidenav/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Website