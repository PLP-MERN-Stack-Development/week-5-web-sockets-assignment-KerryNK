import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Adjust the URL as needed

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        socket.on('typing', (user) => {
            setTyping(true);
            setTimeout(() => setTyping(false), 1000);
        });

        return () => {
            socket.off('message');
            socket.off('typing');
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (input) {
            const message = { username, text: input };
            socket.emit('message', message);
            setInput('');
        }
    };

    const handleTyping = () => {
        socket.emit('typing', username);
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.username}: </strong>{msg.text}
                    </div>
                ))}
                {typing && <div>Someone is typing...</div>}
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
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;