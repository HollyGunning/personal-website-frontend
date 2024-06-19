"use client"; // Ensure this directive is at the top
import React, { useEffect, useRef } from 'react';

const BgVisualEffect: React.FC = () => {
const backgroundRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
    if (backgroundRef.current) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const xPos = (clientX / innerWidth) * 100;
    const yPos = (clientY / innerHeight) * 100;
    backgroundRef.current.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%, rgba(147, 112, 219, 0.3), transparent 30%)`;
    }
  };
  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);

return (
  <div className="overflow-hidden visual-effect-container">
    <div ref={backgroundRef} className="background-effect"></div>
  </div>
);
};

export default BgVisualEffect;