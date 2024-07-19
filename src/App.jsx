
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Tienda from './pages/Tienda'
import Categorias from './pages/Categorias'
import Contactos from './pages/Contactos'
import Busquedas from './pages/Busquedas'
import { useState } from 'react'
import Carrito from './contexts/Carrito'


function App() {



  return (
    <>
      <Carrito>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<Inicio />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/categorias/:id" element={<Categorias />} />
            <Route path='/busquedas' element={<Busquedas />} />
            <Route path="/contactos" element={<Contactos />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Carrito>
    </>
  )
}

export default App
