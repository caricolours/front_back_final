import { useNavigate } from 'react-router-dom'
import ItemCart from '../componentes/ItemCart';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

const Carrito = () => {
    const { servCarrito, total, totalCantidad } = useContext(CarritoContext);
    const navigate = useNavigate();
    
    return (
        <div className="fondoservicio">

            <div className='cajafondocarro container px-5 shadow rounded-3 border'>
                <h3 className='m-5 text-center'>Tu carrito</h3>
                {
                    servCarrito.length === 0 ? (
                    <div className='text-center'>
                        <h4>No hay nada aquí</h4>
                        <p className='mb-4'>Aún no has agegado nada a tu carrito</p>
                        <a className='btn btn-sm botonregistro' onClick={() => { navigate('/servicios') }}>Ver servicios</a>
                    </div>
                    ) :
                    servCarrito.map(s => {
                        return <ItemCart key={s.id} id={s.id} titulo={s.titulo} precio={s.precio} />
                    })
                }
                <div className=' d-flex flex-row align-items-center justify-content-end'>
                    <h4 className='text-center m-3'>Total: ${total}</h4>
                    <span className='text-center m-5'>Catidad: { totalCantidad }</span>
                </div>
                <div className='d-flex justify-content-end mb-5 mx-3'>
                    <button type="button" className='btn btn-sm m-2 botonr' onClick={() => navigate('/servicios')}>Volver</button>
                    <button type="button" className='btn btn-lg m-2 botonregistro' onClick={() => navigate('/pagoinvitado')} >Pagar</button>
                </div>
            </div>

        </div>
    )
}

export default Carrito
