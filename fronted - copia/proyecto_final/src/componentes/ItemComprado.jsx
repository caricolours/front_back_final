import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext";

const ItemComprado = ({ id, foto, titulo, precio }) => {
    return (
        <div className='d-flex justify-content-center align-items-center m-4 border-dark border-bottom'>
            <img className='rounded-circle my-3' src={ foto } height={100} width={100} style={{ objectFit: 'cover' }} />
            <h6 className='text-center font-weight-bold m-4'>{ titulo }</h6>
            <h6>${ precio }</h6>
        </div>
    )
}

export default ItemComprado
