import React from 'react';
import './GoodMorningCard.css';

const GoodMorningCard = ({ greeting }) => {
    return (
        <div className="card" style={{ textAlign: 'center', width: '100%' }}>
            <h2 className="greeting-text">{greeting}</h2>
            <p style={{ textAlign: 'center' }}>Welcome to your personalized dashboard. Start your day with focus and intention.</p>
        </div>
    );
};

export default GoodMorningCard;