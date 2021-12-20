const bcryptjs = require('bcryptjs');
const {response, request} = require('express')
const Usuario = require('../models/usuario');

//-------GET
const usuarioGet = (req =  request, res = response) => {

    res.json({
        ok: true,
    });
}

//-------PUT
const usuarioPut = (req =  request, res = response) => {
    res.json({
        ok: true,
        mensaje: 'get API | controller'
    });
}

//-------POST
const usuarioPost = async (req =  request, res = response) => {
    const { name, email, password, rol } = req.body
    const usuario = new Usuario({ name, email, password, rol })

    // ------ VALIDAR EMAIL --------------------------------
    const validarEmail = await Usuario.findOne({ email })
    if (validarEmail) {
        return res.status(400).json({
            msg: "ESTE CORREO YA ESTA REGISTRADO"
        })
    }

    // ------ VALIDAR CLAVE --------------------------------
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );


    await usuario.save();

    res.json({
        ok: true,
        usuario,
    });
}

//-------PATCH
const usuarioPatch = (req =  request, res = response) => {
    res.json({
        ok: true,
        mensaje: 'get API | controller'
    });
}

//-------DELETE
const usuarioDelete = (req =  request, res = response) => {
    res.json({
        ok: true,
        mensaje: 'get API | controller'
    });
}
module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioPatch,
    usuarioPost,
    usuarioDelete
};