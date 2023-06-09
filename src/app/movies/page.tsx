"use client"

import React, { useState, useEffect } from "react";
import Cube from '../../components/Cube';
import MovieReviews from "@/components/MovieReviews";


export default function Home() {

  return (
    <main
    className="flex flex-row items-center justify-center h-screen min-h-screen p-6" 
    >
    <MovieReviews />
    </main>
  );
  
}


