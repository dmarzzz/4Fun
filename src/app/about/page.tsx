"use client"

import React, { useState, useEffect } from "react";
import CubeGrid from '../../components/CubeGrid';
import AboutParagraph from '../../components/AboutParagraph';

const aboutTextColor = "#F73A8F";

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
      className="flex flex-col items-center min-h-screen w-full p-4 md:p-6 overflow-y-auto"
      style={{
        backgroundColor: "#000",
      }}
    >
      <CubeGrid
        width={3}
        height={3}
        centerComponent={<AboutParagraph />}
        cube={cube}
        innerCube={innerCube}
        textColor={aboutTextColor}
        fitToViewport={false}
        centerLayout="full-width"
        showMiddleRowCubes={false}
      />
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
