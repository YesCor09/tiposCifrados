import React from 'react'
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'
import { CifradoCesar } from './CifradoCesar'
import { CifradoEscitala } from './CifradoEscitala'
import TiposCifrado from './TiposCifrado'
import { CifradoDjango } from './CifradoDjango'
import { CifradoRC6 } from './CifradoRC6'

export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<TiposCifrado/>}/>
            <Route path='/cesar' element={<CifradoCesar/>}/>
            <Route path='/escitala' element={<CifradoEscitala/>}/>
            <Route path='/cifraDjango' element={<CifradoDjango/>}/>
            <Route path='/cifraRC6' element={<CifradoRC6/>}/>
        </Routes>
    </Router>
  )
}

