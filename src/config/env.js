// manejo de variables de entorno, necesita la dependencia de dotenv y env-var para eso
require ('dotenv').config(); // hace que las variables de entorno se seteen en nuestro proceso 
const { get } = require('env-var'); // para darle propiedades de tipo a las variables de entorno

const envs = {
    PORT: get('PORT').required().asPortNumber(), // para que lo tome como un numero valido
    PUBLIC_PATH: get ('PUBLIC_PATH').default('public').asString(), // para que lo tome como un string, y que sea por defult de la carpeta public
}

module.exports = {
    envs
}