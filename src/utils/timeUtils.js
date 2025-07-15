import morningBg from '../assets/morning-background.png';
import afternoonBg from '../assets/afternoon-background.png';
import eveningBg from '../assets/evening-background.png';

export const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const formatGreeting = () => {
  const hours = new Date().getHours();
  if (hours < 12) return "Good Morning";
  if (hours < 18) return "Good Afternoon";
  return "Good Evening";
};

export const getBackgroundImage = () => {
  const hours = new Date().getHours();
  if (hours < 12) return morningBg;
  if (hours < 18) return afternoonBg;
  return eveningBg;
};