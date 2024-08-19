import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext';

const AddCart = ({ id }) => {

  const { addToCarrito, servCarrito, removeToCarrito } = useContext(CarritoContext);

  return (
    <>
    { servCarrito.some(s => s.id === id) ? (
       <button type="button" className='btn btn-sm btn-outline-danger rounded-pill' onClick={() => { removeToCarrito(id) }}>- Remover 🛒</button>
      ) : (
        <button type="button" className='btn btn-sm botonregistro' onClick={() => { addToCarrito(id) }}>+ Añadir 🛒</button>
      )}
    </>
  )
}

export default AddCart
