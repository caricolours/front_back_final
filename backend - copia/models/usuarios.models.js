import pool from '../database/configuracion.js'
import bcrypy from 'bcryptjs';

export const getUsuariosModel = async () => {
    const result = await pool.query('SELECT * FROM usuarios')
    console.log(result);
    return result.rows;
};

export const getUsuariosByIdModel = async (id) => {
    const result = await pool.query('SELECT * FROM usuarios WHERE id=$1', [id])
    console.log(result);
    return result.rows[0];
};

export const registerModel = async ({nombre, especialidad = '', img, celular, direccion, email, password}) => {
    const crearPass = bcrypy.hashSync(password)
    const result = await pool.query(
        'INSERT INTO usuarios (id, nombre, especialidad, img, celular, direccion, email, password) VALUES (DEFAULT, $1 ,$2 ,$3 ,$4 ,$5 ,$6 ,$7);',
        [nombre, especialidad, img, celular, direccion, email, crearPass]);
    console.log(result.rows);
    return result.rows[0]
};

export const loginModel = async (email, password) => {
console.log(email, password)
    const result = await pool.query(
        'SELECT id, email, especialidad, password FROM usuarios WHERE email = $1;', [email]);
    return result.rows[0]
}
export const updateModel = async (id, { nombre, especialidad, img, celular, direccion, email, password }) => {
    const result = await pool.query('UPDATE usuarios SET nombre=$1, especialidad=$2, img=$3, celular=$4, direccion=$5, email=$6, password=$7 WHERE id=$8 RETURNING *;',
        [nombre, especialidad, img, celular, direccion, email, password, id]);
    return result.rows;
};

export const deleteModel = async (id) => {
    const result = await pool.query(
        'DELETE FROM usuarios WHERE id = $1;', [id]);
        console.log(result.rows);
        return result.rows
}