const fs = require('node:fs');

// fs.readFile('./archivo.txt', (error,datos) => {
//     if (error) {
//         console.log('Error al leer el archivo');
//     }else{
//         console.log(datos.toString());
//     }

// })

function leer(error, datos) {
    if (error) {
        console.log('Error al leer el archivo');
    }else{
        console.log(datos.toString());
    }
}

fs.readFile('./archivo.txt', leer)