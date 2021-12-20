const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { validateInputs } = require('../middlewares/validateInputs');
const {usuarioGet,usuarioPut,usuarioPost, usuarioDelete, usuarioPatch } = require('../controller/usuarios');

router.get('/', usuarioGet);

router.put('/', usuarioPut);

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo no es valido').isEmail(),
    check('password', 'La contraseña debe ser mayor a 6 letras').isLength({ min: 6 }),
    check('rol', 'El rol no es valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validateInputs
] ,usuarioPost);

router.delete('/', usuarioDelete);

router.patch('/', usuarioPatch);

module.exports = router;