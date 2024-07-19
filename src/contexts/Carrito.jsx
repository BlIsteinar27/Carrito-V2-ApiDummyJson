import { useState } from "react";
import { carritoContext } from "./carritoContext"

import Swal from 'sweetalert2'


const Carrito = ({ children }) => {


    //funcion para mostrar mensajes
    function alertStock(titulo, texto) {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: "warning",
            showConfirmButton: false,
            timer: 2000
        });
    }
    function alertCompra(titulo, texto) {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: "success",
            showConfirmButton: false,
            timer: 2000
        });
    }
    function alertVaciar(titulo, texto) {
        Swal.fire({
            title: "Quiere vaciar el carrito?",
            text: "Se van a borrar los productos dentro del carrito!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Vaciar !"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Carrito vacio!",
                text: "Se vació el carrito con exito.",
                showConfirmButton: false,
                icon: "success",
                timer: 2000
              });
              setCart([])
            }
          });
    }

    const [cart, setCart] = useState([]);

    const agregar = (producto) => {

        setCart((currItems) => {
            const isItemInCart = currItems.find((item) => item.id === producto.id)
            if (isItemInCart) {
                return currItems.map((item) => {
                    if (item.id === producto.id) {


                        if (item.cantidad < item.stock) {
                            return { ...item, cantidad: item.cantidad + 1 }

                        } else {
                            alertStock("Error en agregar! No hay mas en el stock!");
                            return { ...item, cantidad: item.cantidad }
                        }


                    } else {
                        return item;
                    }
                })
            } else {
                return [...currItems, { ...producto, cantidad: 1 }];
            }
        })

        //setCart([...cart, producto])
        //console.log("agregado")
        console.log(cart)
    }
    const vaciar = () => {
        
        alertVaciar()

    }
    const eliminar = (producto) => {
        setCart((currItems) => {
            if (currItems.find((item) => item.id === producto.id)?.cantidad === 1) {
                return currItems.filter((item) => item.id !== producto.id);
            } else {
                return currItems.map((item) => {
                    if (item.id === producto.id) {
                        return { ...item, cantidad: item.cantidad - 1 };
                    } else {
                        return item;
                    }
                })
            }
        })


        /*
        para eliminar todos los item
        setCart((currItems)=>{
            return currItems.filter((item)=> item.id !== producto.id);
        })
        */
        console.log(cart)
    }

    const comprar = () => {
        fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 1,
                products: cart.map((item) => ({
                    id: item.id,
                    quantity: item.cantidad
                }))
            })
        })
            .then((res) => res.json())
            .then(console.log);
        alertCompra("Gracias por su compra!")
        setCart([])
    };

    return (
        <carritoContext.Provider
            value={{ cart, agregar, vaciar, eliminar, comprar }}>
            {children}
        </carritoContext.Provider>
    )
}

export default Carrito