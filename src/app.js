
const { envs } = require('./config/env'); // trae las variables de entorno
const { startServer } = require('./server/server.js')

function main (){
    startServer({ // cuidado con mayusculas y minusculas en los llamados de las variables de entorno
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    });
}

// funcion asincrona agnostica (sin nombre) que se autoconvoca, o sea, que se ejecuta sola por los parentesis ()
( async () => {
    main();
}) ();
