/*
require ('dotenv').config(); // hace que las variables de entorno se seteen en nuestro proceso 
const { envVar } = require('env-var'); // para darle propiedades de tipo a las variables de entorno
*/

// manejo de variables de entorno, necesita la dependencia de dotenv y env-var para eso
import env from 'dotenv'; // hace que las variables de entorno se seteen en nuestro proceso 
import envVar from 'env-var'; // para darle propiedades de tipo a las variables de entorno
env.config(); //configura las variables de entorno
export const envs = {
    PORT: envVar.get('PORT').required().asPortNumber(), // para que lo tome como un numero valido
    PUBLIC_PATH: envVar.get('PUBLIC_PATH').default('public').asString(), // para que lo tome como un string, y que sea por defult de la carpeta public
}
