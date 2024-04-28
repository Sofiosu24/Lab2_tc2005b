const model = require("../models/usuarios.model.js");
module.exports.render_login = async(req,res) =>{
    const usuarioLogeado =
        model.login("user", "pass");
    res.render('usuarios/login',{
        user:usuarioLogeado
    });
}

module.exports.do_login = async(req,res) =>{
    res.status(200).json({
        code: 200,
        msg: "Inicio de sesión correcto!"
    });
}