import { useNavigate } from 'react-router-dom'
import ItemComprado from '../componentes/ItemComprado';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

const Pagos = () => {
    const { servCarrito, removeAllFromCarrito } = useContext(CarritoContext);
    const navigate = useNavigate();
    return (
        <div className="fondodetalle">
            <div className="cajapago shadow">
                <h3 className='m-5 text-center'>¡Pago Exitoso!</h3>
                <button type="button" className='btn btn-lg m-2 botonregistro' >Descargar Comprobante</button>
                <span className='text-white m-4'>Comprobante y detalle fueron enviados a su correo.</span>
                <div className='cajadetalle shadow d-flex flex-column justify-content-center align-items-center'>
                    <h6 className='m-3 text-uppercase'>Detalle de tu Compra</h6>
                    {servCarrito.map(s => {
                        return <ItemComprado key={s.id} id={s.id} titulo={s.titulo} precio={s.precio} foto={s.foto} />
                    })}
                </div>
                <button type="button" className='btn m-5 botonr' onClick={() => removeAllFromCarrito()}>Volver</button>
            </div>
        </div>
    )
}

export default Pagos
