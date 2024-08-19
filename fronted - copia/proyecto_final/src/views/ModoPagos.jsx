import { useNavigate } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'
import ItemComprado from '../componentes/ItemComprado';
import { ServiciosContext } from '../context/ServiciosContext';

const ModoPagos = () => {
    const { goToPagar, servCarrito, total, goToInicioSesion } = useContext(CarritoContext);
    const {handleFormLogin} = useContext(UserContext);
    const { user } = useContext(UserContext);
    return (
        <div className="fondodetalle">
            <div className="cajapagodet shadow">
                <h3 className='m-4 text-center'>Pagar</h3>
                <div className='d-flex flex-row justify-content-center'>
                    { !user.id && 
                    <>
                    <form className='border mx-3 p-3 rounded shadow'>
                        <h5 className=''>Pagar como invitado</h5>
                        <div className="d-flex p-2">
                            <label className="formaregistro p-2" htmlFor="name">Nombre:</label>
                            <input id='name' name='name' className="imputs mx-1" type="text" placeholder="Nombre y Apellido" />
                        </div>
                        <div className="d-flex p-2">
                            <label className="formaregistro p-2" htmlFor="direccion">Dirección:</label>
                            <input id='direccion' name='direccion' className="imputs mx-1" type="text" placeholder="Dirección" />
                        </div>
                        <div className="d-flex p-2">
                            <label className="formaregistro p-2" htmlFor="email">Email:</label>
                            <input id='email' name='email' className="imputs mx-1" type="email" placeholder="Email" />
                        </div>
                        <div className="d-flex p-2">
                            <label className="formaregistro p-2" htmlFor="celular">Celular:</label>
                            <input id='celular' name='celular' className="imputs mx-1" type="tel" placeholder="Celular" />
                        </div>
                        <button type="button" className='btn m-2 botonregistro my-5' onClick={() => goToPagar()} >Pagar como invitado</button>
                    </form> 
                    <form onSubmit={handleFormLogin} className='d-flex flex-column p-3 border mx-3 rounded shadow'>
                        <h5 className=''>Iniciar Sesión</h5>
                        <input id='email' name='email' className="imputs my-2 p-2" type="email" placeholder="Email" />
                        <input id='pass' name='pass' className="imputs my-2 p-2" type="password" placeholder="Password" />
                        <button className="botonlogin shadow btn mx-5 my-4" >Ingresar</button>
                    </form> </> } 
                     { user.id &&
                    <div className='d-flex flex-column p-3  mx-3'>
                        <h5 className=''>Bienvenid@ a tu carrito de Compras!</h5>
                        <button type="button" className='btn m-2 botonregistro my-5' onClick={() => goToPagar()} >Pagar</button>
                    </div> }
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

export default ModoPagos
