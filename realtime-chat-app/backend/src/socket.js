// This file manages Socket.io events. It handles user connections, broadcasts chat messages, and manages typing indicators and online/offline status.

const { Server } = require("socket.io");

const socketHandler = (server) => {
    const io = new Server(server);

    let users = {};

    io.on("connection", (socket) => {
        console.log("A user connected: " + socket.id);

        socket.on("join", (username) => {
            users[socket.id] = username;
            socket.broadcast.emit("userConnected", username);
        });

        socket.on("chatMessage", (msg) => {
            io.emit("chatMessage", { user: users[socket.id], message: msg });
        });

        socket.on("typing", () => {
            socket.broadcast.emit("typing", users[socket.id]);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected: " + socket.id);
            socket.broadcast.emit("userDisconnected", users[socket.id]);
            delete users[socket.id];
        });
    });
};

module.exports = socketHandler;