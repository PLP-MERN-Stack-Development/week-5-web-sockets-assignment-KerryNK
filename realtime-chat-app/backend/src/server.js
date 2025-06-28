const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const socketHandler = require('./socket');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: '*' }
});

// Middleware to check username on connection (simple auth)
io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.username = username;
  next();
});

app.get('/', (req, res) => {
  res.send('Socket.io Chat Server with Authentication');
});

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.username} (ID: ${socket.id})`);
  socketHandler(io, socket);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
