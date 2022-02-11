import React from 'react';
import { Header } from 'components/header/Header';
import { HomeView } from './views/home/HomeView';
import { Footer } from 'components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
