const mongoose = require('mongoose');
const CONFIG = require('./config');

module.exports = {
    connection: null,
    connect: function () {
        if (this.connection) return this.connection;
        return mongoose.connect(CONFIG.BD).then(connection => {
            this.connection = connection;
            console.log('Conectado a la base de datos');
        }).catch(errror => console.log("-----------------BD: Error al conectar => ", error));
    }
}