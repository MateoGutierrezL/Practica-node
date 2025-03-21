const http = require('node:http');
const fs = require('node:fs');

const mime = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'png': 'image/png',
    'jpg': 'image/jpg',
    'ico': 'image/x-icon',
    'mp3': 'audio/mpeg3',
    'mp4': 'video/mp4',
    'pdf': 'application/pdf'
}

const cache = {}

const servidor =http.createServer((pedido, respuesta) =>{
    const url = new URL('http://localhost:8888' + pedido.url);
    let camino = 'static' + url.pathname;
    if (camino == 'static/') 
        camino = 'static/index.html';
    if (cache[camino]){
        const vec = camino.split('.')
        const extension = vec[vec.length -1]
        const mimearchivo = mime[extension]
        respuesta.writeHead(200, {'Content-type': mimearchivo})
        respuesta.write(cache[camino])
        respuesta.end()
        console.log('Recurso usado del cache: ' + camino)
    } else{
        fs.stat(camino, error =>{
            if (!error) {
                fs.readFile(camino, (error, contenido) => {
                    if (error) {
                        respuesta.writeHead(500, {'Content-type': 'text]/plain'})
                        respuesta.write('Error Interno')
                        respuesta.end()
                    } else{
                        cache[camino] = contenido
                        const vec = camino.split('.')
                        const extension = vec[vec.length - 1]
                        const mimearchivo = mime[extension]
                        respuesta.writeHead(200, {'content-type': mimearchivo})
                        respuesta.write(contenido)
                        respuesta.end()
                        console.log('Recurso leido del disco: ' + camino)
                    }
                })
            }else{
                respuesta.writeHead(404, {'content-type': 'text/html'});
                respuesta.write('<!doctype html><html><head></head><body><h1>Error: 404: Recurso inexistente</h1></body></html>');
                respuesta.end();
            }
        
        })
    }
})

servidor.listen(8888)
console.log('Servidor web iniciado')