import React from 'react';
import ChatBox from '../components/ChatBox';
import Header from '../components/Header';
import './styles/global.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <Header />
            <main>
                <h1>Welcome to the Smart Legal Assistant for Renters</h1>
                <ChatBox />
            </main>
        </div>
    );
};

export default Home;