import React from 'react';

const TimeDisplay = ({ time }) => {
    return (
        <div className="card" style={{ textAlign: 'center', width: '100%' }}>
            <div className="time-display">{time}</div>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>Current Local Time</p>
        </div>
    );
};

export default TimeDisplay;