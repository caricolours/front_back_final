import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

const KEY = process.env.JWT_SECRET_KEY

export const jwtSign = async (playload) => {
    const token = jwt.sign(playload, KEY, { expiresIn: '1m' });
return token;
}



export const jwtVerify = (token) => jwt.verify(token, KEY)