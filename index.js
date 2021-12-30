const BD = require('./src/config/conexion');
const CONFIG = require('./src/config/config');
const app = require('./src/app');
BD.connect();

async function main() {
    await app.listen(CONFIG.PORT, function (error) {
        if (error) return console.log(error);
        console.log(`Corriendo en el puerto: [${CONFIG.PORT}]`);
    });
}

main();