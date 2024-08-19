import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios'
import { ENDPOINT } from '../config/config.js'
export const UserContext = createContext();

const UserProvider = ({ children }) => {

  const navigate = useNavigate();
  const [userType, setUserType] = useState('cliente');
  const initialForm = {
    nombre: "",
    especialidad: "",
    img: "",
    celular: "",
    direccion: "",
    email: "",
    password: ""
  }
  const [user, setUser] = useState(initialForm);
  const [userLogin, setUserLogin] = useState({ email: '', password: '' });
  const [comprasUser, setComprasUser] = useState([]);

  //conectar con back

  const getImage = (e) => {
    /* const file = e.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
        setUser({ ...user, img: event.target.result });
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    }; */
    setUser({ ...user, img: 'imagen' });

  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  
      const getUser = (id) => {
        const token = window.sessionStorage.getItem('token')
        axios.get(`${ENDPOINT.users}/${id}`, { headers: { Authorization: `Bearer ${token}` } })
          .then((res) => {
            setUser((prevData) => ({ ...prevData, ...res.data }));
            
          }).catch(() => {
            window.sessionStorage.removeItem('token')
            navigate('/login');
          });
      }

 const getComprasUser = (id) => {
  axios.get(`${ENDPOINT.compras}/${id}`)
      .then((res) => {
        console.log('Compras res:', res.data)
        setComprasUser([...res.data]);
        console.log('Compras User:', comprasUser)
      }).catch((err) => {
        console.log(err)
        navigate('/login');
      });
 }
  const forceUserUpdate = (state) => {

  }

  const handleUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const handleUserLogin = (event) => {
    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
  }

  const handleFormLogin = (event) => {
    event.preventDefault();
    if (!userLogin.email.trim() || !userLogin.password.trim()) {
      return window.alert('Todos los campos son obligatorias.')
    }
    if (!emailRegex.test(userLogin.email)) {
      return window.alert('El formato del email no es correcto!')
    }
    axios.post(ENDPOINT.login, userLogin)
      .then((res) => {
        if (res.data.especialidad.length > 0) {
          Swal.fire({
            title: "¡Haz iniciado Sesión con éxito!",
            text: "Redirigiendo a página: perfil ...",
            icon: "success"
          }).then(() => {
            navigate(`/profesional/${res.data.id}`);
          });
        } else {
          Swal.fire({
            title: "¡Haz iniciado Sesión con éxito!",
            text: "Redirigiendo a página: perfil ...",
            icon: "success"
          }).then(() => {
            navigate(`/cliente/${res.data.id}`);
          });
        }
      })
      .catch((response) => {
        console.error(response)
        window.alert(`${data.message} 🙁.`)
      })

  }

  const handleForm = (event) => {
    event.preventDefault()

    if (
      !user.email.trim() ||
      !user.password.trim() ||
      !user.nombre.trim() ||
      !user.direccion.trim() ||
      !user.img.trim() ||
      !user.celular.trim()
    ) {
      return window.alert('Todos los campos son obligatorias.')
    }

    if (!emailRegex.test(user.email)) {
      return window.alert('El formato del email no es correcto!')
    }
    axios.post(ENDPOINT.users, user)
      .then(() => {
        window.alert('Usuario registrado con éxito 😀.')
        navigate('/login')
      })
      .catch(({ response: { data } }) => {
        console.error(data)
        window.alert(`${data.message} 🙁.`)
      })
  }


  const changeUserType = (type) => {
    console.log(type);
    setUserType(type);
  }

  const userRegister = () => {
    Swal.fire({
      title: "Usuario registrado con éxito",
      text: "",
      icon: "success"
    })
    if (userType === 'cliente') {
      navigate('/cliente');
    } else {
      navigate('/profesional');
    }
  }


  return (
    <UserContext.Provider value={{
      userType,
      userLogin,
      user,
      changeUserType,
      userRegister,
      handleUser,
      handleUserLogin,
      handleForm,
      getImage,
      handleFormLogin,
      getUser,
      forceUserUpdate,
      getComprasUser,
      comprasUser
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
