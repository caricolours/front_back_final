import foto1 from '../assets/carrusel1.png'
import { useNavigate, useParams } from 'react-router-dom'
import AddCart from '../componentes/AddCart';
import { useContext, useEffect, useState } from 'react';
import { ServiciosContext } from '../context/ServiciosContext';
import { ToastContainer } from 'react-toastify';


const ServiciosDet = () => {
    const navigate = useNavigate();
    const { publicaciones, getPublicaciones} = useContext(ServiciosContext);
    
    const { id } = useParams();

    useEffect(() => {
        const publicacionObject = publicaciones.find(p => p.id == Number(id));
        console.log(publicacionObject)
        
        getPublicaciones()
    }, []);

    return (

        <div className="fondodetalle">
            <ToastContainer position="bottom-right"/>
            {
                publicaciones.filter(ser => ser.id == id).map(s => (
                    <article key={s.id} className='container bg-white row mx-0 p-0 shadow border border-secondary-subtle rounded-3 overflow-hidden'>
                <div className='cajafoto col-12 col-md-5 p-0 d-flex flex-column align-items-center'>
                    <h5>Nombre Especialista: </h5>
                    <img className='mb-3' src={s.foto} width='100%' style={{ objectFit: 'cover' }} />
                    <span className='pb-3'>{ s.especialidad }</span>
                </div>
                <div className='col-12 col-md-7 px-3 py-4 cajaserviciodet'>
                    <h5 className='text-start text-uppercase mb-4'>{ s.titulo }</h5>
                    <p>{ s.descripcion }</p>
                    <div className=''>
                        <h6 className='text-end font-weight-bold m-2'>Precio: { s.precio }</h6>
                        <div className='d-flex justify-content-end align-items-center gap-2'>
                            <button type="button" className='btn btn-sm btn-outline-dark botonvolver' onClick={() => navigate('/servicios')}>Volver</button>
                            <AddCart id={s.id} />
                        </div>
                    </div>
                </div>
            </article>
                ))
            }
        </div >

    )
}

export default ServiciosDet
