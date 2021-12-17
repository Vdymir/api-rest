const express = require('express');
const cors = require('cors');
const usuarios = require('../routers/usuarios');
const { dbConnect } = require('../db/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT

        //Coneccion a la base de datos
        this.conection();
        
        // Middlewares
        this.middleware();

        // Rutas
        this.route();
    }

    async conection() {
        await dbConnect()
    }

    middleware() {
        this.app.use(cors())
        this.app.use( express.json() );
        this.app.use(express.static('/public'));
    }

    route() {
        this.app.use('/api/usuarios', usuarios)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('listening on port ' + this.port);     
        })
    }
}

module.exports = Server;