"use client"

import React, { useState, useEffect } from 'react';

interface CubeProps {
  textColor: string;
}

const Cube1: React.FC<CubeProps> = ({}) => {
  const [exploded, setExploded] = useState(false);

  useEffect(() => {
    const explodeTimeout = setTimeout(() => {
      setExploded(true);
    }, 3000); // Explode after 3 seconds

    return () => {
      clearTimeout(explodeTimeout);
    };
  }, []);

  const resetExplode = () => {
    setExploded(false);
  };

  return (
    <div className="scene">
      <div className={`cube ${exploded ? '' : 'rotating'}`} onAnimationEnd={resetExplode}>
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
  );

}

export default Cube1;

