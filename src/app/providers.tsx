"use client"

import { Web3OnboardProvider } from "@web3-onboard/react"
import { web3Onboard } from "@/lib/onboard"
import { ReactNode } from "react"
import AppStateProvider from "@/components/AppStateProvider"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page';

export function Providers({ children }: { children: ReactNode }) {
  return (
    
    <AppStateProvider>
      <Web3OnboardProvider web3Onboard={web3Onboard}>
        {children}
      </Web3OnboardProvider>
    </AppStateProvider>


  )
}
