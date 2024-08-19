import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { ServiciosContext } from "./ServiciosContext";
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "./UserContext";
export const CarritoContext = createContext();
import { ENDPOINT } from "../config/config";

let totalCarrito = 0;

const CarritoProvider = ({ children }) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { publicaciones } = useContext(ServiciosContext);
    const [servCarrito, setServCarrito] = useState([]);
    const [totalCantidad, setTotalCantidad] = useState(0);
    const [total, setTotal] = useState(0);
    const [compras, setCompras] = useState([]); 

    useEffect(() => {
        let totalCarrito = 0;
        setTotalCantidad(servCarrito.length);
        servCarrito.forEach(s => {
            totalCarrito += Number(s.precio);
            // const valor = {...s}
            //totalCarrito = valor.precio += totalCarrito
        });
        setTotal(totalCarrito);
    }, [servCarrito, setServCarrito])

    const addToCarrito = (id) => {

        const servSelected = publicaciones.find(s => s.id === id);
        setCompras([...compras, {
            publicacion_id: servSelected.id,
            usuario_id: user.id ? user.id : 1
        }])
        console.log(compras);
        setServCarrito([...servCarrito,
        {
            id: servSelected.id,
            titulo: servSelected.titulo,
            precio: servSelected.precio,
            foto: servSelected.foto,
            profesional: servSelected.profesional
        }]);
        toast.success("Servicio añadido al carrito");
    }

    const removeToCarrito = (id) => {
        setServCarrito(servCarrito.filter(s => s.id !== id));
        toast.error("Servicio Removido del Carrito")
    }
    const goToPagar = () => {
        console.log(compras)
        compras.map(compra => {
            axios.post(ENDPOINT.compras, compra).then(() => {
                Swal.fire({
                    title: "Procesando pago",
                    text: "Espere un momento...",
                    icon: "success"
                }).then(() => {
                    navigate("/pagos");
                });
            }).catch((err) => {
                console.log(err);
            })
        })
    };
    const goToInicioSesion = () => {
        Swal.fire({
            title: "¡Haz iniciado Sesión con éxito!",
            text: "Redirigiendo a página de pago...",
            icon: "success"
        }).then(() => {
            navigate("/pagousuario");
        });
    };


    const removeAllFromCarrito = () => {
        setServCarrito([]);
        navigate("/");
    }

    return (
        <CarritoContext.Provider value={{ addToCarrito, removeToCarrito, goToPagar, totalCantidad, total, servCarrito, goToInicioSesion, removeAllFromCarrito, compras }}>
            {children}
        </CarritoContext.Provider>
    )

}

export default CarritoProvider