import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000', { autoConnect: false });

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [typingUser, setTypingUser] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Prompt for username on mount
        let name = '';
        while (!name) {
            name = prompt('Enter your username:');
        }
        setUsername(name);

        socket.auth = { username: name };
        socket.connect();

        socket.on('chat message', (message) => {
            setMessages((prev) => [...prev, message]);
        });

        socket.on('typing', (user) => {
            if (user !== name) {
                setTypingUser(user);
                setTimeout(() => setTypingUser(''), 1000);
            }
        });

        return () => {
            socket.off('chat message');
            socket.off('typing');
            socket.disconnect();
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;
        socket.emit('chat message', { user: username, text: input, time: new Date() });
        setInput('');
    };

    const handleTyping = () => {
        socket.emit('typing', username);
    };

    return (
        <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
            <h2>Real-Time Chat</h2>
            <div style={{ height: 300, overflowY: 'scroll', border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
                {messages.map((msg, idx) => (
                    <div key={idx} style={{ marginBottom: 10 }}>
                        <b>{msg.user}</b> <small>{msg.time ? new Date(msg.time).toLocaleTimeString() : ''}</small>
                        <div>{msg.text}</div>
                    </div>
                ))}
                {typingUser && <div><em>{typingUser} is typing...</em></div>}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        handleTyping();
                    }}
                    placeholder="Type a message..."
                    style={{ width: '100%', padding: 10, boxSizing: 'border-box' }}
                />
            </form>
        </div>
    );
};

export default Chat;