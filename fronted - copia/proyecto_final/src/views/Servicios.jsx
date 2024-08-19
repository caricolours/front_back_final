import { useContext, useEffect } from 'react'
import { ServiciosContext } from '../context/ServiciosContext'
import Card from '../componentes/Card';
import { ToastContainer } from 'react-toastify';


const Servicios = () => {
  const { publicaciones, getPublicaciones } = useContext(ServiciosContext);

  useEffect(() => {
    getPublicaciones();
  }, []);

  return (

    <div className="fondoservicio">
      <ToastContainer position="bottom-right"/>
      {
        publicaciones.map(publicacion => {
          return <Card 
            key={publicacion.id} 
            id={publicacion.id} 
            titulo={publicacion.titulo} 
            precio={publicacion.precio} 
            foto={publicacion.foto}  /> 
        })
      }
    </div >

  )
}

export default Servicios