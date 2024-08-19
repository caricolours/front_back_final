import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import { CarritoContext } from '../context/CarritoContext';
import { ServiciosContext } from '../context/ServiciosContext';

const PerfilUsuario = () => {
  const { id } = useParams();
  const { getUser, user, comprasUser, getComprasUser } = useContext(UserContext);
  const navigate = useNavigate();

  /*useEffect(() => {
    async function wrapGetUser() {
    await getUser(id);
  }
  wrapGetUser()
  getComprasUser(id);
  }, []); */

  useEffect(() => {
    const fetchData = async () => {
        await getUser(id);
        
    };
    fetchData();
    getComprasUser(id);
}, [id]);
  
  


  return (
    <div className="fondodetalle">
      <div className='cajapago shadow'>
        <h3 className=' text-center my-4'>Perfil Cliente</h3>
        <div className="cajaperfil mb-2">
          <h6 className='text-white m-2'>Mis Compras</h6>
        </div>
       { comprasUser?.map( (c) => (
        <div key={c.usuario_id} className='m-1'>
        <span className="my-3 p-2">- Servicio: {c.titulo}</span>
        <span> | </span>
        <span className="my-3 p-2">Precio: ${c.precio}</span>
        </div>
       ))}
        
        <div className="cajaperfil">
          <h6 className='text-white m-2'>Mis Datos</h6> 
        </div>
        <div className="my-4 cajadatos">
          <div className="d-flex p-2">
            <label className="formaregistro p-2" htmlFor="fname">Nombre:</label>
            <input className="imputsperfil mx-1" type="text" placeholder="Nombre y Apellido" defaultValue={user.nombre} />
          </div>
          <div className="d-flex p-2">
            <label className="formaregistro p-2" htmlFor="fname">Imagen:</label>
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

export default PerfilUsuario
