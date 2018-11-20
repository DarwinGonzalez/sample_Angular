let express = require('express')
let app = express();
let http = require('http');
let server = http.Server(app);
let socketIO = require('socket.io');
 let io = socketIO(server);

const port = process.env.PORT || 4000;

io.on('connection', (socket) => {
    console.log('usuario conectado');
    socket.on('nuevo_mensaje', (mensaje) => {
        console.log(mensaje);
        io.emit('nuevo_mensaje', mensaje);
    });
});
server.listen(port, () => {
    console.log(`Servidor a la escucha en el puerto: ${port}`);
});