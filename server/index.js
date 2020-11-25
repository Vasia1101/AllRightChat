const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const router = require('./router');

const PORT = process.env.PORT || 5000;

const app = express();

const server = http.createServer(app);
const io = socketio(server);

// socket functional
io.on('connection', socket => {
    console.log('connect soccet');

    socket.on('disconnect', () => {
        console.log('left connect');
    })
});

app.use(router);

server.listen(PORT, () => console.log(`server star ${PORT}`));