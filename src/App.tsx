import { Header } from './components/Header';
import { HomeView } from './views/home/HomeView';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
