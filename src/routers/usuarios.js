const { Router } = require('express');
const router = Router();
const {usuarioGet,usuarioPut,usuarioPost, usuarioDelete, usuarioPatch } = require('../controller/usuarios')

router.get('/', usuarioGet);

router.put('/', usuarioPut);

router.post('/', usuarioPost);

router.delete('/', usuarioDelete);

router.patch('/', usuarioPatch);

module.exports = router;