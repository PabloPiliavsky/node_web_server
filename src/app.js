/*
los llamados de los otros archivos se hacen con require en constantes const porque es un servicio web en un primer momento
pero si fuese un servicio de base de datos se haria con import... from... porque es un servicio de base de datos.
entonces siendo un servicio web quedaria asi:
const { envs } = require('./config/env'); // trae las variables de entorno
const { startServer } = require('./server/server.js')
y como servicio migrado y poder usar bases de datos seria:
*/ 
import { envs } from './config/env.js'; // trae las variables de entorno
import { startServer } from './server/server.js';

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
