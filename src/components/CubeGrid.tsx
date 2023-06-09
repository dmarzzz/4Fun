// CubeGrid.tsx
import React, { useState, useEffect } from 'react';
import RotatingCube from './RotatingCube';

type CubeGridProps = {
  width: number,
  height: number,
  centerComponent: JSX.Element,
  colorPairs: any[],
  cube: string[],
  innerCube: string[],
  imageNames: string[],
};

const CubeGrid: React.FC<CubeGridProps> = ({ width, height, centerComponent, colorPairs, cube, innerCube, imageNames }) => {

  const [rotation, setRotation] = useState(0);
  const [innerRotation, setInnerRotation] = useState(0);
  const [flickerRate, setFlickerRate] = useState(1000);
  const [colorPair, setColorPair] = useState(colorPairs[0]);
  const [showImage, setShowImage] = useState(false);
  const [randomX, setRandomX] = useState(0);
  const [randomY, setRandomY] = useState(0);
  const [randomImageIndex, setRandomImageIndex] = useState(0);
  const [randomImageIndex2, setRandomImageIndex2] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation(rotation => (rotation + 1) % cube[0].length);
      setInnerRotation(rotation => (rotation - 1 + innerCube[0].length) % innerCube[0].length);
    }, 100);
    return () => clearInterval(intervalId);
  }, [cube, innerCube]);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setFlickerRate(50 + (Math.random() * 50));
    }, 20000);
    return () => clearInterval(flickerInterval);
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colorPairs.length);
    setColorPair(colorPairs[randomIndex]);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setRandomX(Math.random());
      setRandomY(Math.random());
      setRandomImageIndex(Math.floor(Math.random() * imageNames.length));
      setRandomImageIndex2(Math.floor(Math.random() * imageNames.length));
    }, 10000);

    return () => clearInterval(imageInterval);
  }, []);

  if (width % 2 === 0 || height % 2 === 0) {
    return <div>Width and Height must be odd numbers!</div>;
  }

  const middleRowIndex = Math.floor(height / 2);
  const middleColIndex = Math.floor(width / 2);

  const { topTextColor } = colorPair;

  return (
    <div className="grid items-center justify-center h-screen p-6 gap-4"
         style={{
           gridTemplateRows: `repeat(${height}, auto)`,
           gridTemplateColumns: `repeat(${width}, auto)`
         }}>
      {Array.from({ length: height }).map((_, rowIndex) =>
        Array.from({ length: width }).map((_, colIndex) => {
          if (rowIndex === middleRowIndex && colIndex === middleColIndex) {
            return <div key={`${rowIndex}-${colIndex}`}>{centerComponent}</div>;
          }
          return (
            <div key={`${rowIndex}-${colIndex}`} className="flex flex-col items-center justify-center">
              <RotatingCube cube={innerCube} rotation={innerRotation} textColor={topTextColor} />
              <RotatingCube cube={cube} rotation={rotation} textColor={topTextColor} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default CubeGrid;
