import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  DirectoryProvider from './context/DirectoryProvider.jsx';

// Pages
import Home from './components/Pages/Home.jsx';
import Configuration from './components/Pages/Configuration.jsx';
import InGame from './components/Pages/InGame.jsx';
import LevelOverlay from './components/Pages/LevelOverlay.jsx';
import LevelSelector from './components/Pages/LevelSelector.jsx';
import PlayerSelector from './components/Pages/PlayerSelector.jsx';

function App() {
  return (
    <DirectoryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/ingame" element={<InGame />} />
          <Route path="/leveloverlay" element={<LevelOverlay />} />
          <Route path="/levelselector" element={<LevelSelector />} />
          <Route path="/playerselector" element={<PlayerSelector />} />
        </Routes>
      </Router>
    </DirectoryProvider>
  );
}

export default App;
