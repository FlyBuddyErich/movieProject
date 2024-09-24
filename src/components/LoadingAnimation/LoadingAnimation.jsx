import React from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <div className="loading-circle"></div>
      <div className="loading-text">REELMAGIC loading... Stand by</div>
    </div>
  );
};

export default LoadingAnimation;