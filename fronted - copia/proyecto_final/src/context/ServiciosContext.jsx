import { createContext, useContext, useState } from "react"
import axios from "axios";
import Swal from 'sweetalert2'
import { ENDPOINT } from "../config/config";
export const ServiciosContext = createContext();

const ServicioProvider = ({ children }) => {

  const defaultPublicacion = {
    usuario_id: 0,
    titulo: '',
    descripcion: '',
    img: 'imagen',
    precio: 0,
    especialidad: ''
  }

  const [publicaciones, setPublicaciones] = useState([]);
  const [publicacionesUser, setPublicacionesUser] = useState([]);
  const [publicacion, setPublicacion] = useState(defaultPublicacion);
  const [publicacionUser, setPublicacionUser] = useState([]);
  const [publicacionDet, setPublicacionDet] = useState([]);


  const handlePublicacion = (event, usuario_id, especialidad) => {
    setPublicacion({
      ...publicacion,
      [event.target.name]: event.target.value,
      usuario_id: usuario_id,
      especialidad: especialidad
    });
    console.log(publicacion);
  }

  const createPublicacion = (event) => {
    event.preventDefault();
    axios.post(ENDPOINT.publicaciones, publicacion)
      .then((res) => {
        const nuevaPublicacion = res.data;
        console.log('Respuesta del servidor:', res.data);
        setPublicaciones([...publicaciones, nuevaPublicacion]);
        setPublicacionesUser([...publicacionesUser, nuevaPublicacion]);
        console.log('Publicacion guardada');
        Swal.fire({
          title: "Publicación creada con éxito",
          icon: "success"
        }).then(() => {
          navigate("/profesional");
        });
      }).catch((err) => {
        return console.log(err);
      });
  }
// get todas las publicaciones
  const getPublicaciones = () => {
    axios.get(ENDPOINT.publicaciones)
      .then((res) => {
        setPublicaciones([...res.data]);
      }).catch((err) => {
        console.log(err);
      });
  }
//publicaciones por id de la publicacion
  const getPublicacionesId = (id) => {
    axios.get(`${ENDPOINT.publicaciones}/${id}`)
      .then((res) => {
        setPublicacionDet([...res.data]);
      }).catch((err) => {
        console.log(err);
      });
  }

  //publicaciones creadas por usuario
  const getUserPublicacion = (id) => {
    
    axios.get(`${ENDPOINT.publicaciones}/${id}`)
    .then((res) => {
      console.log('servicio res:', res.data)
      setPublicacionUser([...res.data]);
      console.log('servicio User:', publicacionUser)
    }).catch(err => {
      console.log(err);
    }) 
        
  }  
  
  /*const getUserPublicacion = async (id) => {
    try {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('Token de autenticación no encontrado.');
    }
    const res = await axios.get(`${ENDPOINT.publicaciones}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      }
    });
    console.log('servicio res:', res.data)
    setPublicacionUser([res.data]);
    console.log('servicio User:', publicacionUser)
  } catch(err) {
        console.log(err);
      };
  }*/

  return (
    <ServiciosContext.Provider value={{
      createPublicacion,
      handlePublicacion,
      getPublicaciones,
      getUserPublicacion,
      getPublicacionesId,
      publicacionUser,
      publicaciones
    }}>
      {children}
    </ServiciosContext.Provider>
  )
}

export default ServicioProvider
