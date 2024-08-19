import carrusel3 from '../assets/carrusel3.png'
import carrusel2 from '../assets/carrusel2.png'
import carrusel1 from '../assets/carrusel1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='fondohome'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={carrusel3} className="d-block" height={500} width='100%' style={{ objectFit: 'cover' }} alt="..."  />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={carrusel2} className="d-block" height={500} width='100%' style={{ objectFit: 'cover' }} alt="..."  />
          </div>
          <div className="carousel-item">
            <img src={carrusel1} className="d-block" height={500} width='100%' style={{ objectFit: 'cover' }} alt="..."  />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>

      </div>
      <div className='divp shadow my-5'>
        <p className='p-4 mx-3'>
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        </p>
        <button type="button" className="botonregistro shadow btn mx-3 mb-3" onClick={() => navigate('/servicios')}>Ver Servicios</button>
      </div>
    </div>
  )
}

export default Home
