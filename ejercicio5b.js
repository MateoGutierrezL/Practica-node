const fs = require('node:fs/promises')

fs.writeFile('./archivo1b.txt.pdf', 'linea1\nlinea 2\n creado con promesas.').then(() => {
    console.log('El archivo de texto fue creado empleando promesas')
    }).catch(error => {
        console.log(error)
    })

