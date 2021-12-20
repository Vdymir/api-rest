const { Schema, model } = require('mongoose')

const RoleSchema = Schema({
    rol: {
        type: String,
        required: [true, 'EL ROL ES OBLIGATORIO']
    }
});

module.export = model('Role', RoleSchema);