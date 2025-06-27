# 💬 Real-Time Chat Application – Backend

This is the backend for a real-time chat application built using Node.js, Express, and Socket.io. It powers real-time communication features like live messaging, typing indicators, and online presence for the frontend React client.

## 📘 Overview

The backend manages:

* WebSocket connections via Socket.io
* Real-time message exchange and broadcasting
* User authentication and tracking
* Typing, presence, and notification events
* Optional: Private messages, rooms, and media handling

## 🔥 Key Features

### ✅ Core Features

* 🔄 Real-time bidirectional communication with Socket.io
* 🧑 User session and connection management
* ✍️ Typing indicators
* 🟢 Online/offline presence

### 🚀 Advanced Features (if implemented)

* 🔐 Username-based or JWT authentication
* 🔒 Private and group messaging (using Socket.io rooms)
* 🖼️ File/image sharing with `multer` or base64
* ✅ Message delivery/read receipts
* 🔔 Notifications when new messages are received
* 📢 Notifications when users join/leave a room
* 💌 Reactions to messages
* 📃 Message history & pagination

## ⚙️ Setup Instructions

### 📦 Prerequisites

* [Node.js](https://nodejs.org/) (v18+ recommended)
* npm (comes with Node.js)

### 📁 Installation

Navigate to the backend directory

```bash
cd realtime-chat-app/backend
```

Install dependencies

```bash
npm install
```

### ▶️ Running the Server

```bash
npm start
```

The server will start on the default port **`http://localhost:5000`** (or whichever is configured in `.env` or `server.js`).

### 🔌 Socket.io Setup

The server initializes a Socket.io instance and listens for key events:

```js
io.on("connection", (socket) => {
  // Handle connection
  socket.on("chatMessage", handleMessage);
  socket.on("typing", handleTyping);
  socket.on("disconnect", handleDisconnect);
});
```

### 🌐 API Routes

If applicable, the backend exposes REST endpoints for:

| Route           | Method | Description                  |
| --------------- | ------ | ---------------------------- |
| `/api/messages` | GET    | Fetch chat messages          |
| `/api/users`    | GET    | List active users            |
| `/api/login`    | POST   | Authenticate user (optional) |

You can find route definitions inside:

```bash
src/routes/index.js
```

## 🛠️ Tech Stack

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [Socket.io](https://socket.io/)
* [CORS](https://www.npmjs.com/package/cors) for frontend-backend connection
* [dotenv](https://www.npmjs.com/package/dotenv) for environment variables

## ✅ Example `.env` File

Create a `.env` file in the root:

```env
PORT=5000
CLIENT_URL=http://localhost:3000
```

Use `CLIENT_URL` to allow CORS from frontend.

## 🌐 Deployment Suggestions

* Deploy to [Render](https://render.com/), [Railway](https://railway.app/), or [Heroku](https://www.heroku.com/)
* Ensure WebSocket support and CORS headers are correctly configured
* Use a reverse proxy like NGINX if needed for production scalability

## 👥 Contributing

1. Fork the repository
2. Create your branch: `git checkout -b feature/private-messaging`
3. Commit changes: `git commit -m 'Add private chat support'`
4. Push to branch: `git push origin feature/private-messaging`
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](../LICENSE).
