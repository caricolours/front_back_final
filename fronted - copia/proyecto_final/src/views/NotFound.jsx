import { useNavigate } from 'react-router-dom'
import perro from '../assets/perrito-2.png'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='cajanotfound'>
            <div className='divnot shadow d-flex-column my-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h1 className='textoNot fw-bold'>OOPS!</h1>
                    <img className='m-3' src={perro} alt="" style={{ width: 150 }} />
                </div>
                <div className='cajabaja d-flex-column text-center'>
                    <h1 className='textoNotFound fw-bold'>404</h1>
                    <h4 className='textoNotFound'> Page Not Found</h4>
                    <button type="button" className='btn btn-outline-light' onClick={() => navigate('/')}>
                        Volver
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound
