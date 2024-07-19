import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Cardprod from '../components/Cardprod';
const API='https://dummyjson.com/products/search?q=';

const Busquedas = () => {
    const location = useLocation();
    const valueSearch = location.state;
    
    const [datos, setDatos] = useState([])
    const getDatos = async (valueSearch) =>{
        try {
        const URI=API+valueSearch;
          const response = await fetch(URI);
          const data = await response.json();
          //console.log(data)
          setDatos(data.products);
        } catch (error) {
          console.error(error)
        }
    };
    useEffect(()=>{
      getDatos(valueSearch);
    },[valueSearch]);
  return (
    <>
        <div className="container">
          <h1 className="text-center py-3"> Buscar por ({valueSearch}) ({datos.length})</h1>
          <div className="row">
              {datos && datos.map((productos)=>(
                  <Cardprod key={productos.id} producto={productos}/>
              ))}
          </div>
      </div>
    </>
  )
}

export default Busquedas