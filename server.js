const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, { cors: { origin: "*" } });

io.on('connection', (socket) => {
    console.log('Пользователь зашел:', socket.id);
    socket.on('message', (data) => io.emit('message', data));
});

http.listen(3000, () => {
    console.log('Сервер запущен на 3000 порту');
});
