//Crear un programa que requiera el modulo os, que muestre lo disponible en RAM luego cree un arreglo 
//con 100000 de numeros enteros positivos, luego muestre el uso de la memoria 

const os = require('os');

console.log('Antes del arreglo');
console.log('----------------------------');
console.log('Memora libre: ' + os.freemem());
console.log('-----------------------')

numeros = []

contador = 0
while (contador < 100000000) {
    
    numeros.push(contador)
    contador++
}

console.log('Despues del arreglo')
console.log('-----------------------')
console.log('Memora libre: ' + os.freemem());
console.log('-----------------------')


