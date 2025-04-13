import React from 'react'
import Header from '../components/layout/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Home from '../pages/Home'
import Contact from '../pages/Contact'

const AppRoutes = () => {
  return (
    <>
          <Header />
          
              <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact/>} />
              </Routes>
          
          <Footer/>
    </>
  )
}

export default AppRoutes
