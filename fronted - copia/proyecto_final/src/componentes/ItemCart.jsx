import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext";

const ItemCart = ({ id, titulo, precio }) => {
 const { removeToCarrito } = useContext(CarritoContext);
  return (
    <div className='cajacarro bg-light border rounded-2 w-100 mb-2'>
                    <div className='info-carrito d-flex justify-content-between align-items-center border-bottom border-secondary-subtle'>
                        <div className='m-1'>
                            <span className='text-capitalize text-sm px-2'>{ titulo }</span>
                        </div>
                        <div className='m-1'>
                            <span className='fw-bold'>$ { precio }</span>
                            <button onClick={() => { removeToCarrito(id) }} type="button" width={50} className='btn m-2' >🗑</button>
                        </div>
                    </div>
                </div>
  )
}

export default ItemCart
