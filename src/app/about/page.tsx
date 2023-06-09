"use client"

import React, { useState, useEffect } from "react";
import FolderStructure from '../../components/FolderStructure';
import CubeGrid from '../../components/CubeGrid';
import Cube from '../../components/Cube';
import AboutParagraph from '../../components/AboutParagraph';

const colorPairs = [
  { backgroundStart: "#000", backgroundEnd: "#000", topTextColor: "#F73A8F", bottomTextColor: "#F73A8F" },
];

const imageNames = ['floater1.png', 'floater2.png', 'floater3.png','floater4.png', 'floater5.png', 'floater6.png'];


// eslint-disable-next-line react-hooks/exhaustive-deps
const cube = [
  "      +--------+",
  "     /        /|",
  "    /        / |",
  "   +--------+  |",
  "   |        |  |",
  "   |        |  +",
  "   |        | /",
  "   |        |/",
  "   +--------+"
];

// eslint-disable-next-line react-hooks/exhaustive-deps
const innerCube = [
  "   +--+",
  "  /   /|",
  " +---+ |",
  " |   | +",
  " |   |/",
  " +---+"
];

export default function Home() {
  const [flickerRate, setFlickerRate] = useState(1000);
  const [colorPair, setColorPair] = useState(colorPairs[0]);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 20000); // 60 seconds
    return () => clearTimeout(timer);
  }, []);

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

  const [randomX, setRandomX] = useState(0);
  const [randomY, setRandomY] = useState(0);
  const [randomImageIndex, setRandomImageIndex] = useState(0);
  const [randomImageIndex2, setRandomImageIndex2] = useState(1);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setRandomX(Math.random());
      setRandomY(Math.random());
      setRandomImageIndex(Math.floor(Math.random() * imageNames.length)); // Corrected line
      setRandomImageIndex2(Math.floor(Math.random() * imageNames.length)); // Corrected line
    }, 10000); // Change image and position every 10 seconds

    return () => clearInterval(imageInterval);
}, []);

  const { backgroundStart, backgroundEnd, topTextColor, bottomTextColor  } = colorPair;

  return (
    <main
      className="flex flex-row items-center justify-center h-screen min-h-screen p-6 overflow-y-auto"
      style={{
        background: `radial-gradient(140% 107.13% at 50% 10%, ${backgroundStart} 37.41%, ${backgroundEnd} 69.27%, ${backgroundEnd} 100%)`,
      }}
    >
      <Cube/>
      <CubeGrid
        width={3}
        height={3}
        centerComponent={<AboutParagraph />}
        colorPairs={colorPairs}
        cube={cube}
        innerCube={innerCube}
        imageNames={imageNames}
      />
      <Cube/>
    {/* Add Personal photos later */}
      {/* {showImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/${imageNames[randomImageIndex]}`}
          alt="Floating Image"
          className="floating-image1"
          style={{
            '--random-x': randomX,
            '--random-y': randomY
          } as React.CSSProperties}
        />

      )}

{showImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/${imageNames[randomImageIndex2]}`}
          alt="Floating Image"
          className="floating-image2"
          style={{
            '--random-x': randomX,
            '--random-y': randomY
          } as React.CSSProperties}
        />

      )} */}

    </main>
  );
  
}


