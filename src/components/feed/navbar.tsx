"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const lampRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lamp = lampRef.current;

    if (!lamp) {
      return
    }

    const pieces = Array.from(lamp.children);

    const handleMouseMove = (event: any) => {
      const { clientX, clientY } = event;

      pieces.forEach(piece => {
        const rect = piece.getBoundingClientRect();
        const dx = clientX - (rect.left + rect.width / 2);
        const dy = clientY - (rect.top + rect.height / 2);
        const angle = Math.atan2(dy, dx);
        const distance = Math.sqrt(dx * dx + dy * dy);

        gsap.to(piece, {
          x: Math.cos(angle) * distance * 0.1,
          y: Math.sin(angle) * distance * 0.1,
          rotation: angle + 'rad',
          duration: 0.5,
          ease: 'power3',
        });
      });
    };

    lamp.addEventListener('mousemove', handleMouseMove);

    return () => {
      lamp.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-blue-400 lamp" ref={lampRef}>
      <div className="piece"></div>
      <div className="piece "></div>
      <div className="piece absolute w-16 h-16 rounded-full bg-red-900 pointer-events-none"></div>
    
      <div className="absolute w-16 h-16 rounded-full bg-red-900 pointer-events-none ball" />
    </div>
  )
};

export default Navbar;
