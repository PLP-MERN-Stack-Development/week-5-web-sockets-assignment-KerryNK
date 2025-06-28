const users = new Map(); // Map username => socket.id

module.exports = (io, socket) => {
  // Add user to map if not already present
  if (!users.has(socket.username)) {
    users.set(socket.username, socket.id);
    io.emit('users', Array.from(users.keys()));
  }

  // Global chat message
  socket.on('chat message', (msg) => {
    io.emit('chat message', {
      user: socket.username,
      text: msg,
      time: new Date(),
    });
  });

  // Private message: { to: username, text: message }
  socket.on('private message', ({ to, text }) => {
    const toSocketId = users.get(to);
    if (toSocketId) {
      io.to(toSocketId).emit('private message', {
        from: socket.username,
        text,
        time: new Date(),
      });
    }
  });

  // Typing indicator (global)
  socket.on('typing', () => {
    socket.broadcast.emit('typing', socket.username);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    users.delete(socket.username);
    io.emit('users', Array.from(users.keys()));
    console.log(`User disconnected: ${socket.username}`);
  });
};

module.exports = socketHandler;