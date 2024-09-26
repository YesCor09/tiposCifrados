import React from 'react'
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'
import { CifradoCesar } from './CifradoCesar'
import { CifradoEscitala } from './CifradoEscitala'
import TiposCifrado from './TiposCifrado'

export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<TiposCifrado/>}/>
            <Route path='/cesar' element={<CifradoCesar/>}/>
            <Route path='/escitala' element={<CifradoEscitala/>}/>
        </Routes>
    </Router>
  )
}

