const os = require('os');
console.log('sistema operativo: ' + os.platform());
console.log('version del sistema operativo: ' + os.release());
console.log('Memoria total: ' + os.totalmem() + ' bytes');
console.log('Memora libre: ' + os.freemem());
console.log('CPUs: ' + os.cpus().length);
console.log('Arquitectura CPU: ' +os.arch());




