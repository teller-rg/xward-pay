import React from 'react';
import { JoinNow } from './components/joinnow/JoinNow';
import { About } from './components/about/About';
import { Slogan } from './components/slogan/Slogan';
import { Solutions } from './components/solutions/Solutions';

export const HomeView: React.FC = () => (
  <>
    <JoinNow />
    <About />
    <Slogan />
    <Solutions />
  </>
);
