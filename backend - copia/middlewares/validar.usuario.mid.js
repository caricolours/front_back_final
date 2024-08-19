export const validarUsuarioRegistrado = (req, res, next) => {
    const { usuario } = req.body;
    if (!req.body.email || !req.body.password || !req.body.nombre || !req.body.img || !req.body.celular || !req.body.direccion) {
        return res.status(400).json({ error: "el email, password, nombre, imágen, celular y dirección deben estar presentes" });
    }
    next();
}