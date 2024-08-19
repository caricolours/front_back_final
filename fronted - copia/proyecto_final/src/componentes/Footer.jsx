import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Navegación</h4>
                    <ul>
                        <li><a href="/" onClick={() => navigate('/home')}>Home</a></li>
                        <li><a href="/servicios" onClick={() => navigate('/servicios')}>Servicios</a></li>
                        <li><a href="/registro" onClick={() => navigate('/registro')}>Registro</a></li>
                        <li><a href="/login" onClick={() => navigate('/login')}>Login</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className="">Contacto</h4>
                    <p>Dirección: Calle Falsa 123, Santiago, Chile</p>
                    <p>Teléfono: +569 45657890</p>
                    <p>Email: info@ejemplo.com</p>
                </div>
                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <ul className="social-media">
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 - Adiestramiento Canino. Todos los derechos reservados.</p>
            </div>
        </footer>
  )
}

export default Footer
