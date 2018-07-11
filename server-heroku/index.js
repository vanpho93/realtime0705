const io = require('socket.io')(process.env.PORT || 3000);

io.on('connection', function (socket) {
    socket.on('CLIENT_SEND_MESSAGE', msg => {
        io.emit('SERVER_SEND_MESSAGE', msg);
    });
});

console.log('SERVER STARTED!!!');
