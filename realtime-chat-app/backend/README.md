# Real-Time Chat Application - Backend

## Overview
This is the backend for a real-time chat application built using Node.js, Express, and Socket.io. The backend handles user connections, message broadcasting, and manages chat functionalities.

## Features
- Real-time messaging using Socket.io
- User connection management
- Typing indicators
- Online/offline status tracking

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Navigate to the backend directory:
   ```
   cd realtime-chat-app/backend
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

### Running the Server
To start the server, run the following command:
```
npm start
```
The server will listen on the specified port (default is 3000).

### API Routes
The backend exposes several API routes for chat functionalities. Refer to the `src/routes/index.js` file for detailed route definitions.

## Usage
Once the server is running, you can connect to it using the frontend application. Ensure that the frontend is configured to connect to the correct backend URL.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.