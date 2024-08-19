import { getPublicacionesModel, AddPublicacionModel, getPublicacionByIdUsuarioModel, updatePublicacionModel, deletePublicacionModel, getPublicacionByIdModel } from '../models/publicaciones.models.js'
import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

const KEY = process.env.JWT_SECRET_KEY

//GET PUBLICACIONES
export const getPublicacionesControllers = async (req, res) => {
    try {
        const result = await getPublicacionesModel();
        res.status(200).json(result);
        console.log(result.rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};
//POST ADD PUBLICACION
export const postAddPublicacionControllers = async (req, res) => {
    try {
        console.log(req.body); 
        const { usuario_id, titulo, descripcion, img, precio } = req.body;
        if (!usuario_id || !titulo || !descripcion || !img || !precio) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }
        const result = await AddPublicacionModel(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
// GET PUBLICACION BY ID USUARIO
export const getPublicacionByIdControllers = async (req, res) => {
    try {
        const { id } = req.params; 
        console.log('id_usuario publicacion:', id)
        const result = await getPublicacionByIdUsuarioModel(id);
        
        if (!result) {
            return res.status(404).json({ error: "Publicación no encontrada" });
        }
        
        res.status(200).json(result);
    } catch (error) {
        console.error('Error al obtener la publicación:', error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

//get por id publicacion

export const getPublicacionesByIdControllers = async (req, res) => {
    try {
        const { id } = req.params; 
        console.log('id publicacion:', id)
        const result = await getPublicacionByIdModel(id);
        
        if (!result) {
            return res.status(404).json({ error: "Publicación no encontrada" });
        }
        
        res.status(200).json(result);
    } catch (error) {
        console.error('Error al obtener la publicación:', error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}
// PUT POR ID

export const updatePublicacionControllers = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        if (!id) {
            return res.status(400).json({ message: 'ID es requerido' });
        }
        const result = await updatePublicacionModel(id, req.body);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'Publicacion no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

// DELETE POR ID
export const deletePublicacionByIdControllers = async (req, res) => {
    try {
        const { id } = req.params;
        const authHeader = req.header("Authorization");
        if (!authHeader) {
            return res.status(401).json({ error: 'No se proporcionó un token de autenticación' });
        }
        const token = authHeader.split('Bearer ')[1];
        if (!token) {
            return res.status(401).json({ error: 'Token de autenticación no válido' });
        }
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, KEY);
        } catch (error) {
            return res.status(401).json({ error: 'Token inválido' });
        }
        const { email } = decodedToken;
        const result = await deletePublicacionModel(id);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'No se encontró ningún evento con este ID' });
        }
        res.send(`El usuario ${email} ha eliminado el evento de id ${id}`);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

