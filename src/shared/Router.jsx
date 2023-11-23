import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../Home'
import Detail from '../Detail'

function Router() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/:id' element={<Detail/>}/>
    <Route/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router