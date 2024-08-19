import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

const KEY = process.env.JWT_SECRET_KEY

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'No se proporcionó un token de autenticación' });
    }

    const token = authHeader.split('Bearer ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token de autenticación no válido' });
    }

    try {
        const decodedToken = jwt.verify(token, KEY);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido' });
    }
};
