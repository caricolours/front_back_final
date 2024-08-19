import { NavLink, useNavigate } from 'react-router-dom'
import perro from '../assets/perrito-6.jpg'
import login from '../assets/usuario.png'
import { CarritoContext } from '../context/CarritoContext'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const navigation = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const { totalCantidad, total } = useContext(CarritoContext)
  const setActiveClass = ({ isActive }) => (isActive ? "active" : 'botonbarra');

  const logout = () => {
    setUser()
    window.sessionStorage.removeItem('token')
    navigate('/')
  }

  return (
    <header className='position-sticky top-0 z-2'>
      <nav className="barrainicio d-flex justify-content-between align-items-center p-3">
        <div>
          <span className="textoinicio mx-3" onClick={() => navigate('/')}>Adiestramiento Canino</span>
          <img style={{ height: 75, objectFit: 'cover' }} src={perro} alt="" />

        </div>
        <div className='d-flex justify-content-between align-items-center p-3'>
          <NavLink type="button" className={`${setActiveClass} botonbarra btn mx-3 btn-sm`} to='/' onClick={() => navigate('/')}>Home</NavLink>
          <NavLink type="button" className="botonbarra btn mx-3 btn-sm" to='/servicios' onClick={() => navigate('/servicios')}>Servicios</NavLink>
          <NavLink type="button" className="botonbarra btn mx-3 btn-sm" to='/registro' onClick={() => navigate('/registro')}>Registro</NavLink>
           { setUser &&
          <>
            <Link to='/perfil' className='btn m-1 btn-light'>Mi Perfil</Link>
            <button onClick={logout} className='btn btn-danger'>Salir</button>
          </>
  }
          <div className='barralateral '>|</div>
          <NavLink className={`btn ${setActiveClass} botonbarra mx-4`} to='/login' onClick={() => navigate('/login')}><img style={{ height: 30, objectFit: 'cover' }} src={login} alt="" /></NavLink>
          <NavLink className={`btn ${setActiveClass} botonbarra`} to='/carrito' onClick={() => navigate('/carrito')}>
            🛒<span className='badge'>{totalCantidad}</span>
          </NavLink>
          <span className='badge'>${total}</span>
        </div>
      </nav>
    </header>
  )
}

export default navigation
