"use client"

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const colorPairs = [
  { backgroundStart: "#000", backgroundEnd: "#000", topTextColor: "#39FF14", bottomTextColor: "#39FF14" },
  { backgroundStart: "#000", backgroundEnd: "#17FFFF", topTextColor: "#17FFFF", bottomTextColor: "#000" },

  { backgroundStart: "#000", backgroundEnd: "#000", topTextColor: "#39FF14", bottomTextColor: "#39FF14" },
  { backgroundStart: "#000", backgroundEnd: "#000", topTextColor: "#39FF14", bottomTextColor: "#39FF14" },
];

const imageNames = ['floater1.png', 'floater2.png', 'floater3.png','floater4.png', 'floater5.png', 'floater6.png'];


export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [innerRotation, setInnerRotation] = useState(0);
  const [flickerRate, setFlickerRate] = useState(1000);
  const [colorPair, setColorPair] = useState(colorPairs[0]);
  const [showImage, setShowImage] = useState(false);

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

  const innerCube = [
    "   +--+",
    "  /   /|",
    " +---+ |",
    " |   | +",
    " |   |/",
    " +---+"
  ];


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 20000); // 60 seconds
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
      className="flex flex-col items-center justify-center h-screen min-h-screen p-6"
      style={{
        background: `radial-gradient(140% 107.13% at 50% 10%, ${backgroundStart} 37.41%, ${backgroundEnd} 69.27%, ${backgroundEnd} 100%)`,
      }}
    >
<pre className="cube-text" style={{ color: topTextColor }}>
        <span>
          {innerCube.map(row => row.slice(innerRotation) + row.slice(0, innerRotation)).join("\n")}
        </span>
      </pre>
      <pre className="cube-text" style={{ color: topTextColor }}>
        <span>
          {cube.map(row => row.slice(rotation) + row.slice(0, rotation)).join("\n")}
        </span>
      </pre>
      <ul className="folder-structure mt-4 neon-glow" style={{ animation: `flicker ${flickerRate}s infinite` }}>
        <li>
          daniel_marzec/
          <ul>
            <li className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[3px] before:-left-3 before:w-3 before:h-4 border-white">
              about/
              <ul className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[3px] before:-left-3 before:w-3 before:h-4 border-white">
                <li> <a href="/test"> <p>work.html </p> </a> </li>
                <li className="relative before:border-l before:border-b before:absolute before:-top-3 before:-left-3 before:w-3 before:h-[26px] border-white">
                  play.html
                </li>
              </ul>
            </li>
            <li className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[60px] before:-left-3 before:w-3 before:h-[73px] border-white">
              writings/
              <ul className="relative before:border-l ml-4 before:mr-4 before:border-b before:absolute before:-top-[3px] before:-left-3 before:w-3 before:h-4 border-white">
                <li><a href="#"> <p>Link Text </p> </a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <pre className="cube-text" style={{ color: bottomTextColor }}>
        <span>
          {cube.map(row => row.slice(rotation) + row.slice(0, rotation)).join("\n")}
        </span>
      </pre>
      <pre className="cube-text" style={{ color: bottomTextColor }}>
        <span>
          {innerCube.map(row => row.slice(innerRotation) + row.slice(0, innerRotation)).join("\n")}
        </span>
      </pre>
      
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
          src={`/${imageNames[randomImageIndex]}`}
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
