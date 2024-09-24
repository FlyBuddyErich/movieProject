import React, { useEffect, useState, useCallback } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState('default');
  const [cursorColor, setCursorColor] = useState('white');
  const [isOverModal, setIsOverModal] = useState(false);

  const getElementAtPoint = useCallback((x, y) => {
    return document.elementFromPoint(x, y);
  }, []);

  const getBackgroundColor = useCallback((element) => {
    const bgColor = window.getComputedStyle(element).backgroundColor;
    if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
      return bgColor;
    }
    return element.parentElement ? getBackgroundColor(element.parentElement) : 'rgb(255, 255, 255)';
  }, []);

  const isDarkColor = useCallback((color) => {
    const rgb = color.match(/\d+/g);
    if (rgb) {
      const [r, g, b] = rgb.map(Number);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness < 128;
    }
    return false;
  }, []);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        setCursorType('pointer');
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorType('text');
      } else {
        setCursorType('default');
      }

      const elementAtPoint = getElementAtPoint(e.clientX, e.clientY);
      if (elementAtPoint) {
        const bgColor = getBackgroundColor(elementAtPoint);
        setCursorColor(isDarkColor(bgColor) ? 'white' : 'black');
        setIsOverModal(elementAtPoint.closest('.modal-overlay') !== null);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [getElementAtPoint, getBackgroundColor, isDarkColor]);

  return (
    <div 
      className={`custom-cursor ${isVisible ? 'visible' : ''} ${cursorType} ${isOverModal ? 'over-modal' : ''}`}
      style={{ 
        '--x': `${position.x}px`,
        '--y': `${position.y}px`,
        '--cursor-color': cursorColor
      }}
    />
  );
};

export default CustomCursor;