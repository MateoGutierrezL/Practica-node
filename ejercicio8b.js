const http = require('node:http');

const servidor = http.createServer((pedido, respuesta) => {
    const url = new URL('http://localhost:8888' + pedido.url)
    console.log('href: ' + url.href)
    console.log('pathname:' + url.pathname)
    console.log('origin:' + url.origin)
    console.log('username:' + url.username)
    console.log('protocol:' + url.protocol)
    console.log('host:' + url.host)
    console.log('hostname:' + url.hostname)
    console.log('port:' + url.hostname)
    console.log('search:' + url.search)
    url.searchParams.forEach((valor, parametro) => {
        console.log('Nombre del Parametro:' + parametro +', Valor del Parametro:' + valor)
    })
    respuesta.writeHead(200, {'content-type': 'text/html'})
    respuesta.write('<!doctype html><html><head></head><body><h1>Hola mundo</h1><p>Welcome to my practice with node.js<br> this is a new line during the web service</p></body></html>')
    respuesta.end()
});

servidor.listen(8888)
console.log('El servidor web esta iniciado')