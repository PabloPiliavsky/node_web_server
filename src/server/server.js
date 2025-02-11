// manejo del servidor
/*
si fuese un servicio web, como lo fue antes de su migracion, seria:
const express = require('express');// guardar en una constante lo traidode la dependencia de express que debe estar instalado previamente en el proyecto
const path = require('path');// propio de node
*/
import express from 'express';// guardar en una constante lo traidode la dependencia de express que debe estar instalado previamente en el proyecto
import path from 'path';// propio de node

export const startServer = (options) => {
    const { port, public_path = 'public'} = options //options, que llega desde el app.js, le asigna un valora port y path para configurar el servidor
    const app = express(); // se crea una instancia de express y se guarda en una constante app ejecutado

    //para usar middlewere se ula palabra reservada use
    app.use(express.static(public_path)); //contenido estatico que se pone a disponibilidad en la web dada por public_path

    //como lapagina tomada es una single page no necesita mas que una ruta get, sino habria que hacer las necesarias por el ruteo
    app.get('*', (req, res) => {//req es de request que es la peticion que hace el navegador y res es de response que es lo que respondemos desde el servidor. El * hace que cualquier url puesta en el hostindicado tome al index.html que esta configurado
        const indexpath = path.join(__dirname + `../../../${public_path}/index.html`) ; //es para acceder a las carpetas, en este caso al public. Las comillas esas son para usar ${}
        res.sendFile(indexpath); //envia el archivo index.html 
    }); 

    app.listen(port, () => {// para escuchar que si se llama desde el naegador pueda devolver la pagina
        console.log(`Server running on port ${port}`); //mensaje en consola para saber que el servidor esta corriendo
        
    } ) ;
}

/* esto no se exporta asi porque ahora no es el mismo archivo que antes, ahora es un modulo que se exporta
module.exports = { startServer } //exporta la funcion startServer para que pueda ser utilizada en otro archivo*/