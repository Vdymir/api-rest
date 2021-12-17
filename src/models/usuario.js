const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    img: {
        type: 'string',
    },
    rol: {
        type: 'string',
        required: true,
        emum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    status: {
        type: boolean,
        default: true
    },
    google: {
        type: 'boolean',
        default: false
    }
});

module.exports = model('Usuario', UsuarioSchema);