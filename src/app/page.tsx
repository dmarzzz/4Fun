"use client"

import React, { useState, useEffect } from "react";
import FolderStructure from '../components/FolderStructure';
import CubeGrid from '../components/CubeGrid';
import MovieReviews from '../components/MovieReviews';

const cubeTextColors = ["#39FF14", "#17FFFF", "#CB0EFF", "#F73A8F"];

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
  const [textColor, setTextColor] = useState(cubeTextColors[0]);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 100000); // Delay appearance by ~100s for calmer pacing
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setFlickerRate(50 + (Math.random() * 50));
    }, 20000);
    return () => clearInterval(flickerInterval);
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cubeTextColors.length);
    setTextColor(cubeTextColors[randomIndex]);
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
    }, 50000); // Change image and position every 50 seconds

    return () => clearInterval(imageInterval);
}, []);

  return (
    <main
    className="flex flex-row items-center justify-center h-screen w-full p-4 md:p-6 overflow-hidden"
    style={{
      backgroundColor: "#000",
    }}
  >
    <CubeGrid
      width={3}
      height={3}
      centerComponent={<FolderStructure flickerRate={flickerRate} />}
      cube={cube}
      innerCube={innerCube}
      textColor={textColor}
    />
      {showImage && (
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

      )}

    </main>
  );
  
}
