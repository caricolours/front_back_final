export const validLogin = ( req, res, next) =>{
    //const { user } = req.body;
    if(!req.body.email || !req.body.password){
        return res.status(400).json({error: "No has ingresado email o password"});
    }
    next();
}
