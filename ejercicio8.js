const http = require('node:http');

const servidor = http.createServer((pedido, respuesta) => {
    respuesta.writeHead(200, {'content-type': 'text/html'})
    respuesta.write('<!doctype html><html><head></head><body><h1>Hola mundo</h1><p>Welcome to my practice with node.js</p></body></html>')
    respuesta.end()
})

servidor.listen(8888)
console.log('El servidor web esta iniciado')