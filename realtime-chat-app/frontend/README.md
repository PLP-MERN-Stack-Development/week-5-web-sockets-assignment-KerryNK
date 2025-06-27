# 💬 Real-Time Chat Application – Frontend

This is the frontend for a real-time chat application built with React and Socket.io. It supports global and private messaging, typing indicators, and user presence in real time.

## 🚀 Project Overview

This project is part of the Week 5: Real-Time Communication with Socket.io assignment. It demonstrates a real-time, full-duplex communication system between clients and a Node.js server using Socket.io. The frontend is built in React and connects seamlessly to the backend via WebSockets.

## 🔧 Getting Started

Follow these steps to run the frontend locally:

### 1. Clone the repository

```bash
git clone <repository-url>
cd realtime-chat-app/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the application

```bash
npm start
```

The app will open at `http://localhost:3000`.

## 🌟 Features

### ✅ Core Features

* ✅ Real-time global chat
* ✅ Username-based authentication
* ✅ Messages display with timestamps and sender’s name
* ✅ Typing indicators
* ✅ Online/offline user status

### 🚀 Advanced Features (Implemented)

* 🕵️ Private messaging
* 📁 Image/file sharing
* 📬 Read receipts
* ❤️ Message reactions
* 🔔 Real-time and browser notifications

### 🎯 Optimizations

* ♻️ Reconnection logic
* 🔍 Message search
* 📥 Message pagination
* 💬 Delivery acknowledgment
* 📱 Fully responsive design

## 🗂️ Folder Structure

```bash
src/
├── components/       # Reusable UI components like Chat, MessageList, UserList, etc.
├── pages/            # Page-level components (e.g., LoginPage, ChatPage)
├── hooks/            # Custom React hooks (e.g., useSocket, useTypingIndicator)
├── context/          # Global context for authentication and chat state
├── assets/           # Static files (images, icons)
├── App.js            # Application routes
└── index.js          # Entry point
```

## 🛠️ Tech Stack

* [React](https://reactjs.org/)
* [Socket.io Client](https://socket.io/docs/v4/client-api/)
* [React Router](https://reactrouter.com/)
* [React Toastify](https://fkhadra.github.io/react-toastify/) (for notifications)
* \[Styled Components / Tailwind / CSS Modules] (customize if used)

## 🖼️ Screenshots

> Include screenshots or GIFs showing:

* Global chat in action
* Private messages
* Typing indicator
* Notifications
* Responsive UI on mobile

## 🌐 Live Demo

If deployed, add links here:

* 🔗 [Frontend on Vercel / Netlify](https://your-frontend-link.com)
* 🔗 [Backend on Render / Railway](https://your-backend-link.com)

## 🧑‍💻 Contributing

To contribute:

1. Fork this repo
2. Create your feature branch: `git checkout -b feature/chat-enhancement`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/chat-enhancement`
5. Open a pull request

## 📄 License

This project is licensed under the [MIT License](../LICENSE).
