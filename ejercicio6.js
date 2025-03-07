const fs = require('node:fs/promises');

// fs.readFile('./archivo.txt', (error,datos) => {
//     if (error) {
//         console.log('Error al leer el archivo');
//     }else{
//         console.log(datos.toString());
//     }
// })

fs.readFile('./archivo.txt').then(datos => {
    console.log(datos.toString())
}).catch(error => {
    console.log(error)
})

// function leer(error, datos) {
//         if (error) {
//         console.log('Error al leer el archivo');
//     }else{
//         console.log(datos.toString());
//     }
// }