const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// ✅ Broadcast one shared number to ALL clients every second
setInterval(() => {
    const sharedNumber = Math.floor(Math.random() * 10);
    io.emit('number', sharedNumber); // All clients receive same number
}, 1000);

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
