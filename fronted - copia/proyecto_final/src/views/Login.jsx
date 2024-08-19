import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'
import perro from '../assets/usuario2.png'

const Login = () => {
    const { handleUserLogin, handleFormLogin, userLogin } = useContext(UserContext);
    const navigate = useNavigate();
    return (
        <div className="cajacontenedora">
            <div className="recuadrotrasero shadow border-secondary-subtle">

                <form onSubmit={handleFormLogin} className="recuadrofrontal shadow">
                    <h4 className="mt-5">User Login</h4>
                    <img className='m-2' src={perro} alt="" style={{ width: 100 }} />
                    <input name="email" className="imputlogin mx-1 p-2 m-2" type="email" placeholder="Email" onChange={handleUserLogin}/>
                    <input name="password" className="imputlogin mx-1 p-2 m-2" type="password" placeholder="Password" onChange={handleUserLogin} />
                    <button className="botonlogin shadow btn m-4 btn-lg" >Ingresar</button>
                    <button type="button" className="botonr btn m-3" onClick={() => navigate('/registro')}>Registrar</button>
                </form>
            </div>
        </div>
    )
}

export default Login
