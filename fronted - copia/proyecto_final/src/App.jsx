import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from './componentes/Navigation';
import NotFound from './views/NotFound';
import Home from './views/Home'
import Registro from './views/Registro'
import Login from "./views/Login";
import Servicios from "./views/Servicios.jsx"
import ServiciosDet from "./views/ServiciosDet.jsx";
import Carrito from "./views/Carrito.jsx";
import Pagos from "./views/Pagos.jsx";
import PerfilUsuario from './views/PerfilUsuario.jsx'
import PerfilProfesional from "./views/PerfilProfesional.jsx";
import CrearPublicacion from "./views/CrearPublicacion.jsx";
import Footer from "./componentes/Footer.jsx";
import ModoPagos from "./views/ModoPagos.jsx";
import ModoPagoLogin from "./views/ModoPagoLogin.jsx";


function App() {


  return (
    <div>

      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<Home />}>
        </Route>
        <Route
          path='/registro'
          element={<Registro />}>
        </Route>
        <Route
          path='/login'
          element={<Login />}>
        </Route>
        <Route
          path='/servicios'
          element={
            <Servicios />
          }>
        </Route>
        <Route
          path='/servicio/:id'
          element={
            <ServiciosDet />
          }>
        </Route>
        <Route
          path='/carrito'
          element={
            <Carrito />
          }>
        </Route>
        <Route
          path='/cliente/:id'
          element={<PerfilUsuario />}>
        </Route>
        <Route
          path='/profesional/:id'
          element={<PerfilProfesional />}>
        </Route>
        <Route
          path='/publicacion'
          element={<CrearPublicacion />}>
        </Route>
        <Route
          path='/pagos'
          element={<Pagos />}>
        </Route>
        <Route
          path='/pagoinvitado'
          element={<ModoPagos />}>
        </Route>
        <Route
          path='/pagousuario'
          element={<ModoPagoLogin />}>
        </Route>
        <Route
          path='*'
          element={<NotFound />}>
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
