const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const router = require('./router');

const PORT = process.env.PORT || 5000;

const app = express();

options= {
    cors: true,
    origins: ["http://localhost:3000"],
};

const server = http.createServer(app);
const io = socketio(server, options);


// socket functional
io.on('connect', socket => {
    console.log('connect soccet');
    socket.on('login', ({ name, room }, callback) => {
        console.log(name, room);
        const error = true;
        if(error) {
            callback({ error: 'error' });
        };
    });

    socket.on('disconnect', () => {
        console.log('left connect');
    });
});


app.use(router);

server.listen(PORT, () => console.log(`server star ${PORT}`));