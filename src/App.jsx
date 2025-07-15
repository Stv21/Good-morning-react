import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GoodMorningCard from './components/GoodMorningCard';
import TimeDisplay from './components/TimeDisplay';
import { getCurrentTime, formatGreeting, getBackgroundImage } from './utils/timeUtils';
import './styles/App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [greeting, setGreeting] = useState(formatGreeting());
  const [backgroundImage, setBackgroundImage] = useState(getBackgroundImage());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setGreeting(formatGreeting());
      setBackgroundImage(getBackgroundImage());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app-container">
      <Header />
      
      {/* Add time-based background image */}
      <div className="time-image-container">
        <img 
          src={backgroundImage} 
          alt="Time of day illustration" 
          className="time-image"
        />
      </div>
      
      <GoodMorningCard greeting={greeting} />
      <TimeDisplay time={currentTime} />
    </div>
  );
}

export default App;