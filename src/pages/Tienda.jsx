import React, { useEffect, useState } from 'react'
import Cardprod from '../components/Cardprod';

const API = 'https://dummyjson.com/products?limit=10&skip=';

const Tienda = () => {

  const [datos, setDatos] = useState([])
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

  const getDatos = async () => {

    const URI = API + skip

    try {
      const response = await fetch(URI);
      const data = await response.json();
      console.log(data)
      setDatos(data.products);
      setTotal(data.total)
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
    getDatos();
  }, [skip]);
  return (
    <>
      <h1 className='text-center py-3'>Tienda</h1>
      <div className="container">
        <h3 className="text-center py-3">Todos los Productos {total} ({datos.length})</h3>
        <div className="d-flex justify-content-evenly align-content-center  text-black mb-3 p-2 alert alert-dark">

          <p className="lead m-0">Pagina {Math.floor(skip / 10) + 1} de {Math.ceil(total / 10)}</p>

          <nav className="">
            <ul className="pagination m-0">
              <li className="page-item">
                <a className="page-link" href="#"
                  onClick={() => {
                    if (skip >= 10) {
                      setSkip(skip - 10);
                    }
                  }}
                >
                  &lt;&lt;
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {Math.floor(skip / 10) + 1}
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#"
                  onClick={() => {
                    if (skip + 10 < total) {
                      setSkip(skip + 10);
                    }
                  }}
                >
                  &gt;&gt;
                </a>
              </li>
            </ul>
          </nav>

        </div>
        <div className="row">
          {datos && datos.map((producto, index) => (

            <Cardprod key={index} producto={producto} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Tienda