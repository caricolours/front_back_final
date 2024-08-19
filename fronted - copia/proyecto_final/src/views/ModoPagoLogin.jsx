import { CarritoContext } from '../context/CarritoContext';
import { useContext } from 'react';
import ItemComprado from '../componentes/ItemComprado';

const ModoPagoLogin = () => {
    const { goToPagar, servCarrito, total } = useContext(CarritoContext);
  return (
    <div className="fondodetalle">
            <div className="cajapagodet shadow">
                <h3 className='m-5 text-center'>Pagar</h3>
                <div className='d-flex flex-row justify-content-center'>
                    <div className='d-flex flex-column p-3  mx-3'>
                        <h5 className=''>Bienvenid@ a tu carrito de Compras!</h5>
                        <button type="button" className='btn m-2 botonregistro my-5' onClick={() => goToPagar()} >Pagar</button>
                    </div>
                    <div className='p-3 border mx-3 rounded shadow'>
                        <h5 className=''>Detalle de tu Compra:</h5>
                        {servCarrito.map(s => {
                            return <ItemComprado key={s.id} id={s.id} titulo={s.titulo} precio={s.precio} foto={s.foto} />
                        })}
                        <h6 className='text-center font-weight-bold m-4'>Total a pagar: ${total}</h6>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ModoPagoLogin
