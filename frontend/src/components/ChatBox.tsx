import React, { useState } from 'react';

const ChatBox: React.FC = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'assistant' }[]>([]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages((prev) => [...prev, userMessage]);
        
        // Call the backend API to get the assistant's response
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: input }),
        });

        const data = await response.json();
        const assistantMessage = { text: data.reply, sender: 'assistant' };
        setMessages((prev) => [...prev, assistantMessage]);
        setInput('');
    };

    return (
        <div className="chatbox">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default ChatBox;