import { useContext } from 'react';
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { ServiciosContext } from '../context/ServiciosContext';

const CrearPublicacion = () => {
    const { user, getImage } = useContext(UserContext);
    const { createPublicacion, handlePublicacion } = useContext(ServiciosContext);
    const navigate = useNavigate();
    const clickInput = () => {
        const file = document.getElementById('image');
        file.click();
    }
    return (
        <div className="fondodetalle">
            <div className='cajapago shadow' >
                <h3 className=' text-center my-4'>Crear Publicación</h3>
                <div className="cajaperfil">
                    <h6 className='text-white m-2'>Datos</h6>
                </div>
                <form onSubmit={createPublicacion} className="my-4 cajadatos">
                <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="titulo">Título:</label>
                        <input id='titulo' name='titulo' className="imputsperfil mx-1" type="text" placeholder="Título" onChange={(event) => { handlePublicacion(event, user.id, user.especialidad) }} />
                    </div>
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="descripcion">Descripción:</label>
                        <input id='descripcion' name='descripcion' className="imputsperfil mx-1" placeholder="Descripción" onChange={(event) => { handlePublicacion(event, user.id, user.especialidad) }} />
                    </div>
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="image">Imagen:</label>
                        <button type="button" onClick={() => { clickInput() }} className='bnt btn-sm botonvermas'>Subir imagen</button>
                        <input id="image" accept='.jpg, .png' onChange={getImage} name='image' type="file" className="imputs mx-1 d-none" placeholder="URL img" />
                        <img src={user.img} width={50} height={50} className='ms-2' />
                    </div>
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="precio">Precio:</label>
                        <input id='precio' name='precio' className="imputsperfil mx-1" type="Number" placeholder="Precio" onChange={(event) => { handlePublicacion(event, user.id, user.especialidad) }} />
                    </div>
                    <div className="d-flex p-2 align-items-center">
                        <label className="formaregistro p-2" htmlFor="especialidad">Especialidad:</label>
                        <span className='mx-3'> { user.especialidad }</span>
                    </div>
                    <button className='botonlogin shadow btn my-4'>Crear</button>
                    <button type="button" className='btn btn-sm btn-outline-dark botonvolver' onClick={() => navigate('/profesional')}>
                        Volver
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CrearPublicacion
