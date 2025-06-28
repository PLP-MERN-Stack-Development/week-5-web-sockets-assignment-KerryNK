import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Chat from './components/Chat';
import {socket } from './chat';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setinput] = useState('');

  useEffect(() => {
    socket.connect();
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
      socket.disconnect();
    };
  }, []);

  const sendMessage = (message) => {
    if (input.trim() !== '') return;
    socket.emit('chat message', message); { user: 'User', text: input, time: new Date() });
    setinput('');
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>Real</h2>

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