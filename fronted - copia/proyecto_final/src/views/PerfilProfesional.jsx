import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import { ServiciosContext } from '../context/ServiciosContext';

const PerfilProfesional = () => {
    const { id } = useParams();
    const { getUser, user, comprasUser, getComprasUser } = useContext(UserContext);
    const { getUserPublicacion, publicacionUser } = useContext(ServiciosContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            await getUser(id);
        };
        fetchData();
        getComprasUser(id);
        console.log(id)
        getUserPublicacion(id)
        console.log(publicacionUser)
    }, [id]);

    return (
        <div className="fondodetalle">
            <div className='cajapago shadow'>
                <h3 className=' text-center my-4'>Perfil Profesional</h3>
                <div className="cajaperfil mb-2">
                    <h6 className='text-white m-2'>Mis Compras</h6>
                </div>
                {comprasUser?.map((c) => (
                    <div key={c.usuario_id} className='m-1 d-flex justify-content-center align-items-center'>
                        <span className="my-1 p-1 mx-4">- Servicio:    {c.titulo}</span>
                        <span className='mx-4'>|</span>
                        <span className="my-1 p-1 mx-4">Precio:    ${c.precio}</span>
                    </div>
                ))}
                <div className="cajaperfil">
                    <h6 className='text-white m-2'>Mis Publicaciones</h6>

                </div>
                <div className="d-flex flex-column justify-content-between p-2 mt-3">

                    {publicacionUser?.map((p) => (
                        <ul key={p.usuario_id} className='mx-4 d-flex justify-content-between align-items-center'>
                            <li className='list-group-item d-flex justify-content-between align-items-center w-100'>{p.titulo}
                                <button type="button" className="botonr btn  btm-sm mx-4" onClick={() => navigate('/servicio/' + p.id)}>Ver detalle</button>
                            </li>
                        </ul>
                    ))}

                </div>
                <div className='cajacrear'>
                    <button type="button" className='botoncrear shadow btn my-4' onClick={() => navigate('/publicacion')}>Crear Publicación</button>
                </div>
                <div className="cajaperfil">
                    <h6 className='text-white m-2'>Mis Datos</h6>
                </div>
                <div className="my-4 cajadatos">
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="nombre">Nombre</label>
                        <input className="imputsperfil mx-1" type="text" placeholder="Nombre y Apellido" defaultValue={user.nombre} />
                    </div>
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="img">Imagen:</label>
                        <input className="imputsperfil mx-1" type="text" placeholder="URL img" defaultValue={user.img} />
                    </div>
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="fname">Dirección:</label>
                        <input className="imputsperfil mx-1" type="text" placeholder="Dirección" defaultValue={user.direccion} />
                    </div>
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="fname">Celular:</label>
                        <input className="imputsperfil mx-1" type="number" placeholder="Celular" defaultValue={user.celular} />
                    </div>
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="fname">Especialidad:</label>
                        <input className="imputsperfil mx-1" type="text" placeholder="Especialidad" defaultValue={user.especialidad} />
                    </div>
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="fname">Email:</label>
                        <input className="imputsperfil mx-1" type="email" placeholder="Email" defaultValue={user.email} />
                    </div>
                    <div className="d-flex p-2">
                        <label className="formaregistro p-2" htmlFor="fname">Password:</label>
                        <input className="imputsperfil mx-1" type="password" placeholder="Password" />
                    </div>
                </div>
                <button type="button" className='botonperfil shadow btn mb-5' onClick={() => navigate('/')}>Volver Home</button>
            </div>
        </div>
    )
}

export default PerfilProfesional
