import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import usuariosRouter from './rutas/rutas.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use('/', usuariosRouter);

app.listen(PORT, () => {
    console.log(`Server On http://localhost:${PORT}`)
});