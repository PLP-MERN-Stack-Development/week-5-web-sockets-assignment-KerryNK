const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app); // Use lowercase 'server' for the HTTP server

// Initialize Socket.io server
const io = new Server(server, {
    cors: {
        origin: '*', // Allow all origins for development; adjust in production
    }
});

// Serve a basic route to test server
app.get('/', (req, res) => {
    res.send('Socket.io Chat Server is running!');
});

// Listen for client connections
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Listen for chat messages from clients
    socket.on('chat message', (msg) => {
        // Broadcast the message to all connected clients
        io.emit('chat message', msg);
    });

    // Handle client disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});