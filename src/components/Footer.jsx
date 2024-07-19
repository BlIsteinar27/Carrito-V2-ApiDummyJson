import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link to="/inicio" href="#" className="nav-link px-2 text-white-50">Inicio</Link></li>
          <li className="nav-item"><Link to="/tienda" href="#" className="nav-link px-2 text-white-50">Tienda</Link></li>
          <li className="nav-item"><Link to="/contactos" href="#" className="nav-link px-2 text-white-50">Contactos</Link></li>
        </ul>
        <p className="text-center text-white-50">© 2024 Company, Inc</p>
      </footer>
    </>
  )
}

export default Footer