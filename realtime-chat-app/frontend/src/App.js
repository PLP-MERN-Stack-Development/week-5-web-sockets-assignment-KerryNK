import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', { autoConnect: false });

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.connect();

    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('chat message');
      socket.disconnect();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    socket.emit('chat message', { user: 'User', text: input, time: new Date() });
    setInput('');
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>Real-Time Chat</h2>
      <div style={{ height: 300, overflowY: 'scroll', border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: 10 }}>
            <b>{msg.user}</b> <small>{new Date(msg.time).toLocaleTimeString()}</small>
            <div>{msg.text}</div>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ width: '100%', padding: 10, boxSizing: 'border-box' }}
        />
      </form>
    </div>
  );
};

export default App;