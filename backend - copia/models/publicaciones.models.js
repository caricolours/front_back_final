import pool from '../database/configuracion.js'


export const getPublicacionesModel = async () => {
    const result = await pool.query('SELECT * FROM publicaciones')
    console.log(result);
    return result.rows;
};

export const AddPublicacionModel = async ({usuario_id, titulo, descripcion, img, precio, especialidad}) => {

    const result = await pool.query(
        'INSERT INTO publicaciones (usuario_id, titulo, descripcion, img, precio, especialidad) VALUES ($1 ,$2 ,$3 ,$4 ,$5, $6);',
        [usuario_id, titulo, descripcion, img, precio, especialidad]);
    console.log(result.rows);
    return result.rows[0]
};
//tengo duda ?
export const getPublicacionByIdUsuarioModel = async (id) => {
    const result = await pool.query(
        'SELECT * FROM publicaciones WHERE usuario_id = $1;', [id]);
    //console.log(result);
    return result.rows
}

export const getPublicacionByIdModel = async (id) => {
    const result = await pool.query(
        'SELECT * FROM publicaciones WHERE id = $1;', [id]);
    //console.log(result);
    return result.rows[0]
}

export const updatePublicacionModel = async (id, {titulo, descripcion, img, precio}) => {
    const result = await pool.query('UPDATE publicaciones SET titulo=$1, descripcion=$2, img=$3, precio=$4 WHERE id=$5 RETURNING *;',
        [titulo, descripcion, img, precio, id]);
    return result.rows;
};

export const deletePublicacionModel = async (id) => {
    const result = await pool.query(
        'DELETE FROM publicaciones WHERE id = $1;', [id]);
        console.log(result.rows);
        return result.rows
}