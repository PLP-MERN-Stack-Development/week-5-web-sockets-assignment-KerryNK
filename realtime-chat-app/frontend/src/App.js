import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Chat from './components/Chat';

const socket = io('http://localhost:5000');

function App() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = (message) => {
    socket.emit('sendMessage', { user, message });
  };

  return (
    <div className="App">
      <h1>Real-Time Chat Application</h1>
      <Chat messages={messages} sendMessage={sendMessage} setUser={setUser} />
    </div>
  );
}

export default App;