import { useState } from "react"
import { CartFill, DashCircleFill, PlusSquareFill } from "react-bootstrap-icons"

import Swal from 'sweetalert2'

const Detalle = ({ producto }) => {



    //funcion para mostrar mensajes
    function mostrarMensage(titulo, texto) {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: "success"
        });
    }



    return (
        <>
            <div className="modal fade" id={producto.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{producto.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-md-4'>
                                    <img src={producto.thumbnail} alt={producto.title} className="img-fluid img-thumbnail" />
                                </div>
                                <div className='col-md-8'>
                                    <h3>{producto.title}</h3>

                                    <p className="lead">
                                        <b>Marca: </b>{producto.brand}
                                        <br /><b>Categoria: </b>{producto.category}
                                        <br /><b>Stock: </b>{producto.stock}
                                        <br /><b>Clasificación: </b><span className="badge bg-info">{producto.rating}</span>
                                    </p>
                                    <p className='lead small'><b>Descripción: </b>{producto.description}</p>

                                    <h3 className="text-danger"><b>Precio: </b>{producto.price.toFixed(0).toLocaleString()}$</h3>




                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detalle