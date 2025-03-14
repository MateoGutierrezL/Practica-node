const fs = require('node:fs');

let contador = 1
while (contador < 6) {

    fs.writeFile(`./archivo${contador}.txt`, `Linea 1 \n Mateo Gutierrez{contador} \nmateo@gmail.com`, error => {
        if (error){
            console.log('Error al escribir el archivo');
        }else {
            console.log('Archivo escrito correctamente');
        }
    
    })

    
    contador++
        
}
