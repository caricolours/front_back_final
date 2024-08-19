import { Router } from 'express';
import {getUsuariosControllers, postRegisterControllers, postLoginControllers, deleteByIdControllers, updateControllers, getUsuariosByIdControllers} from '../controllers/usuarios.controllers.js'
import {getPublicacionesControllers, postAddPublicacionControllers, getPublicacionByIdControllers, updatePublicacionControllers, deletePublicacionByIdControllers, getPublicacionesByIdControllers} from '../controllers/publicaciones.controllers.js'
import {getComprasControllers, deleteCompraByIdControllers, postAddCompraControllers, getFiltroCompraControllers} from '../controllers/compras.controllers.js'
import {validarUsuarioRegistrado} from '../middlewares/validar.usuario.mid.js'
import {authToken} from '../middlewares/usuarios.mid.js'
import {validLogin} from '../middlewares/validar.login.mid.js'
import {authenticateToken} from '../middlewares/delete.usuario.mid.js'

const router = Router();

router.get('/usuarios', authToken, getUsuariosControllers)
router.get('/usuarios/:id', getUsuariosByIdControllers)
router.post('/usuarios', validarUsuarioRegistrado, postRegisterControllers)
router.post('/login', validLogin, postLoginControllers)
router.delete('/usuarios/:id', authenticateToken, deleteByIdControllers)
router.put('/usuarios/:id', authToken, updateControllers)

router.get('/publicaciones', getPublicacionesControllers)
router.post('/publicaciones', postAddPublicacionControllers)
router.get('/publicaciones/:id', getPublicacionByIdControllers)
router.get('/publicaciones/p/:id', getPublicacionesByIdControllers)
router.put('/publicaciones/:id', authToken, updatePublicacionControllers)
router.delete('/publicaciones/:id', authenticateToken, deletePublicacionByIdControllers)

router.get('/compras', authToken, getComprasControllers)
router.post('/compras', postAddCompraControllers)
router.delete('/compras/:id', authenticateToken, deleteCompraByIdControllers)
router.get('/compras/:id', getFiltroCompraControllers)


router.all('*', (req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});


export default router;