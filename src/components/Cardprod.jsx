import React, { useContext } from 'react'
import Detalle from './Detalle'

import { carritoContext } from "../contexts/carritoContext";

const Cardprod = ({ producto }) => {

    const { cart, agregar, vaciar, eliminar, comprar } = useContext(carritoContext)

    const getCantidad = (producto) => {
        return cart.find((item) => item.id === producto.id)?.cantidad || 0
    }
    const totalProd = getCantidad(producto)

    return (
        <>
            <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                <div className='card h-100' data-bs-theme="dark">
                    <div className='card-header'>
                        {
                            totalProd > 0 && (
                                <span
                                    className="badge rounded-pill text-bg-warning fs-3 m-1" style={{ position: 'absolute', top: '0', right: '0', zIndex: '1' }}>
                                    {totalProd}
                                </span>
                            )
                        }
                        <img src={producto.thumbnail} alt="" className='img-fluid p-0' />
                    </div>
                    <div className='card-body text-center'>
                        <h3>{producto.title}</h3>
                        <h5 className="text-danger"><b>Precio: </b>{producto.price.toFixed(0).toLocaleString()}$</h5>
                        <p className='lead'>
                            <br /><b>Stock: </b><span className="badge rounded-pill text-bg-success">{producto.stock}</span>

                        </p>

                    </div>
                    <div className='card-footer text-center'>
                        <a href="#" className='btn btn-warning btn-sm mx-1' data-bs-toggle="modal" data-bs-target={`#${producto.id}`}>Detalle</a>
                        <hr />
                        <button className="btn btn-success btn-sm mx-1" onClick={() => agregar(producto)}>+ Agregar</button>
                        {
                            totalProd > 0 && (
                                <button className="btn btn-danger btn-sm mx-1" onClick={() => eliminar(producto)}>- Restar</button>
                            )

                        }
                    </div>
                </div>
            </div>

            <Detalle key={producto.id} producto={producto} />

        </>
    )
}

export default Cardprod