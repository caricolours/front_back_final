import { useNavigate } from 'react-router-dom'
import AddCart from './AddCart';

const Card = ({ id, foto, titulo, precio }) => {
  const navigate = useNavigate();
  
  return (
    <article className='cajaservicio shadow border border-secondary-subtle py-2'>
        <img className='rounded-circle my-3 flex-shrink-0' src={foto} height={200} width={200} style={{ objectFit: 'cover' }} />
        <div className='d-flex flex-column justify-content-center align-items-center px-3 py-2'>
          <div className='d-flex flex-column'>
            <h6 className='text-center text-uppercase font-weight-bold'>{ titulo }</h6>
            <span className='text-center'>Precio: { precio }</span>
          </div>
          <div className='d-flex flex-column'>
            <button type="button" className='btn btn-sm botonvermas mx-3 my-2' onClick={() => navigate('/servicio/' + id)}>Ver detalle</button>
            <AddCart id={id} />
          </div>
        </div>
      </article>
  )
}

export default Card
