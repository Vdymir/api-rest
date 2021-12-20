const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    name: {
        type: 'string',
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: 'string',
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: 'string',
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: 'string',
    },
    rol: {
        type: 'string',
        required: [true, 'El rol es obligatorio'],
        emum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    status: {
        type: 'boolean',
        default: true
    },
    google: {
        type: 'boolean',
        default: false
    }
});

module.exports = model('Usuario', UsuarioSchema);