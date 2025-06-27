const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 5000;

// Middleware to serve static files from the frontend build
app.use(express.static(path.join(__dirname, '../../frontend/build')));

// Socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });

    // Additional socket event handlers can be added here
});

// Serve the frontend application
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});