import { getUsuariosModel, registerModel, loginModel, deleteModel, updateModel, getUsuariosByIdModel } from '../models/usuarios.models.js'
import { jwtSign } from '../jwt/jwt.js'
import bcrypy from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

const KEY = process.env.JWT_SECRET_KEY

//GET USUARIOS
export const getUsuariosControllers = async (req, res) => {
    try {
        const usuarios = await getUsuariosModel();
        res.status(200).json({ usuarios: usuarios });
        console.log(usuarios.rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};
//GET USUARIOS POR ID
export const getUsuariosByIdControllers = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getUsuariosByIdModel(id);
        res.status(200).json(user);
        console.log(user.rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

//POST REGISTRARSE
export const postRegisterControllers = async (req, res) => {
    try {

        const usuarios = await registerModel(req.body);
        res.status(201).json({ user: usuarios });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
//POST LOGIN
export const postLoginControllers = async (req, res) => {
    try {
        const { email, password } = req.body
        //console.log(email, password) //Funciona bien

        if (!email || !password) {
            return res.status(400).json({ code: 400, message: "No has ingresado email o password" });
        }
        const result = await loginModel(email, password)
        console.log('Error:', result)
        if (!result) {
            return res.status(404).json({ code: 404, message: "No se encontró ningún usuario con estas credenciales" })
        }
        //console.log(result)
        const validarPass = bcrypy.compareSync(password, result.password);
        if (!validarPass) {
            return res.status(403).json({ code: 403, message: "Contraseña incorrecta" });
        }
        if (!result.email) {
            return res.status(500).json({ code: 500, message: "El usuario no tiene un correo electrónico asociado" });
        }

        const token = await jwtSign(result);
        console.log(result)
        res.status(200).json({
            code: 200,
            token,
            id: result.id,
            especialidad: result.especialidad,
            message: `Bienvenido, ${result.email} has iniciado sesion`
            
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
// PUT POR ID

export const updateControllers = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.body)
        if (!id) {
            return res.status(400).json({ message: 'ID es requerido' });
        }
        const result = await updateModel(id, req.body);
        
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

// DELETE POR ID
export const deleteByIdControllers = async (req, res) => {
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
        const result = await deleteModel(id);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'No se encontró ningún evento con este ID' });
        }
        res.send(`El usuario ${email} ha eliminado el evento de id ${id}`);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

