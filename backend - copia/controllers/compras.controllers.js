import {getComprasModel, addCompraModel, deleteCompraModel,filtroCompraModel} from '../models/compras.models.js'
import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

const KEY = process.env.JWT_SECRET_KEY

//GET compras
export const getComprasControllers = async (req, res) => {
    try {
        const result = await getComprasModel();
        res.status(200).json(result);
        console.log(result.rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

// POST COMPRAS

export const postAddCompraControllers = async (req, res) => {
    try {
        //console.log(req.body); 
        const { usuario_id, publicacion_id } = req.body;
        console.log(`Datos que trae ${usuario_id, publicacion_id}`)
        if (!usuario_id || !publicacion_id) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }
        const result = await addCompraModel(req.body);
        res.status(201).json(result);
    } catch (error) {
        //console.log(error);
        res.status(500).json({ error: error.message });
    }
};


//DELETE COMPRAS

export const deleteCompraByIdControllers = async (req, res) => {
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
        const result = await deleteCompraModel(id);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'No se encontró ningún evento con este ID' });
        }
        res.send(`El usuario ${email} ha eliminado el evento de id ${id}`);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

//FILTRO

export const getFiltroCompraControllers = async (req, res) => {
    try {
        //console.log(req.body); 
        const { id } = req.params;
        console.log(`Datos que trae en compras ${id}`)
        if (!id) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }
        const result = await filtroCompraModel(id);
        res.status(200).json(result);
    } catch (error) {
        //console.log(error);
        res.status(500).json({ error: error.message });
    }
};
